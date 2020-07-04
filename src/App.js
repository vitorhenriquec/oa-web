import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Cabecalho from "./layout/Cabecalho";
import MenuLateral from "./layout/MenuLateral";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Router>
          <MenuLateral />
          <div className=" container-fluid p-0">
            <Cabecalho />
            <div className="conteudo"></div>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
