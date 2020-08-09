import React from "react";

export default function AuxilioExcrita() {
  const verbosAuxiliares = [
    "Definir",
    "Descrever",
    "Listar",
    "Distinguir",
    "Aplicar",
    "Comparar",
    "Estabelecer",
    "Identificar",
    "Relacionar Argumentos",
    "Representar Graficamente",
    "Reconhecer",
    "Ordenar",
    "Exemplificar",
    "Avaliar",
    "Diferenciar",
  ];

  return (
    <div
      className="modal"
      id="modalAuxilioEscrita"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="modalAuxilioEscrita"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              <i className="fa fa-hands-helping fa-lg"></i> Auxílio na Escrita
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
          <div className="modal-body">
            <div className="row text-center p-1">
              <div className="col-12 p-1 m-1">
                <h5>Verbos auxiliares fortes</h5>
              </div>
              {verbosAuxiliares.map((verbo, indice) => {
                return (
                  <div
                    kye={indice}
                    className="col-4 p-1 mb-2 font-weight-bold text-primary"
                  >
                    {verbo}
                  </div>
                );
              })}
            </div>
            <p className="text-justify">
              A utilização dos verbos auxiliares fortes, ajuda na descrição dos
              seus objetivos, de forma a torná-los mais claros, concisos e bem
              determinados, ou seja, previne ambiguidades ou imprecisões nas
              suas afirmações.
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
