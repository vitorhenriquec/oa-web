import React from "react";
import ListaArtigos from "./ListaArtigos.js";

export default function ListaTipos({ tipos, ano }) {
  return Object.keys(tipos).map((tipo) => {
    return (
      <div key={tipo}>
        <h6>{tipo}</h6>
        <ListaArtigos ano={ano} tipo={tipo} artigos={tipos[tipo]} />
      </div>
    );
  });
}
