import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Cabecalho from "./layout/Cabecalho";
import MenuLateral from "./layout/MenuLateral";
import Inicio from "./paginas/Inicio";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Router>
          <MenuLateral />
          <div className=" container-fluid p-0">
            <Cabecalho />
            <div className="conteudo p-3">
              <Switch>
                <Route path="" exact={true} component={Inicio} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
