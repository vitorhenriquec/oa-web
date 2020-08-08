import React from "react";

export default function Versao() {
  return (
    <div className="float-right">
      <i
        className="fa fa-plus-circle fa-lg mr-2"
        data-container="body"
        data-toggle="popover"
        data-content="Nova versão do plano"
      ></i>
      <button
        className="btn btn-secondary"
        data-container="body"
        data-toggle="popover"
        data-content="Mude a versão do plano aqui"
      >
        <i className="fa fa-language fa-lg"></i> Português
      </button>
    </div>
  );
}
