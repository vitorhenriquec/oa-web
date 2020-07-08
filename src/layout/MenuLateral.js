import React from "react";
import { NavLink } from "react-router-dom";
import "./MenuLateral.css";

export default function MenuLateral() {
  return (
    <nav id="menuLateral" className="bg-dark">
      <ul className="list-unstyled components">
        <li>
          <NavLink to="/">
            <i className="fa fa-home fa-lg mr-1"></i>Inicio
            <i className="pt-1 float-right fa fa-angle-left fa-xl"></i>
          </NavLink>
        </li>
        <li>
          <NavLink to="/sobre">
            <i className="fa fa-info fa-lg"></i> Sobre
            <i className="pt-1 float-right fa fa-angle-left fa-xl"></i>
          </NavLink>
        </li>
        <li>
          <NavLink to="/equipe">
            <i className="fa fa-user-friends fa-lg mr-1"></i> Equipe
            <i className="pt-1 float-right fa fa-angle-left fa-xl"></i>
          </NavLink>
        </li>
        <li>
          <NavLink to="/publicacoes">
            <i className="fa fa-book-open fa-lg mr-1"></i>
            Publicações
            <i className="pt-1 float-right fa fa-angle-left fa-xl"></i>
          </NavLink>
        </li>
        <li>
          <NavLink to="/planos">
            <i className="fa fa-file-alt fa-lg mr-1"></i>
            Planos Publicados
            <i className="pt-1 float-right fa fa-angle-left fa-xl"></i>
          </NavLink>
        </li>
        <li>
          <NavLink to="/manual">
            <i className="fa fa-book fa-lg mr-1"></i> Manual
            <i className="pt-1 float-right fa fa-angle-left fa-xl"></i>
          </NavLink>
        </li>
        {/* <li>
            <a
              href="#homeSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              Home
            </a>
            <ul className="collapse list-unstyled" id="homeSubmenu">
              <li>
                <a href="#">Home 1</a>
              </li>
              <li>
                <a href="#">Home 2</a>
              </li>
              <li>
                <a href="#">Home 3</a>
              </li>
            </ul>
          </li> */}
      </ul>
    </nav>
  );
}
