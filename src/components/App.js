import React from "react";

class App extends React.Component {
  state = {};
  render() {
    return (
      <div className="take-note-container">
        <div className="form">
          <form action="#">
            <label> TITLE </label>
            <input type="text" />
            <label> NOTA </label>
            <input type="text" />
          </form>
        </div>
        <div className="show-notes"></div>
      </div>
    );
  }
}

export default App;
