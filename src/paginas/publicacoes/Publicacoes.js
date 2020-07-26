import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Publicacoes.css";
import ListaTipos from "./ListaTipos.js";
import Carregamento from "../../layout/Carregamento";

export default function Publicacoes() {
  const [carregando, setCarregando] = useState(true);
  const [publicacoes, setPublicacoes] = useState({});

  useEffect(() => {
    const publicacoesKey = process.env.REACT_APP_PUBLICACOES_KEY;
    if (publicacoesKey && publicacoesKey !== "") {
      const url =
        "https://spreadsheets.google.com/feeds/list/" +
        publicacoesKey +
        "/od6/public/values?alt=json";
      axios.get(url).then((resp) => {
        const dadosPublicacoes = resp.data.feed.entry;
        const publicacoes = {};
        for (const [chave] of Object.entries(dadosPublicacoes)) {
          const valor = dadosPublicacoes[chave];
          const ano = valor["gsx$ano"]["$t"];
          const tipo = valor["gsx$tipo"]["$t"];
          if (!(ano in publicacoes)) {
            publicacoes[ano] = {};
            if (!(tipo in publicacoes[ano])) {
              publicacoes[ano][tipo] = [];
            }
            publicacoes[ano][tipo].push({
              titulo: valor["gsx$titulo"]["$t"],
              resumo: valor["gsx$resumo"]["$t"],
              autores: valor["gsx$autores"]["$t"],
              link: valor["gsx$link"]["$t"],
            });
          } else {
            if (!(tipo in publicacoes[ano])) {
              publicacoes[ano][tipo] = [];
            }
            publicacoes[ano][tipo].push({
              titulo: valor["gsx$titulo"]["$t"],
              resumo: valor["gsx$resumo"]["$t"],
              autores: valor["gsx$autores"]["$t"],
              link: valor["gsx$link"]["$t"],
            });
          }
        }
        setCarregando(false);
        setPublicacoes(publicacoes);
      });
    }
  }, []);

  function escolherIconeCalendario(ano) {
    return ano > new Date().getFullYear() ? (
      <i className="fa fa-calendar fa-lg"></i>
    ) : (
      <i className="fa fa-calendar-check fa-lg"></i>
    );
  }

  return (
    <div className="text-center mr-auto ml-auto w-95">
      <h1 className="pt-4 pb-2">Publicações</h1>
      <div className="p-4 text-justify">
        {carregando && <Carregamento />}
        {Object.keys(publicacoes).map((ano) => {
          return (
            <div key={ano}>
              <h5>
                {escolherIconeCalendario(ano)}
                {ano}
              </h5>
              <ListaTipos ano={ano} tipos={publicacoes[ano]} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
