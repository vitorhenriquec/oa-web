import React from "react";

import Versao from "./Versao";

export default function Passo1() {
  return (
    <div className="bg-light p-3 pl-5 pr-5 rounded shadow-sm">
      <Versao />
      <h2 className="mt-2 mb-2">Informações gerais</h2>
      <div className="form-group p-1">
        <label className="font-weight-bold" htmlFor="planoInstituicao">
          Instituição de ensino*:
        </label>
        <select
          id="planoInstituicao"
          className="custom-select"
          defaultValue="0"
        >
          <option value="0">Escolha uma instituição de ensino</option>
          <option value="1">Escola 1</option>
          <option value="2">Escola 2</option>
          <option value="3">Escola 3</option>
        </select>
      </div>
      <div className="form-group p-1">
        <label className="font-weight-bold" htmlFor="planoInstituicao">
          Ano de ensino que melhor se aplica*:
        </label>
        <select
          id="planoInstituicao"
          className="custom-select"
          defaultValue="1"
        >
          <option value="1">Educação infantil 1</option>
          <option value="2">Educação infantil 2</option>
          <option value="3">Educação infantil 3</option>
        </select>
      </div>
      <div className="form-group p-1">
        <label className="font-weight-bold" htmlFor="planoInstituicao">
          Duração (minutos)*:
        </label>
        <input
          placeholder="Digite aqui a duração em minutos"
          type="number"
          className="form-control"
          id="planoInstituicao"
          min="1"
          required
        />
      </div>
    </div>
  );
}
