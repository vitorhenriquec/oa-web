import React, { useContext } from "react";

import Contexto from "../../AppContext";

export default function ListaOas() {
  const { oas, selecionar } = useContext(Contexto);

  return (
    <>
      <h5 className="mb-2">Selecione</h5>
      <ul className="list-group">
        {oas.map((oa, indice) => {
          return (
            <li key={indice + "oas"} className="list-group-item mb-2">
              {oa.denominacao}
              <i
                title="Selecionar"
                className="fa fa-plus fa-lg float-right pt-1 text-primary"
                onClick={(evento) => {
                  evento.preventDefault();
                  selecionar(indice);
                }}
              ></i>
            </li>
          );
        })}
      </ul>
    </>
  );
}
