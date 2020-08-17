import React, { useState } from "react";

import { toast } from "react-toastify";

import Passo1 from "./Passo1";
import Passo2 from "./Passo2";
import Passo3 from "./Passo3";
import MovimentacaoPaginas from "./MovimentacaoPaginas";
import AuxilioExcrita from "./AuxilioEscrita";
import Compartilhar from "./Compartilhar";
import EnviarRevisao from "./EnviarRevisao";
import Historico from "./Historico";

export default function NovoPlano() {
  const [passoAtual, setPassoAtual] = useState(1);

  return (
    <div className="text-center mr-auto ml-auto w-90">
      <AuxilioExcrita />
      <Compartilhar />
      <EnviarRevisao />
      <Historico />
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
                setPassoAtual(1);
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
                setPassoAtual(2);
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
                setPassoAtual(3);
              }}
            >
              3º Passo
            </a>
          </li>
        </ul>
        <MovimentacaoPaginas
          passoAtual={passoAtual}
          setPassoAtual={setPassoAtual}
        />
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
        <div id="acoes" className="bg-light p-2 mt-2 w-100 rounded">
          <div
            className="btn-group"
            role="group"
            aria-label="Ações para o plano de aula"
          >
            <button
              type="button"
              className="btn btn-primary rounded pl-4 pr-4 m-1"
              title="Salvar"
              aria-label="Salvar"
            >
              <div
                data-container="body"
                data-toggle="popover"
                data-content="Clique aqui para salvar o plano"
                onClick={(evento) => {
                  toast.success("Plano salvo com sucesso");
                }}
              >
                <i className="fa fa-save fa-lg"></i> Salvar
              </div>
            </button>
            <button
              type="button"
              className="btn btn-dark rounded pl-4 pr-4 m-1"
              title="Histórico"
              data-toggle="modal"
              data-target="#modalHistorico"
              aria-label="Histórico do plano"
            >
              <div
                data-container="body"
                data-toggle="popover"
                data-content="Clique para ver histórico do plano."
              >
                <i className="fa fa-history fa-lg"></i> Histórico
              </div>
            </button>
            <button
              type="button"
              className="btn btn-secondary rounded pl-4 pr-4 m-1"
              title="Compartilhar"
              data-toggle="modal"
              data-target="#modalCompartilhar"
              aria-label="Compartilhar do plano"
            >
              <div
                data-container="body"
                data-toggle="popover"
                data-content="Clique para poder compartilhar o plano."
              >
                <i className="fa fa-share-alt-square fa-lg"></i>
                Compartilhar
              </div>
            </button>
            <button
              type="button"
              className="btn btn-secondary rounded m-1"
              title="Enviar para revisão"
              data-toggle="modal"
              data-target="#modalEnviarRevisao"
              aria-label="Enviar para revisão"
            >
              <div
                data-container="body"
                data-toggle="popover"
                data-content="Clique para enviar esse plano para revisão."
              >
                <i className="fa fa-clipboard-check fa-lg"></i> Enviar para
                Revisão
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
