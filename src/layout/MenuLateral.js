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
      subAbas: [],
    },
    {
      denominacao: "Sobre",
      icone: "fa-info",
      link: "/sobre",
      identificador: "sobre",
      subAbas: [],
    },
    {
      denominacao: "Equipe",
      icone: "fa-user-friends",
      link: "/equipe",
      identificador: "equipe",
      subAbas: [],
    },
    {
      denominacao: "Publicações",
      icone: "fa-book-open",
      link: "/publicacoes",
      identificador: "publicacoes",
      subAbas: [],
    },
    {
      denominacao: "Planos Publicados",
      icone: "fa-file-alt",
      link: "/planos",
      identificador: "planos",
      subAbas: [],
    },
    {
      denominacao: "Manual",
      icone: "fa-book",
      link: "/manual",
      identificador: "manual",
      subAbas: [],
    },
    {
      denominacao: "Plano de Aula",
      icone: "fa-file-alt",
      link: "/planoAula",
      identificador: "planoAula",
      subAbas: [
        {
          denominacao: "Novo",
          icone: "fa-plus",
          link: "/novo",
          identificador: "novo",
        },
        {
          denominacao: "Meus planos",
          icone: "fa-id-badge",
          link: "/meusPlanos",
          identificador: "meusPlanos",
        },
        {
          denominacao: "Buscar",
          icone: "fa-search",
          link: "/buscar",
          identificador: "buscar",
        },
      ],
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
              {aba.subAbas.length === 0 && (
                <NavLink
                  to={aba.link}
                  onMouseOver={(event) => setItemAtual(aba.identificador)}
                  onMouseOut={(event) => setItemAtual("")}
                >
                  <i className={"fa " + aba.icone + " fa-lg mr-1"}></i>
                  {aba.denominacao}
                </NavLink>
              )}
              {aba.subAbas.length !== 0 && (
                <>
                  <a
                    href={"#" + aba.identificador}
                    data-toggle="collapse"
                    aria-expanded="false"
                    role="button"
                    aria-controls={aba.identificador}
                    class="dropdown-toggle"
                  >
                    <i className={"fa " + aba.icone + " fa-lg mr-1"}></i>
                    {aba.denominacao}
                  </a>
                  <ul className="collapse list-unstyled" id={aba.identificador}>
                    {aba.subAbas.map((subAba) => {
                      return (
                        <li>
                          <NavLink
                            to={aba.link + subAba.link}
                            onMouseOver={(event) =>
                              setItemAtual(subAba.identificador)
                            }
                            onMouseOut={(event) => setItemAtual("")}
                          >
                            <i
                              className={"fa " + subAba.icone + " fa-lg mr-1"}
                            ></i>
                            {subAba.denominacao}
                          </NavLink>
                        </li>
                      );
                    })}
                  </ul>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
