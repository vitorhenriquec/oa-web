import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Equipe.css";
import iconeUsuario from "../../recursos/img/icone-usuario.svg";
import Carregamento from "../../layout/Carregamento";

export default function Equipe() {
  const [equipe, setEquipe] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const equipeKey = process.env.REACT_APP_EQUIPE_KEY;
    console.log(equipeKey);
    if (equipeKey && equipeKey !== "") {
      const url =
        "https://spreadsheets.google.com/feeds/list/" +
        equipeKey +
        "/od6/public/values?alt=json";
      axios.get(url).then((resp) => {
        var dadosEquipe = resp.data.feed.entry;
        var equipe = dadosEquipe.map((dado) => {
          return {
            nomeImagem: dado.gsx$imagem.$t,
            nome: dado.gsx$nome.$t,
            nomeCompleto: dado.gsx$nomecompleto.$t,
            biografia: dado.gsx$biografia.$t,
            lattes: dado.gsx$lattes.$t,
          };
        });
        setCarregando(false);
        setEquipe(equipe);
      });
    }
  }, []);

  return (
    <div className="text-center">
      <h1 className="pt-4">Equipe</h1>
      <div className="dadosEquipe row w-75 ml-auto mr-auto">
        {carregando && <Carregamento />}
        {equipe.map((membro, idx) => {
          return (
            <div key={idx} className="col-12 col-sm-3 text-center">
              <img
                className="mx-auto d-block w-50 h-75"
                src={iconeUsuario}
                alt={"Foto de " + membro.nome}
              />
              <span className="d-block nomeMembro mb-5 mb-md-3">
                {membro.nome}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
