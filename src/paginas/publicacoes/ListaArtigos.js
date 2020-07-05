import React, { useState, useEffect } from "react";
import sha1 from "sha1";

export default function ListaArtigos(props) {
  const [artigos, setArtigos] = useState([]);

  useEffect(() => {
    setArtigos(props.artigos);
  }, [props.artigos]);

  return (
    <ul className="list-unstyled border-none text-justify">
      {artigos.map((artigo, indice) => {
        return (
          <div key={sha1(artigo.titulo)} className="mb-3">
            <a
              data-toggle="collapse"
              href={"#" + sha1(artigo.titulo)}
              role="button"
              aria-expanded="false"
              aria-controls={sha1(artigo.titulo)}
            >
              <li className="border-none bg-light p-3 shadow text-uppercase">
                <i className="fa fa-book-open fa-lg mr-2 ml-1 text-primary"></i>
                {artigo.titulo}
              </li>
            </a>
            <div className="collapse" id={sha1(artigo.titulo)}>
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
