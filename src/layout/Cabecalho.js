import React, { useState, useEffect } from "react";

export default function Cabecalho() {
  const [librasAtivo, setLibrasAtivo] = useState(false);
  const [menuAberto, setMenuAberto] = useState(true);

  useEffect(() => {
    console.log(menuAberto);
    if (!menuAberto) {
      document.getElementById("menuLateral").classList.add("active");
    } else {
      document.getElementById("menuLateral").classList.remove("active");
    }
  }, [menuAberto]);

  return (
    <div className="w-100 p-3 bg-light m-0">
      <button
        type="button"
        title={menuAberto ? "Fechar menu lateral" : "Abrir menu lateral"}
        className="btn btn-primary"
        onClick={() => setMenuAberto(!menuAberto)}
      >
        <i
          className={
            menuAberto
              ? "fa fa-times fa-lg pt-2 pb-2"
              : "fa fa-bars fa-lg pt-2 pb-2"
          }
        ></i>
      </button>
      <div className="float-right">
        <button
          type="button"
          title={
            librasAtivo
              ? "Desativar acessbilidade em Libras"
              : "Ativar acessibilidade em Libras"
          }
          className={
            librasAtivo
              ? "btn btn-dark-blue mr-2 text-white pt-2 pb-2"
              : "btn mr-2 text-dark pt-2 pb-2"
          }
          onClick={() => setLibrasAtivo(!librasAtivo)}
        >
          <i className="fa fa-sign-language fa-lg"></i>
        </button>
        <button
          type="button"
          title="Ver Notificações"
          className="btn btn-danger mr-2 pt-2 pb-2"
        >
          <i className="fa fa-bell fa-lg"></i>
        </button>
        <button
          type="button"
          className="btn btn-primary pt-2 pb-2"
          title="Entrar"
        >
          <i className="fa fa-sign-in-alt fa-lg"></i> Entrar
        </button>
      </div>
    </div>
  );
}
