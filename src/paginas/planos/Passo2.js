import React from "react";

import Versao from "./Versao";

export default function Passo2() {
  return (
    <div className="bg-light p-3 rounded">
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
            <li className="list-group-item mb-2">
              Cras justo odio{" "}
              <i
                className="fa fa-plus fa-lg float-right pt-1 text-primary"
                data-container="body"
                data-toggle="popover"
                data-content="Clique para selecionar este OA."
              ></i>
            </li>
            <li className="list-group-item mb-2">
              Dapibus ac facilisis in{" "}
              <i
                className="fa fa-plus fa-lg float-right pt-1 text-primary"
                data-container="body"
                data-toggle="popover"
                data-content="Clique para selecionar este OA."
              ></i>
            </li>
            <li className="list-group-item mb-2">
              Morbi leo risus{" "}
              <i
                className="fa fa-plus fa-lg float-right pt-1 text-primary"
                data-container="body"
                data-toggle="popover"
                data-content="Clique para selecionar este OA."
              ></i>
            </li>
            <li className="list-group-item mb-2">
              Porta ac consectetur ac{" "}
              <i
                className="fa fa-plus fa-lg float-right pt-1 text-primary"
                data-container="body"
                data-toggle="popover"
                data-content="Clique para selecionar este OA."
              ></i>
            </li>
            <li className="list-group-item mb-2">
              Vestibulum at eros{" "}
              <i
                className="fa fa-plus fa-lg float-right pt-1 text-primary"
                data-container="body"
                data-toggle="popover"
                data-content="Clique para selecionar este OA."
              ></i>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <h5>OA(s) selecionado(s)</h5>
          <ul className="list-group">
            <li className="list-group-item mb-2">
              Cras justo odio{" "}
              <i
                className="fa fa-minus fa-lg float-right pt-1"
                data-container="body"
                data-toggle="popover"
                data-content="Clique para deselecionar este OA."
              ></i>
            </li>
            <li className="list-group-item mb-2">
              Dapibus ac facilisis in{" "}
              <i
                className="fa fa-minus fa-lg float-right pt-1"
                data-container="body"
                data-toggle="popover"
                data-content="Clique para deselecionar este OA."
              ></i>
            </li>
            <li className="list-group-item mb-2">
              Morbi leo risus{" "}
              <i
                className="fa fa-minus fa-lg float-right pt-1"
                data-container="body"
                data-toggle="popover"
                data-content="Clique para selecionar o OA."
              ></i>
            </li>
            <li className="list-group-item mb-2">
              Porta ac consectetur ac{" "}
              <i
                className="fa fa-minus fa-lg float-right pt-1"
                data-container="body"
                data-toggle="popover"
                data-content="Clique para selecionar o OA."
              ></i>
            </li>
            <li className="list-group-item mb-2">
              Vestibulum at eros{" "}
              <i
                className="fa fa-minus fa-lg float-right pt-1"
                data-container="body"
                data-toggle="popover"
                data-content="Clique para selecionar o OA."
              ></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
