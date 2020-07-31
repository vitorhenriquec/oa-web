import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
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
import Manual from "./paginas/manual/Manual";
import Login from "./paginas/login/Login";
import Cadastro from "./paginas/cadastro/Cadastro";

const API_URL = process.env.REACT_APP_API_URL;

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
          console.log(resposta.data);
          setUsuario(resposta.data);
        })
        .catch((erro) => {
          console.log(erro.response);
        });
    }
  }

  function usuarioLogado() {
    return Object.keys(usuario).length !== 0;
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
                <Route path="/manual" exact={true} component={Manual} />
                {!usuarioLogado() && (
                  <Route path="/login" exact={true} component={Login} />
                )}
                {!usuarioLogado() && (
                  <Route path="/cadastro" exact={true} component={Cadastro} />
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
