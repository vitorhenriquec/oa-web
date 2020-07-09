import React, { useContext } from "react";

import "./AcessibilidadeLibras.css";

import inicio from "../recursos/img/acessibilidade-libras/inicio.gif";
import planoaula from "../recursos/img/acessibilidade-libras/planos_aula.gif";
import equipe from "../recursos/img/acessibilidade-libras/equipe.gif";
import publicacoes from "../recursos/img/acessibilidade-libras/publicacoes.gif";
import sobre from "../recursos/img/acessibilidade-libras/sobre.gif";

import Contexto from "../AppContext";

export default function AcessibilidadeLibras() {
  const { itemAtual } = useContext(Contexto);

  function arquivoImagem() {
    switch (itemAtual) {
      case "inicio":
        return inicio;
      case "equipe":
        return equipe;
      case "publicacoes":
        return publicacoes;
      case "sobre":
        return sobre;
      case "manual":
        return inicio;
      case "planos":
        return planoaula;
      default:
        return inicio;
    }
  }

  return (
    <img
      id="acessibilidadeLibras"
      className="rounded"
      src={arquivoImagem()}
      alt={"Sinal em Libras de" + itemAtual}
    />
  );
}
