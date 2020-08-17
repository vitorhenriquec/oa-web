import React, { useContext } from "react";

import Contexto from "../../AppContext";

export default function OaSelecionado() {
  const { oasSelecionados, retirar } = useContext(Contexto);
  return (
    <>
      <h5>OA(s) selecionado(s)</h5>
      {oasSelecionados.map((oasSelecionado, indice) => {
        return (
          <li key={indice + "selecionados"} className="list-group-item mb-2">
            {oasSelecionado.denominacao}
            <i
              title="Remover"
              className="fa fa-minus fa-lg float-right pt-1"
              onClick={(evento) => {
                evento.preventDefault();
                retirar(indice);
              }}
            ></i>
          </li>
        );
      })}
    </>
  );
}
