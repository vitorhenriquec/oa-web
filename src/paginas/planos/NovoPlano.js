import React, { useState } from "react";

import Passo1 from "./Passo1";
import Passo2 from "./Passo2";
import Passo3 from "./Passo3";
import MovimentacaoPaginas from "./MovimentacaoPaginas";

export default function NovoPlano() {
  const [passoAtual, setPassoAtual] = useState(1);

  return (
    <div className="text-center mr-auto ml-auto w-90">
      <h1 className="pt-4 pb-2">Novo plano</h1>
      <div className="w-100 text-justify">
        <ul
          className="nav nav-pills nav-fill mt-3 mb-3"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <a
              className="nav-link active"
              id="passo1-tab"
              data-toggle="pill"
              href="#passo1"
              role="tab"
              aria-controls="passo1"
              aria-selected="true"
              onClick={(event) => {
                setPassoAtual(0);
              }}
            >
              1º Passo
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="passo2-tab"
              data-toggle="pill"
              href="#passo2"
              role="tab"
              aria-controls="passo2"
              aria-selected="false"
              onClick={(event) => {
                setPassoAtual(1);
              }}
            >
              2º Passo
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="passo3-tab"
              data-toggle="pill"
              href="#passo3"
              role="tab"
              aria-controls="passo3"
              aria-selected="false"
              onClick={(event) => {
                setPassoAtual(2);
              }}
            >
              3º Passo
            </a>
          </li>
        </ul>
        <div className="tab-content mt-3" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="passo1"
            role="tabpanel"
            aria-labelledby="passo1-tab"
          >
            <Passo1 />
          </div>
          <div
            className="tab-pane fade"
            id="passo2"
            role="tabpanel"
            aria-labelledby="passo2-tab"
          >
            <Passo2 />
          </div>
          <div
            className="tab-pane fade"
            id="passo3"
            role="tabpanel"
            aria-labelledby="passo3-tab"
          >
            <Passo3 />
          </div>
        </div>
        <MovimentacaoPaginas
          passoAtual={passoAtual}
          setPassoAtual={setPassoAtual}
        />
        <div id="acoes" className="bg-light p-3 mt-2 w-100 rounded">
          <div className="">
            <button
              role="button"
              className="btn btn-primary pl-4 pr-4"
              title="Salvar plano"
              data-container="body"
              data-toggle="popover"
              data-content="Clique aqui para salvar o plano"
            >
              <i className="fa fa-save fa-lg"></i> Salvar
            </button>
            <button
              role="button"
              className="btn btn-secondary pl-4 pr-4 ml-2"
              title="Compartilhar plano"
              data-container="body"
              data-toggle="popover"
              data-content="Clique para poder compartilhar o plano."
            >
              <i className="fa fa-share fa-lg"></i> Compartilhar
            </button>
            <button
              role="button"
              className="btn btn-dark pl-4 pr-4 ml-2"
              title="Histórico do plano"
              data-container="body"
              data-toggle="popover"
              data-content="Clique para ver histórico do plano."
            >
              <i className="fa fa-history fa-lg"></i> Histórico
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
