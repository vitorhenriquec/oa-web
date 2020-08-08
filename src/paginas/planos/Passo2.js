import React, { useState } from "react";

import Versao from "./Versao";

export default function Passo2() {
  const [oas, setOas] = useState([
    { id: 1, denominacao: "A" },
    { id: 2, denominacao: "B" },
  ]);

  const [oasSelecionados, setOasSelecionados] = useState([]);

  function selecionar(indice) {
    const oa = oas[indice];

    var novosOasSelecionados = oasSelecionados;
    novosOasSelecionados.push(oa);
    setOasSelecionados(novosOasSelecionados);

    var novosOas = oas;
    novosOas = novosOas.filter((oasSelecionado) => {
      return oasSelecionado !== oa;
    });
    setOas(novosOas);
  }

  function retirar(indice) {
    const oa = oasSelecionados[indice];

    var novosOas = oas;
    novosOas.push(oa);
    setOasSelecionados(novosOas);

    var novosOasSelecionados = oasSelecionados;
    novosOasSelecionados = novosOasSelecionados.filter((oasSelecionado) => {
      return oasSelecionado !== oa;
    });
    setOasSelecionados(novosOasSelecionados);
  }

  return (
    <div className="bg-light p-3 rounded shadow-sm">
      <Versao />
      <h2 className="mt-2 mb-2">OAs relacionados</h2>
      <div className="form-group mt-3 p-1">
        <label className="font-weight-bold d-none" htmlFor="buscarOa">
          Nome do OA:
        </label>
        <input
          placeholder="Procure pelo OA"
          type="text"
          className="form-control"
          id="buscarOa"
        />
      </div>
      <div className="row p-3">
        <div className="col-6">
          <h5 className="mb-2">Selecione</h5>
          <ul className="list-group">
            {oas.map((oa, indice) => {
              return (
                <li key={oa.id} className="list-group-item mb-2">
                  {oa.denominacao}
                  <i
                    className="fa fa-plus fa-lg float-right pt-1 text-primary"
                    data-container="body"
                    data-toggle="popover"
                    data-content="Clique para selecionar este OA."
                    onClick={(evento) => {
                      evento.preventDefault();
                      selecionar(indice);
                    }}
                  ></i>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-6">
          <h5>OA(s) selecionado(s)</h5>
          <ul className="list-group">
            {oasSelecionados.map((oasSelecionado, indice) => {
              return (
                <li className="list-group-item mb-2">
                  {oasSelecionado.denominacao}
                  <i
                    className="fa fa-minus fa-lg float-right pt-1"
                    data-container="body"
                    data-toggle="popover"
                    data-content="Clique para retirar este OA."
                    onClick={(evento) => {
                      evento.preventDefault();
                      retirar(indice);
                    }}
                  ></i>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
