import React, { Component } from "react";

export default function BuscaTextual() {
  return (
    <div className="mb-3">
      <a
        data-toggle="collapse"
        href="#collapseBuscaTextual"
        role="button"
        aria-expanded="false"
        aria-controls="collapseBuscaTextual"
      >
        <li className="border-none bg-light p-3 shadow text-uppercase">
          <i className="fa fa-exclamation-circle fa-lg mr-2 ml-1 text-primary"></i>
          Busca Textual
        </li>
      </a>
      <div className="collapse bg-white" id="collapseBuscaTextual">
        <div className="card card-body shadow">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <p>
                Nessa parte, você pode fazer uma busca textual rápida, colocando
                alguns termos que estejam relacionados a conteúdos da matemática
                (você pode usar termos que aparecem nos descritores dos PCN e
                BNCC!)
              </p>
            </div>
            <div className="col-md-12 col-lg-6">
              <h5 className="text-center mt-2">
                Video explicativo <b>acessível em libras</b>
              </h5>
              <div className="w-100">
                <iframe
                  title="Vídeo explicativo acessível me libras para fazer o cadastro e o login"
                  className="videoManual"
                  src="https://www.youtube.com/embed/7RJ7VUaIyEU"
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
