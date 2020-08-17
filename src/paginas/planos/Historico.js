import React from "react";
import moment from "moment";
import VisualizacaoPlano from "./VisualizacaoPlano";

export default function Historico() {
  moment.locale();
  const diaAtual = new Date();
  const diaAtualConversao = moment(diaAtual).format("DD/MM/YYYY h:mm:ss");
  diaAtual.setDate(diaAtual.getDate() - 1);
  const ontem = moment(diaAtual).format("DD/MM/YYYY h:mm:ss");
  diaAtual.setDate(diaAtual.getDate() - 1);
  const anteontem = moment(diaAtual).format("DD/MM/YYYY h:mm:ss");
  const datasHistorico = [diaAtualConversao, ontem, anteontem];

  return (
    <div
      className="modal fade"
      id="modalHistorico"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="modalHistorico"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              <i className="fa fa-history fa-lg"></i> Histórico
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body text-justify">
            <div className="row">
              <div className="col-sm-2 col-md-3">
                <div
                  className="nav flex-column nav-pills"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  {datasHistorico.map((data, indice) => {
                    return (
                      <a
                        key={indice}
                        className={
                          indice === 0
                            ? "nav-link active mb-1"
                            : "nav-link mb-1"
                        }
                        id={"data" + indice + "-tab"}
                        data-toggle="pill"
                        href={"#data" + indice}
                        role="tab"
                        aria-controls={"data" + indice}
                        aria-selected="true"
                      >
                        <i className="fa fa-caret-right fa-lg ml-1"></i>
                        {data}
                      </a>
                    );
                  })}
                </div>
              </div>
              <div className="col-sm-10 col-md-9">
                <div className="tab-content" id="v-pills-tabContent p-1">
                  {datasHistorico.map((data, indice) => {
                    return (
                      <div
                        key={indice}
                        className={
                          indice === 0
                            ? "tab-pane fade active show"
                            : "tab-pane fade show"
                        }
                        id={"data" + indice}
                        role="tabpanel"
                        aria-labelledby={"data" + indice + "-tab"}
                      >
                        <div className="shadow-sm">
                          <VisualizacaoPlano />
                        </div>
                        <button
                          type="button"
                          className="btn btn-success float-right mt-4"
                          title={"Escolher " + data + " como histórico atual"}
                        >
                          <i className="fa fa-paper-plane fa-lg"></i> Definir
                          como atual
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              title="Fechar"
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              <i className="fa fa-times fa-lg"></i> Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
