import React from "react";
import { Editor } from "@tinymce/tinymce-react";

import Versao from "./Versao";

export default function Passo3() {
  return (
    <div className="bg-light p-3 pl-5 pr-5 rounded shadow-sm">
      <Versao />
      <button
        type="button"
        className="btn btn-secondary pl-4 pr-4 mb-3"
        title="Auxílio na escrita"
      >
        <i className="fa fa-hands-helping fa-lg"></i> Auxílio na escrita
      </button>
      <div className="form-group p-1">
        <label className="font-weight-bold" htmlFor="planoTitulo">
          Título do plano*:
        </label>
        <input
          placeholder="Digite aqui o título do plano"
          type="text"
          className="form-control"
          id="planoTitulo"
          required
        />
      </div>
      <Editor
        initialValue="<p>Texto inicial</p>"
        init={{
          height: 500,
          language: "pt_BR",
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help",
        }}
      />
    </div>
  );
}
