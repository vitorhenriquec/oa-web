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
        <div className="row mt-2 mb-2">
          <div className="col-sm-12 col-md-6">
            <button
              type="submit"
              className="btn w-100 btn-secondary mb-1"
              title="Login pelo Facebook"
            >
              <i className="fab fa-facebook-f"></i>Entrar
            </button>
          </div>
          <div className="col-sm-12 col-md-6">
            <button
              type="submit"
              className="btn w-100 btn-secondary mb-1"
              title="Login pelo Google"
            >
              <i className="fab fa-google"></i>Entrar
            </button>
          </div>
        </div>
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
        <button
          type="submit"
          className="btn w-100 btn-primary mb-1"
          title="Entrar"
        >
          <i className="fa fa-sign-in-alt fa-lg mr-1"></i>Entrar
        </button>
        <button
          type="submit"
          className="btn w-100 btn-dark"
          title="Cadastrar-se"
        >
          <i className="fa fa-user-plus fa-lg mr-1"></i>Cadastre-se
        </button>
      </form>
    </div>
  );
}
