import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Contexto from "../AppContext";

const APP_URL = process.env.REACT_APP_APP_URL;

export default function Cabecalho() {
  const {
    librasAtivo,
    setLibrasAtivo,
    menuAberto,
    setMenuAberto,
    setUsuario,
    usuarioLogado,
  } = useContext(Contexto);

  useEffect(() => {
    if (!menuAberto) {
      document.getElementById("menuLateral").classList.add("desativar");
    } else {
      document.getElementById("menuLateral").classList.remove("desativar");
    }
  }, [menuAberto]);

  function sair(event) {
    event.preventDefault();
    localStorage.removeItem("usuario");
    setUsuario({});
    window.location.replace(APP_URL + "login");
  }

  return (
    <div className="w-100 p-2 bg-light m-0">
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
        {window.innerWidth > 908 && (
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
            onClick={(event) => {
              event.preventDefault();
              !librasAtivo
                ? localStorage.setItem("librasAtivo", true)
                : localStorage.removeItem("librasAtivo");
              setLibrasAtivo(!librasAtivo);
            }}
          >
            <i className="fa fa-sign-language fa-lg"></i>
          </button>
        )}
        {usuarioLogado() && (
          <button
            type="button"
            title="Ver Notificações"
            className="btn btn-secondary mr-2 pt-2 pb-2"
          >
            <i className="fa fa-bell fa-lg"></i>
          </button>
        )}
        {!usuarioLogado() && (
          <Link
            to="/login"
            type="button"
            className="btn btn-primary pt-2 pb-2 text-white"
            title="Entrar"
          >
            <i className="fa fa-sign-in-alt fa-lg"></i> Entrar
          </Link>
        )}
        {usuarioLogado() && (
          <button
            type="button"
            className="btn btn-danger pt-2 pb-2 text-white"
            onClick={sair}
            title="Sair"
          >
            <i className="fa fa-sign-out-alt fa-lg"></i> Sair
          </button>
        )}
      </div>
    </div>
  );
}
