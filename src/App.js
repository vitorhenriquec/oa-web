import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

import Contexto from "./AppContext";

import AcessibilidadeLibras from "./layout/AcessbilidadeLibras";
import Cabecalho from "./layout/Cabecalho";
import Rodape from "./layout/Rodape";
import MenuLateral from "./layout/MenuLateral";

import Inicio from "./paginas/inicio/Inicio";
import Sobre from "./paginas/sobre/Sobre";
import Equipe from "./paginas/equipe/Equipe";
import Publicacoes from "./paginas/publicacoes/Publicacoes";
import PlanosPublicados from "./paginas/planos/PlanosPublicados";
import NovoPlano from "./paginas/planos/NovoPlano";
import Manual from "./paginas/manual/Manual";
import Login from "./paginas/login/Login";
import Cadastro from "./paginas/cadastro/Cadastro";
import ListaUsuarios from "./paginas/usuario/ListaUsuarios";
import MeusPlanos from "./paginas/planos/MeusPlanos";
import BuscarPlano from "./paginas/planos/BuscarPlano";
import BuscarOA from "./paginas/objetosAprendizagem/BuscarOA";


const API_URL = process.env.REACT_APP_API_URL;
const APP_URL = process.env.REACT_APP_APP_URL;

function App() {
  const [librasAtivo, setLibrasAtivo] = useState(false);
  const [menuAberto, setMenuAberto] = useState(true);
  const [itemAtual, setItemAtual] = useState("");
  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    const jwtToken = localStorage.getItem("jwtToken");

    if (jwtToken) {
      atualizarInformacoes(jwtToken);
    }

    const acessbilidadeLibrasAtivo = localStorage.getItem("librasAtivo");

    setLibrasAtivo(
      acessbilidadeLibrasAtivo !== null ? acessbilidadeLibrasAtivo : false
    );
  }, []);

  function atualizarInformacoes(jwtToken) {
    if (jwtToken) {
      axios.defaults.headers.common = {
        Authorization: `Bearer ${jwtToken}`,
      };

      axios
        .get(API_URL + "usuario/recuperarInformacoes")
        .then((resposta) => {
          setUsuario(resposta.data);
        })
        .catch((erro) => {
          if (erro.response) {
            var resposta = erro.response;
            if (resposta.status === 401) {
              apagandoToken();
            }
          }
        });
    }
  }

  function apagandoToken() {
    localStorage.removeItem("jwtToken");
    setUsuario({});
    toast.error("Logout feito");
    window.location.replace(APP_URL + "login");
  }

  function usuarioLogado() {
    return Object.keys(usuario).length !== 0;
  }

  function admin() {
    return usuario.papel === 1;
  }

  return (
    <div className="App wrapper">
      <Contexto.Provider
        value={{
          librasAtivo,
          setLibrasAtivo,
          menuAberto,
          setMenuAberto,
          itemAtual,
          setItemAtual,
          usuario,
          setUsuario,
          usuarioLogado,
          apagandoToken,
        }}
      >
        <Router>
          <MenuLateral />
          <div className=" container-fluid p-0">
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss={false}
              draggable
              pauseOnHover
            />
            <Cabecalho />
            <div
              className={
                window.innerWidth < 414 ? "conteudo p-1" : "conteudo p-2"
              }
            >
              <Switch>
                <Route path="/" exact={true} component={Inicio} />
                <Route path="/sobre" exact={true} component={Sobre} />
                <Route path="/equipe" exact={true} component={Equipe} />
                <Route path="/objetosAprendizagem/busca" exact={true} component={BuscarOA} />
                <Route
                  path="/publicacoes"
                  exact={true}
                  component={Publicacoes}
                />
                {usuarioLogado() && (
                  <Route
                    path="/planos"
                    exact={true}
                    component={PlanosPublicados}
                  />
                )}

                {usuarioLogado() && admin() && (
                  <Route
                    path="/usuarios"
                    exact={true}
                    component={ListaUsuarios}
                  />
                )}

                <Route path="/manual" exact={true} component={Manual} />
                {!usuarioLogado() && (
                  <Route path="/login" exact={true} component={Login} />
                )}
                {!usuarioLogado() && (
                  <Route path="/cadastro" exact={true} component={Cadastro} />
                )}
                {usuarioLogado() && (
                  <Route
                    path="/planoAula/novo"
                    exact={true}
                    component={NovoPlano}
                  />
                )}
                {usuarioLogado() && (
                  <Route
                    path="/planoAula/meusPlanos"
                    exact={true}
                    component={MeusPlanos}
                  />
                )}
                {usuarioLogado() && (
                  <Route
                    path="/planoAula/buscar"
                    exact={true}
                    component={BuscarPlano}
                  />
                )}
              </Switch>
            </div>
            <Rodape />
            {window.innerWidth > 908 && librasAtivo && itemAtual !== "" && (
              <AcessibilidadeLibras />
            )}
          </div>
        </Router>
      </Contexto.Provider>
    </div>
  );
}

export default App;
