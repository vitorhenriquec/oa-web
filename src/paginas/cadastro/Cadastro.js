import React, { useState } from "react";
import axios from "axios";
import toastr from "toastr";

import "./Cadastro.css";

export default function Cadastro() {
  const [visibilidadeSenha, setVisibilidadeSenha] = useState(false);
  const [visibilidadeConfSenha, setVisibilidadeConfSenha] = useState(false);
  const [dadosOpcionaisAtivo, setDadosOpcionaisAtivo] = useState(false);

  const [email, setEmail] = useState({
    valor: "",
    erro: "",
  });
  const [senha, setSenha] = useState({
    valor: "",
    erro: "",
  });
  const [confirmarSenha, setConfirmarSenha] = useState({
    valor: "",
    erro: "",
  });
  const [nome, setNome] = useState({
    valor: "",
    erro: "",
  });
  const [cpf, setCpf] = useState({ valor: "", erro: "" });
  const [nomeSocial, setNomeSocial] = useState({ valor: "", erro: "" });
  const [sexo, setSexo] = useState({ valor: "0", erro: "" });

  function guardarCpf(valor) {
    valor = valor
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
    const novoCpf = { valor, erro: "" };
    setCpf(novoCpf);
  }

  function validarNome() {
    var erro = "";
    const { valor } = nome;
    if (valor === "") {
      erro = "Nome não pode ser vázio";
    } else if (valor.length < 3) {
      erro = "Nome não poder conter menos de três letras";
    }
    setNome({ valor, erro });
    return erro === "";
  }

  function validarSenha() {
    var erro = "";
    const { valor } = senha;
    if (valor === "") {
      erro = "Senha não pode ser vázia";
    } else if (valor.length < 6) {
      erro = "Senha não deve ter menos de seis caracteres";
    }
    setSenha({ valor, erro });
    return erro === "";
  }

  function validarConfirmarSenha() {
    var erro = "";
    const { valor } = confirmarSenha;
    if (valor === "") {
      erro = "Senha não pode ser vázia";
    } else if (valor !== senha.valor) {
      erro = "Senha e sua confirmação não coincidem";
    }
    setConfirmarSenha({ valor, erro });
    return erro === "";
  }

  function validarCampos() {
    validarNome();
    validarSenha();
    validarConfirmarSenha();

    var valido = true;
    var campos = {
      nome: nome,
      email: email,
      senha: senha,
      confirmar_senha: confirmarSenha,
    };

    for (var campo in campos) {
      if (campos[campo].erro !== "") {
        valido = false;
      }
    }

    return valido;
  }

  function cadastrar(event) {
    event.preventDefault();

    var campos = {
      nome: nome.valor,
      email: email.valor,
      senha: senha.valor,
      confirmar_senha: confirmarSenha.valor,
      tipo_cadastro: 1,
    };

    if (cpf.valor !== "") {
      campos["cpf"] = cpf.valor;
    }

    if (nomeSocial.valor !== "") {
      campos["nome_social"] = nomeSocial.valor;
    }

    if (sexo.valor !== "0") {
      campos["sexo"] = parseInt(sexo.valor);
    }

    if (!validarCampos()) {
      event.stopPropagation();
    } else {
      axios
        .post("http://localhost:8000/cadastrar/", campos)
        .then((resposta) => {
          if (resposta.status === 201) {
            toastr.success("Sucesso", resposta.data.mensagem);
          }
        })
        .catch((error) => console.log(error));
    }
  }

  return (
    <div className="text-center">
      <div className="mt-4">
        <h3 className="mb-3">Cadastro</h3>
      </div>
      <form id="formLogin" className="m-auto text-justify" onSubmit={cadastrar}>
        <div className="dadosObrigatorios p-4 bg-light rounded">
          <h5 className="mb-3">Dados obrigatórios :</h5>
          <div className="form-group">
            <input
              type="text"
              className={"form-control " + (nome.erro ? "border-danger" : "")}
              name="nome"
              id="inputNome"
              value={nome.valor}
              onChange={(event) => {
                const valor = event.target.value;
                setNome({ valor, erro: "" });
              }}
              placeholder="Seu nome completo*"
              required
            />
            {nome.erro !== "" && (
              <small className="pl-1 text-danger m-1">{nome.erro}</small>
            )}
          </div>
          <div className="form-group">
            <input
              type="email"
              className={"form-control " + (email.erro ? "border-danger" : "")}
              id="inputEmail"
              name="email"
              value={email.valor}
              onChange={(event) => {
                const valor = event.target.value;
                setEmail({ valor, erro: "" });
              }}
              placeholder="Seu e-mail*"
              required
            />
            {email.erro !== "" && (
              <small className="pl-1 text-danger m-1">{email.erro}</small>
            )}
          </div>
          <div className="form-group">
            <input
              type={visibilidadeSenha ? "text" : "password"}
              className={"form-control " + (senha.erro ? "border-danger" : "")}
              id="inputSenha"
              name="senha"
              value={senha.valor}
              onChange={(event) => {
                const valor = event.target.value;
                setSenha({ valor, erro: "" });
              }}
              placeholder="Sua senha*"
              required
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
            {senha.erro !== "" && (
              <small className="pl-1 text-danger m-1">{senha.erro}</small>
            )}
          </div>
          <div className="form-group">
            <input
              type={visibilidadeConfSenha ? "text" : "password"}
              className="form-control"
              id="inputConfirmarSenha"
              name="confirmar_senha"
              value={confirmarSenha.valor}
              onChange={(event) => {
                const valor = event.target.value;
                setConfirmarSenha({ valor, erro: "" });
              }}
              placeholder="Confirmação da sua senha*"
              required
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
            {confirmarSenha.erro !== "" && (
              <small className="pl-1 text-danger m-1">
                {confirmarSenha.erro}
              </small>
            )}
          </div>
        </div>
        <div className="dadosOpcionais mt-4 mb-4 p-4 bg-light rounded">
          <h5
            className="mb-3"
            onClick={(event) => setDadosOpcionaisAtivo(!dadosOpcionaisAtivo)}
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
                  dadosOpcionaisAtivo
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
                id="inputCpf"
                name="cpf"
                placeholder="Seu CPF"
                value={cpf.valor}
                onChange={(event) => {
                  guardarCpf(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="inputNomeSocial"
                name="nome_social"
                placeholder="Seu nome social"
                value={nomeSocial.valor}
                onChange={(event) => {
                  const valor = event.target.value;
                  setNomeSocial({ valor, erro: "" });
                }}
              />
            </div>
            <div className="form-group">
              <select
                className="form-control"
                id="inputSexo"
                value={sexo.valor}
                onChange={(event) => {
                  const valor = event.target.value;
                  setSexo({ valor, erro: "" });
                }}
              >
                <option value="0" default>
                  Seu sexo
                </option>
                <option value="1">Indefinido</option>
                <option value="2">Masculino</option>
                <option value="3">Feminino</option>
              </select>
            </div>
            <div className="form-group text-justify">
              <label htmlFor="inputFoto ">
                <b>Sua foto de perfil: </b>
              </label>
              <input
                type="file"
                className="form-control-file"
                id="inputFoto"
                accept="image/*"
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="btn w-100 btn-primary mb-1"
          title="Cadastrar"
        >
          <i className="fa fa-user-plus fa-lg mr-1"></i>Cadastrar-se
        </button>
      </form>
    </div>
  );
}
