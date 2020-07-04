import React from "react";

export default function CriarPlano() {
  return (
    <div className="mb-3">
      <a
        data-toggle="collapse"
        href="#collapseCriarPlano"
        role="button"
        aria-expanded="false"
        aria-controls="collapseCriarPlano"
      >
        <li className="border-none bg-light p-3 shadow text-uppercase">
          <i className="fa fa-exclamation-circle fa-lg mr-2 ml-1 text-primary"></i>
          Criação de Plano de Aula
        </li>
      </a>
      <div className="collapse bg-white" id="collapseCriarPlano">
        <div className="card card-body shadow">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <p>
                Que tal conhecer nossa ferramenta para escrita de plano de aula?
                E ainda dá para compartilhar com seus colegas e produzirem de
                forma colaborativa?
              </p>
              <b>Para isso, você tem três opções:</b>
              <ol>
                <b>
                  A escrita do plano de aula é dividida em três passos, vamos
                  conhecer cada um desses passos?
                </b>
                <li>
                  No <b>primeiro passo</b> você deve informar o nome da
                  instituição a que se destina esse plano de aula, uma frase
                  curta que defina sua aula (esse será o título da aula), a que
                  ano de ensino sua proposta de aula melhor se aplica e quanto
                  tempo (em minutos) você acha necessário para a aplicação deste
                  plano de aula.{" "}
                </li>
                <li>
                  O <b>segundo passo</b> é a descrição do seu plano de aula,
                  onde você deve escrever seu objetivo geral, objetivos
                  específicos, metodologia, avaliação, recursos necessários e
                  referências.
                </li>
                <li>
                  No <b>terceiro e último passo</b> você pode buscar e adicionar
                  (ou não) um ou mais OA para complementar seu plano de aula e
                  então enviar para revisão onde iremos validar seu plano, por
                  isso, capricha!
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
                  src="https://www.youtube.com/embed/NFyNoyrA7CY"
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
