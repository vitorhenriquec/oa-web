import React, { useState } from "react";

import Contexto from "../../AppContext";

import Versao from "./Versao";
import OaSelecionado from "./OaSelecionado";
import ListaOas from "./ListaOas";

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
    <div className="bg-light p-3 pl-5 pr-5 rounded shadow-sm">
      <Versao />
      <h2 className="mt-2 mb-2">OAs utilizados</h2>
      <div className="form-group mt-3">
        <input
          placeholder="Procure um OA por nome aqui"
          type="text"
          className="form-control"
          id="buscarOa"
          aria-label="Nome do OA"
        />
      </div>
      <div className="row p-3">
        <Contexto.Provider
          value={{ oasSelecionados, oas, selecionar, retirar }}
        >
          <div className="col-6">
            <ListaOas />
            <nav aria-label="Navegação oas disponíveis para serem selecionados">
              <ul class="pagination justify-content-end">
                <li class="page-item">
                  <a class="page-link" href="#">
                    Anterior
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    Próximo
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-6">
            <OaSelecionado />
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-end">
                <li class="page-item">
                  <a class="page-link" href="#">
                    Anterior
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    Próximo
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </Contexto.Provider>
      </div>
    </div>
  );
}
