import React from "react";

export default function EnviarRevisao() {
  const itensRevisao = [
    {
      titulo: "Adequação ao público-alvo",
      descricao:
        "O objetivo geral, a abordagem metodológica e o(s) recurso(s) avaliativos apresentados/descritos/escolhidos estão de acordo com o público-alvo informado no plano de aula",
      possiveisRespostas: ["Sim", "Não"],
    },
    {
      titulo: "O tempo determinado para a aula/sequência didática é adequado?",
      descricao:
        "Os processos metodológicos descritos na metodologia/metodologia e avaliação são possíveis de serem realizados no tempo informado como tempo necessário para aplicação do plano de aula.",
      possiveisRespostas: ["Sim", "Não"],
    },
    {
      titulo:
        "Atividade contempla o(s) descritor(es)/habilidades escolhido(s)?",
      descricao:
        "O plano de aula contém um ou mais Objetos de Aprendizagem: O objetivo geral, a abordagem metodológica e o(s) recurso(s) avaliativos apresentados/descritos/escolhidos/definidos estão de acordo com o(s) descrito(res) no qual este objeto está classificado.",
      possiveisRespostas: ["Sim", "Não", "Não se aplica"],
    },
    {
      titulo: "Atividade contempla a(s) habilidade(s) escolhida(s)?",
      descricao:
        "Se você escolheu um Objeto de Aprendizagem, suas atividades devem estar de acordo com a(s) habilidade(s) no qual este objeto está classificado.",
      possiveisRespostas: ["Sim", "Razoável", "Não"],
    },
    {
      titulo: "Objetivo geral está claro?",
      descricao:
        "O seu objetivo geral trata-se de uma habilidade a ser desenvolvida pelo(s) aluno(s), ou seja, é um objetivo de aprendizagem.",
      possiveisRespostas: ["Sim", "Razoável", "Não"],
    },
    {
      titulo: "Objetivos específicos estão claros?",
      descricao:
        "Os seus objetivos específicos são os passos necessários (começo, meio e fim) para alcançar o objetivo geral apresentado/descrito/escolhido no plano de aula. .",
      possiveisRespostas: ["Sim", "Razoável", "Não"],
    },
    {
      titulo: "A metodologia escolhida para o plano de aula está clara?",
      descricao:
        "A metodologia descreve todas as etapas e recursos para execução da aula: introdução, desenvolvimento e conclusão.",
      possiveisRespostas: [
        "Sim, a metodologia descreve todas as etapas.",
        "Razoável, a metodologia não contempla todas as etapas.",
        "Não, a metodologia não apresenta os passos de forma clara.",
      ],
    },
    {
      titulo:
        "A avaliação apresentada no plano de aula está coerente com os objetivos?",
      descricao:
        "A avaliação especifica os instrumentos avaliativos utilizados de forma a contemplar o(s) objetivo(s) geral(is) do plano de aula.",
      possiveisRespostas: [
        "Sim, atende todos os objetivos.",
        "Parcialmente, não atende todos os objetivos.",
        "Não.",
      ],
    },
    {
      titulo:
        "O PA ou SD apresenta uma abordagem multidisciplinar do conhecimento? Apresenta abordagem metodológica inovadora? O conteúdo tem relevância social?",
      descricao: "",
      possiveisRespostas: [
        "Sim, atende aos critérios de interdisciplinaridade, inovação e relevância.",
        "Parcialmente, não atende todos os objetivos.",
        "Não",
      ],
    },
  ];

  function renderizarPossiveisRespostas(possiveiRespostas) {
    return (
      <>
        {" "}
        {possiveiRespostas.map((possivelResposta, indice) => {
          return (
            <b key={indice}>
              {possivelResposta}
              <br></br>
            </b>
          );
        })}
      </>
    );
  }

  return (
    <div
      className="modal"
      id="modalEnviarRevisao"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="modalEnviarRevisao"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              <i className="fa fa-clipboard-check fa-lg"></i> Enviar para
              Revisão
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
          <div className="modal-body">
            <div className="text-justify d-block">
              Esse plano será avaliado levando em consideração os seguintes
              itens:
              <ul className="list-group m-2">
                {itensRevisao.map((item, indice) => {
                  return (
                    <li key={indice} className="list-group-item mb-3">
                      <h5>{item.titulo}</h5>
                      <p>{item.descricao}</p>
                      {renderizarPossiveisRespostas(item.possiveisRespostas)}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="w-90 mr-auto ml-auto">
              <button
                type="button"
                className="btn btn-success"
                title="Concordo"
              >
                <div
                  data-container="body"
                  data-toggle="popover"
                  data-content="Concorda com o envio deste plano para revisão."
                >
                  <i className="fa fa-check-square fa-lg"></i> Concordo
                </div>
              </button>
              <button
                type="button"
                className="btn btn-danger ml-1"
                title="Discordo"
              >
                <div
                  data-container="body"
                  data-toggle="popover"
                  data-content="Discorda com o envio deste plano para revisão."
                >
                  <i className="fa fa-window-close fa-lg"></i> Discordo
                </div>
              </button>
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
