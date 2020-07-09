import React, { useState, useEffect } from "react";
import ListaArtigos from "./ListaArtigos.js";

export default function ListaTipos(props) {
  const [artigoTipos, setArtigoTipos] = useState({});
  const [ano, setAno] = useState(0);

  useEffect(() => {
    setArtigoTipos(props.artigoTipos);
    setAno(props.ano);
  }, []);

  return Object.keys(artigoTipos).map((tipo) => {
    return (
      <div key={tipo}>
        <h6>{tipo}</h6>
        <ListaArtigos ano={ano} tipo={tipo} artigos={artigoTipos[tipo]} />
      </div>
    );
  });
}
