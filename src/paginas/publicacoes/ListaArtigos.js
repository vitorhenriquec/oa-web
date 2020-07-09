import React, { useState, useEffect } from "react";

export default function ListaArtigos(props) {
  const [artigos, setArtigos] = useState([]);
  const [ano, setAno] = useState(0);
  const [tipo, setTipo] = useState(0);

  useEffect(() => {
    setArtigos(props.artigos);
    setAno(props.ano);
    setTipo(props.tipo);
  }, []);

  function identificarCollapse(indice) {
    const tipoSigla = tipo
      .toLowerCase()
      .split(" ")
      .map((nome) => {
        return nome.substring(0, 1);
      });

    var identificador = "";
    for (var texto of tipoSigla) {
      identificador += texto;
    }

    return identificador + ano + indice;
  }

  return (
    <ul className="list-unstyled border-none text-justify">
      {artigos.map((artigo, indice) => {
        return (
          <div key={identificarCollapse(indice)} className="mb-3">
            <a
              data-toggle="collapse"
              href={"#" + identificarCollapse(indice)}
              role="button"
              aria-expanded="false"
              aria-controls={identificarCollapse(indice)}
            >
              <li className="border-none bg-light p-3 shadow text-uppercase">
                <i className="fa fa-book-open fa-lg mr-2 ml-1 text-primary"></i>
                {artigo.titulo}
              </li>
            </a>
            <div className="collapse" id={identificarCollapse(indice)}>
              <div className="card card-body shadow rounded-0">
                <div className="d-block p-2">
                  <span>Autor(es): {artigo.autores}</span>
                  <p>Resumo: {artigo.resumo}</p>
                  <span>
                    Artigo disponível{" "}
                    <a
                      className="text-primary"
                      target="_blank"
                      href={artigo.link}
                      rel="noopener noreferrer"
                    >
                      aqui
                    </a>
                    .
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </ul>
  );
}
