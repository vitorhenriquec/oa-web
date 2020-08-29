import React from "react";

export default function BuscarPlano() {
  return (
    <div className="text-center mr-auto ml-auto w-90">
      <h1 className="pt-4 pb-2">Buscar plano</h1>
      <div className="bg-light p-3 pl-5 pr-5 rounded shadow-sm text-justify">
        <div className="form-group d-inline-flex w-100 mt-3">
          <input
            id="campoBuscaOA"
            type="text"
            className="form-control"
            placeholder="Digite nome pra buscar plano(s)"
            aria-label="Digite nome pra buscar plano(s)"
          />
          <button
            type="button"
            title="Buscar por plano(s)"
            className="btn btn-primary ml-1"
            title="Buscar por plano(s)"
          >
            <i className="fa fa-search fa-lg"></i>
          </button>
        </div>
        <div className="text-center">
          <p>Nenhum plano encontrado.</p>
        </div>
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
    </div>
  );
}
