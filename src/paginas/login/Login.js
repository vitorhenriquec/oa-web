import React, { useState } from "react";

import "./Login.css";

export default function Login() {
  const [visibilidadeSenha, setVisibilidadeSenha] = useState(false);
  return (
    <div className="text-center">
      <div className="pt-4">
        <h1>OA</h1>
        <h6>Objeto de Aprendizagem</h6>
      </div>
      <form id="formLogin" className="m-auto">
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            aria-describedby="emailHelp"
            placeholder="Seu email"
          />
        </div>
        <div className="form-group">
          <input
            type={visibilidadeSenha ? "text" : "password"}
            className="form-control"
            id="inputSenha"
            placeholder="Senha"
          />
          <i
            id="visibilidadeSenha"
            className={
              visibilidadeSenha ? "fa fa-eye-slash fa-lg " : "fa fa-eye fa-lg "
            }
            onClick={(event) => setVisibilidadeSenha(!visibilidadeSenha)}
          ></i>
        </div>
        <button type="submit" className="btn w-100 btn-primary mb-1">
          <i className="fa fa-sign-in-alt fa-lg mr-1"></i>Entrar
        </button>
        <button type="submit" className="btn w-100 btn-dark">
          <i className="fa fa-user-plus fa-lg mr-1"></i>Cadastre-se
        </button>
      </form>
    </div>
  );
}
