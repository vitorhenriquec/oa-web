import React from "react";
import "./Manual.css";

import CadastroLogin from "./CadastroLogin";
import BuscaTextual from "./BuscaTextual";
import BuscaAvancada from "./BuscaAvancada";
import CriarPlano from "./CriarPlano";

export default function Manual() {
  return (
    <div className="text-center mr-auto ml-auto w-95 bg-transparent rounded">
      <h1 className="pt-4">Manual</h1>
      <ul
        id="listaManuais"
        className="list-unstyled border-none text-justify p-3"
      >
        <CadastroLogin />
        <BuscaTextual />
        <BuscaAvancada />
        <CriarPlano />
      </ul>
    </div>
  );
}
