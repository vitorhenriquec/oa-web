import React from "react";
import "./Inicio.css";

export default function Inicio() {
  return (
    <div className="text-center">
      <div className="pt-5">
        <h1>OBA</h1>
        <h6>Objetos de Aprendizagem</h6>
      </div>
      <form id="buscarOA" className="mt-5">
        <div className="form-group">
          <input
            id="campoBuscaOA"
            type="text"
            className="form-control pt-2 pb-3"
            placeholder="Digite aqui para pesquisar por um Objeto de Aprendizagem"
          />
          <label htmlFor="campoBuscaOA" className="d-none">
            Digite aqui para pesquisar por um Objeto de Aprendizagem
          </label>
          <button
            type="button"
            title="Buscar por um Objeto de Aprendizagem"
            className="btn btn-primary ml-1"
          >
            <i className="fa fa-search"></i>
          </button>
        </div>
        <div className="form-group">
          <a href="/" className="text-primary">
            Busca avançada
          </a>
        </div>
      </form>
    </div>
  );
}
