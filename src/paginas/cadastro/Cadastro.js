import React, { useState } from "react";

import "./Cadastro.css";

export default function Cadastro() {
  const [visibilidadeSenha, setVisibilidadeSenha] = useState(false);
  const [visibilidadeConfSenha, setVisibilidadeConfSenha] = useState(false);
  const [dadosPessoaisAtivo, setDadosPessoaisAtivo] = useState(false);

  return (
    <div className="text-center">
      <div className="mt-4">
        <h3 className="mb-3">Cadastro</h3>
      </div>
      <form id="formLogin" className="m-auto text-justify">
        <div className="dadosObrigatorios p-3 bg-light">
          <h5 className="mb-3">Dados obrigatórios :</h5>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="nome"
              id="inputNome"
              placeholder="Seu nome completo*"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              name="email"
              placeholder="Seu e-mail*"
            />
          </div>
          <div className="form-group">
            <input
              type={visibilidadeSenha ? "text" : "password"}
              className="form-control"
              id="inputSenha"
              name="senha"
              placeholder="Sua senha*"
            />
            <i
              id="visibilidadeSenha"
              className={
                visibilidadeSenha
                  ? "fa fa-eye-slash fa-lg "
                  : "fa fa-eye fa-lg "
              }
              onClick={(event) => setVisibilidadeSenha(!visibilidadeSenha)}
            ></i>
          </div>
          <div className="form-group">
            <input
              type={visibilidadeConfSenha ? "text" : "password"}
              className="form-control"
              id="inputSenha"
              name="confirmacaoSenha"
              placeholder="Confirmação da sua senha*"
            />
            <i
              id="visibilidadeSenha"
              className={
                visibilidadeConfSenha
                  ? "fa fa-eye-slash fa-lg "
                  : "fa fa-eye fa-lg "
              }
              onClick={(event) =>
                setVisibilidadeConfSenha(!visibilidadeConfSenha)
              }
            ></i>
          </div>
        </div>
        <div className="dadosOpcionais mt-4 mb-4 p-3 bg-light">
          <h5
            className="mb-3"
            onClick={(event) => setDadosPessoaisAtivo(!dadosPessoaisAtivo)}
          >
            <a
              data-toggle="collapse"
              href="#dadosOpcionais"
              role="button"
              aria-expanded="false"
              aria-controls="dadosOpcionais"
            >
              Dados opcionais :
              <i
                className={
                  dadosPessoaisAtivo
                    ? "fa fa-angle-up fa-lg float-right"
                    : "fa fa-angle-down fa-lg float-right"
                }
              ></i>
            </a>
          </h5>
          <div id="dadosOpcionais" className="collapse">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="inputNome"
                name="nomeSocial"
                placeholder="Seu nome social"
              />
            </div>
            <div className="form-group">
              <select className="form-control" id="inputSexo">
                <option value="0" default>
                  Seu sexo
                </option>
                <option value="1">Indefinido</option>
                <option value="2">Masculino</option>
                <option value="3">Feminino</option>
              </select>
            </div>
            <div className="form-group text-justify">
              <label for="inputFoto ">
                <b>Sua foto de perfil: </b>
              </label>
              <input
                type="file"
                class="form-control-file"
                id="inputFoto"
                accept="image/*"
              />
            </div>
          </div>
        </div>
        <button
          type="button"
          className="btn w-100 btn-primary mb-1"
          title="Entrar"
        >
          <i className="fa fa-user-plus fa-lg mr-1"></i>Cadastrar-se
        </button>
      </form>
    </div>
  );
}
