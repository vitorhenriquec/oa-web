import React from "react";

export default function BuscaAvancada() {
  return (
    <div className="mb-3">
      <a
        data-toggle="collapse"
        href="#collapseBuscaAvancada"
        role="button"
        aria-expanded="false"
        aria-controls="collapseBuscaAvancada"
      >
        <li className="border-none bg-light p-3 shadow text-uppercase">
          <i className="fa fa-exclamation-circle fa-lg mr-2 ml-1 text-primary"></i>
          Busca Avançada
        </li>
      </a>
      <div className="collapse bg-white" id="collapseBuscaAvancada">
        <div className="card card-body shadow">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <p>
                Para pesquisar com mais precisão (e sabedoria), você pode
                utilizar a busca avançada da plataforma, que te permite achar
                objetos por:
              </p>
              <ol>
                <li>Tema curricular;</li>
                <li>
                  Descritores (utilizados os descritores do Sistema de Avaliação
                  da Educação Básica -Saeb);
                </li>
                <li>Nível de ensino;</li>
                <li>
                  Tipo de visualização (Celular/Tablet, Online ou Download).
                </li>
              </ol>
            </div>
            <div className="col-md-12 col-lg-6">
              <h5 className="text-center mt-2">
                Video explicativo <b>acessível em libras</b>
              </h5>
              <div id="videoManual" className="w-100">
                <iframe
                  title="Vídeo explicativo acessível me libras para fazer o cadastro e o login"
                  className="videoManual"
                  src="https://www.youtube.com/embed/9PsXHtWS-8k"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen=""
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
