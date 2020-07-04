import React, { useState, useEffect } from "react";

export default function Carregamento(props) {
  const ativo = props.ativo;

  // useEffect(() => {
  //   setAtivo(!ativo);
  // }, [ativo]);

  return (
    <>
      {ativo && (
        <div class="overlay">
          <i class="fa fa-spinner fa-pulse fa-lg"></i>
        </div>
      )}
    </>
  );
}
