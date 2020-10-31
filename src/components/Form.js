import React from "react";
import "../css/Form.css";

class Form extends React.Component {
  state = {
    titulo: "",
    conteudo: "",
  };

  handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({ [name]: value });

    this.props.showPreview(name, value);
  };

  formSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.formSubmit} className="form-container">
          <label> TITLE </label>
          <input
            type="text"
            placeholder="Titulo"
            value={this.state.titulo}
            name="titulo"
            onChange={this.handleInputChange}
          />

          <label> CONTEUDO </label>
          <textarea
            type="text"
            placeholder="Conteudo"
            name="conteudo"
            value={this.state.conteudo}
            onChange={this.handleInputChange}
          />

          <button type="submit" className="submit">
            {" "}
            Adicionar Nota{" "}
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
