import React from "react";

import "./Mensagem.css";

export default function Mensagem({ mensagem, tipo, ocultarAposTempo }) {
  function classeTipo() {
    switch (tipo) {
      case "erro":
        return "fa-exclamation-circle text-danger";
      case "aviso":
        return "fa-exclamation-triangle text-warning";
      case "sucesso":
        return "fa-check-circle text-success";
      default:
        return "";
    }
  }

  return (
    <div
      className="toast mt-3 rounded mensagem"
      role="alert"
      data-autohide={ocultarAposTempo}
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="toast-header">
        <i className={"fa " + classeTipo() + " fa-lg"}></i>
        <strong className="mr-auto ml-1">Titulo</strong>
        <small>11 mins ago</small>
        <button
          type="button"
          className="ml-2 mb-1 close"
          data-dismiss="toast"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="toast-body pt-1 pb-0">
        <p>{mensagem}</p>
      </div>
    </div>
  );
}
