import React from "react";
import { Link } from 'react-router-dom';
import "./Inicio.css";

export default function Inicio() {
  return (
    <div className="text-center">
      <div className="pt-5">
        <h1>OA</h1>
        <h6>Objetos de Aprendizagem</h6>
      </div>
      <form id="buscarOA" action="/objetosAprendizagem/busca" method="POST" className="mt-5">
        <div className="form-group d-inline-flex w-100">
          <input
            id="campoBuscaOA"
            type="text"
            className="form-control"
            placeholder="Digite aqui para pesquisar por um OA"
            aria-label="Digite aqui para pesquisar por um OA"
          />
          <button
            type="button"
            title="Buscar por um Objeto de Aprendizagem"
            className="btn btn-primary ml-1"
            title="Buscar pelo OA"
          >
            <i className="fa fa-search fa-lg"></i>
          </button>
        </div>
        <div className="form-group">
          <Link to="/objetosAprendizagem/busca" className="text-primary">
            Busca avançada
          </Link>
        </div>
      </form>
    </div>
  );
}
