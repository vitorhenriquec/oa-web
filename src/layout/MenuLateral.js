import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import "./MenuLateral.css";

import Contexto from "../AppContext";

export default function MenuLateral(props) {
  const { setItemAtual, menuAberto, setMenuAberto } = useContext(Contexto);
  const abasMenus = [
    {
      denominacao: "Inicio",
      icone: "fa-home",
      link: "/",
      identificador: "inicio",
    },
    {
      denominacao: "Sobre",
      icone: "fa-info",
      link: "/sobre",
      identificador: "sobre",
    },
    {
      denominacao: "Equipe",
      icone: "fa-user-friends",
      link: "/equipe",
      identificador: "equipe",
    },
    {
      denominacao: "Publicações",
      icone: "fa-book-open",
      link: "/publicacoes",
      identificador: "publicacoes",
    },
    {
      denominacao: "Planos Publicados",
      icone: "fa-file-alt",
      link: "/planos",
      identificador: "planos",
    },
    {
      denominacao: "Manual",
      icone: "fa-book",
      link: "/manual",
      identificador: "manual",
    },
  ];
  return (
    <nav id="menuLateral" className="bg-dark">
      <div id="secaoTelaCelular" className="p-2">
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
      </div>
      <ul className="list-unstyled components">
        {abasMenus.map((aba, indice) => {
          return (
            <li key={indice}>
              <NavLink
                to={aba.link}
                onMouseOver={(event) => setItemAtual(aba.identificador)}
                onMouseOut={(event) => setItemAtual("")}
              >
                <i className={"fa " + aba.icone + " fa-lg mr-1"}></i>
                {aba.denominacao}

                <i className="pt-1 float-right fa fa-angle-left fa-xl"></i>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
