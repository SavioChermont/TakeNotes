import React from "react";
import Form from "./Form";

class App extends React.Component {
  state = {
    titulo: "",
    conteudo: "",
  };

  formSubmit = (nota) => {
    console.log(nota);
  };

  render() {
    return (
      <div className="take-note-container">
        <div className="adicionar-nota">
          <div className="btn-new-nota">
            <button className="btn">
              <i className="btn-icon"> + </i>
            </button>
          </div>
          <div className="formulario">
            <Form onFormSubmit={this.formSubmit} />
          </div>
        </div>
        <div className="show-notes"></div>
      </div>
    );
  }
}

export default App;
