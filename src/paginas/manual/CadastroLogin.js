import React from "react";

export default function CadastroLogin() {
  return (
    <div className="mb-3">
      <a
        data-toggle="collapse"
        href="#collapseCadastroLogin"
        role="button"
        aria-expanded="false"
        aria-controls="collapseCadastroLogin"
      >
        <li className="border-none bg-light p-3 shadow text-uppercase">
          <i className="fa fa-exclamation-circle fa-lg mr-2 ml-1 text-primary"></i>
          Cadastro e login
        </li>
      </a>
      <div className="collapse bg-white" id="collapseCadastroLogin">
        <div className="card card-body shadow">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <p>
                O cadastro na plataforma é rápido, fácil e totalmente gratuito.
              </p>
              <ol>
                <b>Para isso, você tem três opções:</b>
                <li>
                  Você pode utilizar o seu Facebook. Basta clicar, autenticar e
                  pronto! Está cadastrado e logado! Falei que era rápido!?
                </li>
                <li>
                  Você pode utilizar, também, o seu Gmail. Basta clicar,
                  autenticar e pronto! Cadastro e login na Plataforma OBAMA
                  realizados com sucesso!
                </li>
                <li>
                  A terceira opção é um cadastro manual, onde você deve colocar
                  o seu nome, e-mail e uma senha, depois é só confirmar o e-mail
                  cadastrado. Simples né?
                </li>
              </ol>
            </div>
            <div className="col-md-12 col-lg-6">
              <h5 className="text-center mt-2">
                Video explicativo <b>acessível em libras</b>
              </h5>
              <div className="w-100">
                <iframe
                  title="Vídeo explicativo acessível me libras para fazer o cadastro e o login"
                  className="videoManual"
                  src="https://www.youtube.com/embed/Anx0xQ4dqmA"
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
