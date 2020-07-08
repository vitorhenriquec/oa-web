import React, { useState, useEffect } from "react";

import Carregamento from "../../layout/Carregamento";

export default function PlanosPublicados() {
  const [planos, setPlanos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPlanos([
        {
          titulo: "Decompondo os número naturais",
          dataSubmissao: "21/02/2019",
          autor: "Rodrigo Rodrigues Melo de Lima",
        },
        {
          titulo: "Decompondo os número naturais",
          dataSubmissao: "21/02/2019",
          autor: "Rodrigo Rodrigues Melo de Lima",
        },
        {
          titulo: "Decompondo os número naturais",
          dataSubmissao: "21/02/2019",
          autor: "Rodrigo Rodrigues Melo de Lima",
        },
        {
          titulo: "Decompondo os número naturais",
          dataSubmissao: "21/02/2019",
          autor: "Rodrigo Rodrigues Melo de Lima",
        },
        {
          titulo: "Decompondo os número naturais",
          dataSubmissao: "21/02/2019",
          autor: "Rodrigo Rodrigues Melo de Lima",
        },
      ]);
      setCarregando(false);
    }, 4000);
  }, []);

  return (
    <div className="text-center mr-auto ml-auto w-90">
      <h1 className="pt-4 pb-2">Planos de aulas publicados</h1>
      {carregando && <Carregamento />}
      {!carregando && (
        <table className="table table-hover mt-5 text-justify">
          <thead>
            <tr>
              <th className="border-top-0" scope="col">
                Título
              </th>
              <th className="border-top-0" scope="col">
                Data de Submissão
              </th>
              <th className="border-top-0" scope="col">
                Autor
              </th>
            </tr>
          </thead>
          <tbody>
            {planos.map((plano, index) => {
              return (
                <tr key={index} className="m-3">
                  <td>{plano.titulo}</td>
                  <td>{plano.dataSubmissao}</td>
                  <td>{plano.autor}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
