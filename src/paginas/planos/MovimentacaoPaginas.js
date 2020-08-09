import React from "react";

import "./MovimentacaoPaginas.css";

export default function MovimentacaoPaginas({ passoAtual, setPassoAtual }) {
  function retornar() {
    var novoPasso = passoAtual;
    if (passoAtual - 1 >= 1) {
      novoPasso -= 1;
    }
    const passoString = "passo" + novoPasso + "-tab";
    document.getElementById(passoString).click();
    setPassoAtual(novoPasso);
  }

  function avancar() {
    var novoPasso = passoAtual;
    if (passoAtual + 1 <= 3) {
      novoPasso += 1;
    }
    const passoString = "passo" + novoPasso + "-tab";
    document.getElementById(passoString).click();
    setPassoAtual(novoPasso);
  }

  return (
    <div className="movimentacaoPaginas position-relative">
      <i
        className="fa fa-angle-left fa-lg text-primary float-left ml-1"
        data-container="body"
        data-toggle="popover"
        data-content="Passo anterior"
        onClick={(evento) => {
          retornar();
          evento.preventDefault();
        }}
      ></i>
      <i
        className="fa fa-angle-right fa-lg text-primary float-right mr-1"
        data-container="body"
        data-toggle="popover"
        data-content="Próximo passo"
        onClick={(evento) => {
          avancar();
          evento.preventDefault();
        }}
      ></i>
    </div>
  );
}
