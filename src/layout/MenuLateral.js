import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import "./MenuLateral.css";

import Contexto from "../AppContext";

export default function MenuLateral(props) {
  const { setItemAtual } = useContext(Contexto);
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
      <ul className="list-unstyled components">
        {abasMenus.map((aba, indice) => {
          return (
            <li key={indice}>
              <NavLink
                to={aba.link}
                onMouseOver={(event) => setItemAtual(aba.identificador)}
                onMouseOut={(event) => setItemAtual("")}
              >
                <i className={"fa fa-home " + aba.icone + " mr-1"}></i>
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
