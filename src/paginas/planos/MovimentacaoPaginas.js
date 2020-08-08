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
    <div className="movimentacaoPaginas bg-light pb-5 mt-2 w-100 rounded">
      <button
        className="btn float-left"
        onClick={(evento) => {
          retornar();
          evento.preventDefault();
        }}
      >
        <i
          className="fa fa-chevron-circle-left fa-lg ml-2 text-primary"
          data-container="body"
          data-toggle="popover"
          data-content="Passo anterior"
        ></i>
      </button>

      <button
        className="btn float-right"
        onClick={(evento) => {
          avancar();
          evento.preventDefault();
        }}
      >
        <i
          className="fa fa-chevron-circle-right fa-lg mr-2 text-primary"
          data-container="body"
          data-toggle="popover"
          data-content="Próximo passo"
        ></i>
      </button>
    </div>
  );
}
