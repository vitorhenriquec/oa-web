import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Cabecalho from "./layout/Cabecalho";
import MenuLateral from "./layout/MenuLateral";
import Inicio from "./paginas/inicio/Inicio";
import Sobre from "./paginas/sobre/Sobre";
import Equipe from "./paginas/equipe/Equipe";
import Publicacoes from "./paginas/publicacoes/Publicacoes";
import PlanosPublicados from "./paginas/planos/PlanosPublicados";
import Manual from "./paginas/manual/Manual";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Router>
          <MenuLateral />
          <div className=" container-fluid p-0">
            <Cabecalho />
            <div
              className={
                window.innerWidth < 414 ? "conteudo p-1" : "conteudo p-3"
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
                <Route
                  path="/planos"
                  exact={true}
                  component={PlanosPublicados}
                />
                <Route path="/manual" exact={true} component={Manual} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
