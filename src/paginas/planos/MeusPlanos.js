import React, { useState, useEffect } from "react";

import Carregamento from "../../layout/Carregamento";

export default function MeusPlanos() {
  const [planos, setPlanos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPlanos([
        {
          titulo: "Decompondo os número naturais",
          dataSubmissao: "21/02/2019",
          status: "Rascunho",
        },
        {
          titulo: "Decompondo os número naturais",
          dataSubmissao: "21/02/2019",
          status: "Rascunho",
        },
        {
          titulo: "Decompondo os número naturais",
          dataSubmissao: "21/02/2019",
          status: "Rascunho",
        },
        {
          titulo: "Decompondo os número naturais",
          dataSubmissao: "21/02/2019",
          status: "Rascunho",
        },
        {
          titulo: "Decompondo os número naturais",
          dataSubmissao: "21/02/2019",
          status: "Rascunho",
        },
      ]);
      setCarregando(false);
    }, 2000);
  }, []);

  return (
    <div className="text-center mr-auto ml-auto w-90">
      <h1 className="pt-4 pb-2">Meus planos</h1>
      <ul
        className="nav nav-pills nav-fill mt-3 mb-3"
        id="pills-tab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <a
            className="nav-link active"
            id="criadospormim-tab"
            data-toggle="pill"
            href="#criadospormim"
            role="tab"
            aria-controls="criadospormim"
            aria-selected="true"
            onClick={(event) => {
              event.preventDefault();
              setCarregando(true);
              setTimeout(() => {
                setCarregando(false);
              }, 1000);
            }}
          >
            Criado por mim
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="compartilhados-tab"
            data-toggle="pill"
            href="#compartilhados"
            role="tab"
            aria-controls="compartilhados"
            aria-selected="false"
            onClick={(event) => {
              event.preventDefault();
              setCarregando(true);
              setTimeout(() => {
                setCarregando(false);
              }, 1000);
            }}
          >
            Compartilhados comigo
          </a>
        </li>
      </ul>
      <div className="tab-content mt-3" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="criadospormim"
          role="tabpanel"
          aria-labelledby="criadospormim-tab"
        >
          <div
            className={
              window.innerWidth < 500
                ? "bg-light pt-2 pb-3 pl-2 pr-2 rounded shadow-sm"
                : "bg-light pt-2 pb-3 pl-3 pr-3 rounded shadow-sm"
            }
          >
            {carregando && <Carregamento />}
            {!carregando && (
              <table className="table table-hover mt-5 text-justify">
                <thead>
                  <tr>
                    <th className="border-top-0" scope="col">
                      Título
                    </th>
                    <th className="border-top-0" scope="col">
                      Data de Submissão
                    </th>
                    <th className="border-top-0" scope="col">
                      Status
                    </th>
                    <th className="border-top-0" scope="col">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {planos.map((plano, index) => {
                    return (
                      <tr key={index} className="m-3">
                        <td className="text-primary">{plano.titulo}</td>
                        <td>{plano.dataSubmissao}</td>
                        <td>{plano.status}</td>
                        <td>
                          <div className="btn-group" role="group">
                            <button
                              type="button"
                              className="btn btn-dark btn-sm rounded m-1"
                              title="Baixar este plano."
                            >
                              <i className="fa fa-download fa-lg"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-dark btn-sm rounded m-1"
                              title="Editar este plano"
                            >
                              <i className="fa fa-edit fa-lg"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
        <div
          className="tab-pane fade show"
          id="compartilhados"
          role="tabpanel"
          aria-labelledby="compartilhados-tab"
        >
          <div
            className={
              window.innerWidth < 500
                ? "bg-light pt-2 pb-3 pl-2 pr-2 rounded shadow-sm"
                : "bg-light pt-2 pb-3 pl-3 pr-3 rounded shadow-sm"
            }
          >
            {carregando && <Carregamento />}
            {!carregando && (
              <table className="table table-hover mt-5 text-justify">
                <thead>
                  <tr>
                    <th className="border-top-0" scope="col">
                      Título
                    </th>
                    <th className="border-top-0" scope="col">
                      Data de Submissão
                    </th>
                    <th className="border-top-0" scope="col">
                      Status
                    </th>
                    <th className="border-top-0" scope="col">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {planos.map((plano, index) => {
                    return (
                      <tr key={index} className="m-3">
                        <td className="text-primary text-wrap">
                          {plano.titulo}
                        </td>
                        <td>{plano.dataSubmissao}</td>
                        <td>{plano.status}</td>
                        <td>
                          <div className="btn-group" role="group">
                            <button
                              type="button"
                              className="btn btn-dark btn-sm rounded m-1"
                              title="Baixar este plano."
                            >
                              <i className="fa fa-download fa-lg"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-dark btn-sm rounded m-1"
                              title="Editar este plano."
                            >
                              <i className="fa fa-edit fa-lg"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
