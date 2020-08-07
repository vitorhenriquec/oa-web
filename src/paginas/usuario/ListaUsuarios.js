import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export default function ListaUsuario() {
  const [carregando, setCarregando] = useState(true);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const jwtToken = localStorage.getItem("jwtToken");

    if (jwtToken) {
      axios.defaults.headers.common = {
        Authorization: `Bearer ${jwtToken}`,
      };
    }

    axios
      .get(API_URL + "usuario")
      .then((resposta) => {
        setUsuarios(resposta.data);
        setCarregando(false);
      })
      .catch((erro) => {
        console.log(erro.response);
      });
  }, []);

  return (
    <div className="text-center mr-auto ml-auto w-90">
      <h1 className="pt-4 pb-2">Usuários</h1>
      {!carregando && (
        <table className="table table-hover mt-5 text-justify">
          <thead>
            <tr>
              <th className="border-top-0" scope="col">
                Nome
              </th>
              <th className="border-top-0" scope="col">
                E-mail
              </th>
              <th className="border-top-0" scope="col">
                Papel
              </th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario, indice) => {
              return (
                <tr key={indice}>
                  <td>{usuario.nome}</td>
                  <td>{usuario.email}</td>
                  <td>{usuario.papel}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
