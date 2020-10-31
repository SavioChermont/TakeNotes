import React from "react";
import Form from "./Form";
import ShowNotes from "./ShowNotes";
import "../css/App.css";

class App extends React.Component {
  state = { notas: [] };

  componentDidUpdate() {
    console.log(this.state);
  }

  formSubmit = (data) => {
    const nota = { titulo: data.titulo, conteudo: data.conteudo };
    const notas = [...this.state.notas, nota];
    this.setState({ notas: notas });
  };

  showPreview = (campo, letra) => {
    if (campo == "titulo") {
      document.querySelector(".preview-titulo").innerHTML = letra;
    } else {
      document.querySelector(".preview-conteudo").innerHTML = letra;
    }
  };

  render() {
    return (
      <div className="take-note-container">
        <div className="adicionar-nota">
          <div className="create-note">
            <div className="formulario">
              <Form
                onFormSubmit={this.formSubmit}
                showPreview={this.showPreview}
              />
            </div>
            <div className="preview-notes">
              <div className="preview-container">
                <h3 className="preview-titulo"> TITULO </h3>
                <p className="preview-conteudo"> CONTEUDO </p>
              </div>
            </div>
          </div>
        </div>
        <div className="show-notes">
          <ShowNotes notas={this.state.notas} />
        </div>
      </div>
    );
  }
}

export default App;
