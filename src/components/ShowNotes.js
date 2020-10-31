import React from "react";
import "../css/ShowNotes.css";

const ShowNotes = ({ notas }) => {
  console.log(typeof notas);
  const renderNota = notas.map((nota, index) => {
    return (
      <div key={index} className="notas-container">
        <div className="nota-container">
          <h3 className="nota-titulo"> {nota.titulo} </h3>
          <p className="conteudo-titulo"> {nota.conteudo} </p>
        </div>
      </div>
    );
  });
  return <div>{renderNota}</div>;
};

export default ShowNotes;
