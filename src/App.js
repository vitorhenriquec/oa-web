import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Contexto from "./AppContext";

import AcessibilidadeLibras from "./layout/AcessbilidadeLibras";
import Cabecalho from "./layout/Cabecalho";
import Rodape from "./layout/Rodape";
import MenuLateral from "./layout/MenuLateral";
import Mensagem from "./layout/Mensagem";

import Inicio from "./paginas/inicio/Inicio";
import Sobre from "./paginas/sobre/Sobre";
import Equipe from "./paginas/equipe/Equipe";
import Publicacoes from "./paginas/publicacoes/Publicacoes";
import PlanosPublicados from "./paginas/planos/PlanosPublicados";
import Manual from "./paginas/manual/Manual";
import Login from "./paginas/login/Login";
import Cadastro from "./paginas/cadastro/Cadastro";

function App() {
  //Armenar escolha no storage do navegador
  const [librasAtivo, setLibrasAtivo] = useState(false);
  const [menuAberto, setMenuAberto] = useState(true);
  const [itemAtual, setItemAtual] = useState("");

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
        }}
      >
        <Router>
          <MenuLateral />
          <div className=" container-fluid p-0">
            <Cabecalho />
            <div
              className={
                window.innerWidth < 414 ? "conteudo p-1" : "conteudo p-2"
              }
            >
              <div className="w-50 mr-auto ml-auto">
                <Mensagem
                  mensagem="Cuidado"
                  tipo="erro"
                  ocultarAposTempo={false}
                />
              </div>
              <Switch>
                <Route path="/" exact={true} component={Inicio} />
                <Route path="/sobre" exact={true} component={Sobre} />
                <Route path="/equipe" exact={true} component={Equipe} />
                <Route
                  path="/publicacoes"
                  exact={true}
                  component={Publicacoes}
                />
                <Route
                  path="/planos"
                  exact={true}
                  component={PlanosPublicados}
                />
                <Route path="/manual" exact={true} component={Manual} />
                <Route path="/login" exact={true} component={Login} />
                <Route path="/cadastro" exact={true} component={Cadastro} />
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
