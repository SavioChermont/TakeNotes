import React from "react";

class Form extends React.Component {
  state = {
    titulo: "",
    conteudo: "",
  };

  handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({ [name]: value });
    console.log(this.state);
  };

  formSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    this.props.onFormSubmit(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.formSubmit}>
          <label> TITLE </label>
          <input
            type="text"
            value={this.state.titulo}
            name="titulo"
            onChange={this.handleInputChange}
          />

          <label> CONTEUDO </label>
          <input
            type="text"
            name="conteudo"
            value={this.state.conteudo}
            onChange={this.handleInputChange}
          />

          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Form;
