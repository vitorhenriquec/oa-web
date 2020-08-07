import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import "./MenuLateral.css";

import Contexto from "../AppContext";

export default function MenuLateral(props) {
  const {
    setItemAtual,
    menuAberto,
    setMenuAberto,
    usuario,
    usuarioLogado,
  } = useContext(Contexto);
  const abasMenus = [
    {
      denominacao: "Inicio",
      icone: "fa-home",
      link: "/",
      identificador: "inicio",
      apenasUsuarioLogado: false,
      subAbas: [],
    },
    {
      denominacao: "Sobre",
      icone: "fa-info",
      link: "/sobre",
      identificador: "sobre",
      apenasUsuarioLogado: false,
      subAbas: [],
    },
    {
      denominacao: "Equipe",
      icone: "fa-user-friends",
      link: "/equipe",
      identificador: "equipe",
      apenasUsuarioLogado: false,
      subAbas: [],
    },
    {
      denominacao: "Publicações",
      icone: "fa-book-open",
      link: "/publicacoes",
      identificador: "publicacoes",
      apenasUsuarioLogado: false,
      subAbas: [],
    },
    {
      denominacao: "Planos Publicados",
      icone: "fa-file-contract",
      link: "/planos",
      identificador: "planos",
      apenasUsuarioLogado: false,
      subAbas: [],
    },
    {
      denominacao: "Manual",
      icone: "fa-book",
      link: "/manual",
      identificador: "manual",
      apenasUsuarioLogado: false,
      subAbas: [],
    },
    {
      denominacao: "Plano de Aula",
      icone: "fa-file-alt",
      link: "/planoAula",
      identificador: "planoAula",
      apenasUsuarioLogado: true,
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
    {
      denominacao: "Usuários",
      icone: "fa-users",
      link: "/usuarios",
      identificador: "usuarios",
      apenasUsuarioLogado: true,
      subAbas: [],
    },
  ];

  function mostrarOpcao(apenasUsuarioLogado) {
    if (!apenasUsuarioLogado) {
      return true;
    }

    return usuarioLogado();
  }

  function nomeAbreviado() {
    var nomes = usuario.nome.split(" ");
    var inicias = "";
    for (const indice in nomes) {
      if (indice < 2) {
        inicias += nomes[indice][0];
      } else {
        break;
      }
    }
    return inicias;
  }

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
      {usuarioLogado() && (
        <div className="w-90 mt-4 text-center">
          <div id="icone" className="m-1 w-100">
            <div
              id="iconeSemfoto"
              className="ml-auto mr-auto bg-primary rounded-circle text-white font-weight-bold"
            >
              <h1>{nomeAbreviado()}</h1>
            </div>
          </div>
          <div className="m-2">
            Bem-vindo(a), <b>{usuario.nome}</b>
          </div>
        </div>
      )}
      <ul className="list-unstyled components">
        {abasMenus.map((aba, indice) => {
          return (
            <li key={indice}>
              {aba.subAbas.length === 0 &&
                mostrarOpcao(aba.apenasUsuarioLogado) && (
                  <NavLink
                    to={aba.link}
                    onMouseOver={(event) => setItemAtual(aba.identificador)}
                    onMouseOut={(event) => setItemAtual("")}
                  >
                    <i className={"fa " + aba.icone + " fa-lg mr-1"}></i>
                    {aba.denominacao}
                  </NavLink>
                )}
              {aba.subAbas.length !== 0 &&
                mostrarOpcao(aba.apenasUsuarioLogado) && (
                  <>
                    <a
                      href={"#" + aba.identificador}
                      data-toggle="collapse"
                      aria-expanded="false"
                      role="button"
                      aria-controls={aba.identificador}
                      className="dropdown-toggle"
                    >
                      <i className={"fa " + aba.icone + " fa-lg mr-1"}></i>
                      {aba.denominacao}
                    </a>
                    <ul
                      className="collapse list-unstyled"
                      id={aba.identificador}
                    >
                      {aba.subAbas.map((subAba) => {
                        return (
                          <li key={subAba.identificador}>
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
