import React from "react";

export default function Compartilhar() {
  return (
    <div
      className="modal fade"
      id="modalCompartilhar"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="modalCompartilhar"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              <i className="fa fa-share-alt-square fa-lg"></i> Compartilhar
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
            <p>
              Digite um e-mail, na caixa de texto logo abaixo, cadastrado no{" "}
              <b className="text-primary">OA</b>. Depois selecione entre os
              e-mail listados e clique em Adicionar.
            </p>
            <div className="form-group p-1">
              <label className="font-weight-bold" htmlFor="emailCompartilhar">
                E-mail do usuário:
              </label>
              <div className="w-100 d-inline-flex">
                <input
                  placeholder="Digite aqui o e-mail aqui"
                  type="text"
                  className="form-control w-80 mr-2"
                  id="emailCompartilhar"
                />
                <button
                  title="Adicionar"
                  type="button"
                  className="btn btn-primary w-15 text-justify"
                >
                  <div
                    data-container="body"
                    data-toggle="popover"
                    data-content="Clique para compartilhar com este e-mail."
                  >
                    <i className="fa fa-plus fa-md"></i> Adicionar
                  </div>
                </button>
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
