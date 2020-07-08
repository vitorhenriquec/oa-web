import React from "react";
import "./Sobre.css";

export default function Sobre() {
  return (
    <div className="text-center mr-auto ml-auto w-90 bg-transparent rounded">
      <h1 className="pt-4">Sobre</h1>
      <div className="row">
        <div className="col-12">
          <h4>Video de apresentação:</h4>
          <iframe
            title="Video de apresentação"
            className="videoSobre"
            height="300"
            width="580"
            src="https://www.youtube.com/embed/oH3omNV9UUU"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen=""
          ></iframe>
        </div>
      </div>
    </div>
  );
}
