import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Login.css";

export default function Login() {
  const [visibilidadeSenha, setVisibilidadeSenha] = useState(false);
  return (
    <div className="text-center">
      <div className="pt-4">
        <h1>OA</h1>
        <h6>Objeto de Aprendizagem</h6>
      </div>
      <form id="formLogin" className="m-auto bg-light p-4 rounded shadow">
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            aria-describedby="emailHelp"
            placeholder="Seu email"
            required
          />
        </div>
        <div className="form-group">
          <input
            type={visibilidadeSenha ? "text" : "password"}
            className="form-control"
            id="inputSenha"
            placeholder="Sua senha"
            required
          />
          <i
            id="visibilidadeSenha"
            className={
              visibilidadeSenha ? "fa fa-eye-slash fa-lg " : "fa fa-eye fa-lg "
            }
            onClick={(event) => setVisibilidadeSenha(!visibilidadeSenha)}
          ></i>
        </div>
        <Link
          id="esqueceuSenha"
          className="w-100 btn btn-link p-0 m-0 mb-2 "
          to="/"
        >
          <span className="float-right">Esqueceu sua senha?</span>
        </Link>
        <button
          type="submit"
          className="btn w-100 btn-primary mb-1"
          title="Entrar"
        >
          <i className="fa fa-sign-in-alt fa-lg mr-1"></i>Entrar
        </button>
        <Link role="button" className="btn w-100 btn-dark" to="/cadastro">
          <i className="fa fa-user-plus fa-lg mr-1"></i>Cadastre-se
        </Link>
        <div className="row mt-3 mb-2">
          <h6 className="d-block w-100"> Ou conecte-se com :</h6>
          <div className="col-sm-12 col-md-6">
            <button
              type="submit"
              className="btn w-100 btn-secondary mb-1"
              title="Login pelo Facebook"
            >
              <i className="fab fa-facebook-f"></i>Facebook
            </button>
          </div>
          <div className="col-sm-12 col-md-6">
            <button
              type="submit"
              className="btn w-100 btn-secondary mb-1"
              title="Login pelo Google"
            >
              <i className="fab fa-google"></i>Google
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
