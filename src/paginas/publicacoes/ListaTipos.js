import React, { useState, useEffect } from "react";
import ListaArtigos from "./ListaArtigos.js";

export default function ListaTipos(props) {
  const [artigoTipos, setArtigoTipos] = useState({});

  useEffect(() => {
    setArtigoTipos(props.artigoTipos);
  });

  return Object.keys(artigoTipos).map((tipo) => {
    return (
      <div key={tipo}>
        <h6>{tipo}</h6>
        <ListaArtigos artigos={artigoTipos[tipo]} />
      </div>
    );
  });
}
