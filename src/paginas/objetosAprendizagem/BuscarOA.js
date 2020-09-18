import React from "react";

import exampleoa from "../../recursos/img/exampleoa.png";

export default function BuscarOA() {
  return (
    <div className="text-center mr-auto ml-auto w-90">
      <h1 className="pt-4 pb-2">Buscar Objeto de Aprendizagem</h1>
      <div className="bg-light p-3 pl-5 pr-5 rounded shadow-sm text-justify">
        <div className="input-group mb-3">
          <input
              id="nomeOA"
              type="text"
              className="form-control"
              placeholder="Digite nome desejado para o Objeto de Aprendizagem"
              aria-label="Digite nome desejado para o Objeto de Aprendizagem"
            />
        </div>
          <div className="input-group mb-3">
              <select className="custom-select" id="descritorOA">
                <option selected>Descritor do Objeto de Aprendizagem</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
          </div>
          <div className="mb-3 mx-auto row">
            <div className="input-field col-sm mx-auto">
              <select className="custom-select" id="nivelensinoOA">
                <option selected>Nível de Ensino</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="input-field col-sm mx-auto">
              <select className="custom-select" id="temacurriculaOA">
                <option selected>Tema Curricular</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="input-field col-sm mx-auto">
              <select className="custom-select" id="plataformaOA">
                <option selected>Plataforma</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        <div className="row mb-4">
          <div className="col text-center">
            <button type="submit" className="btn btn-dark btn-lg">Buscar</button>
          </div>
        </div>
        <hr></hr>
        <div className="row hidden-md-up">
          <div className="card mb-4 mx-auto col-md-4" style={{maxWidth:'335px', minWidth:'100px'}}>
            <img className="card-img-top" src={ exampleoa } alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
            <div className="card-body">
              <a href="#" className="card-link">Card link</a>
              <a href="#" className="card-link">Another link</a>
            </div>
          </div>
          <div className="card mb-4 mx-auto col-md-4" style={{maxWidth:'335px', minWidth:'100px'}}>
            <img className="card-img-top" src={ exampleoa } alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
            <div className="card-body">
              <a href="#" className="card-link">Card link</a>
              <a href="#" className="card-link">Another link</a>
            </div>
          </div>
          <div className="card mb-4 mx-auto col-md-4" style={{maxWidth:'335px', minWidth:'100px'}}>
            <img className="card-img-top" src={ exampleoa } alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
            <div className="card-body">
              <a href="#" className="card-link">Card link</a>
              <a href="#" className="card-link">Another link</a>
            </div>
          </div>
          <div className="card mb-4 mx-auto col-md-4" style={{maxWidth:'335px', minWidth:'100px'}}>
            <img className="card-img-top" src={ exampleoa } alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
            <div className="card-body">
              <a href="#" className="card-link">Card link</a>
              <a href="#" className="card-link">Another link</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
