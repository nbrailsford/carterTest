import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  handleChange = (e) => {
    this.setState = { value: e.target.value };
  };

  handleSubmit(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div className="form">
        <h2>Get a cash offer for your house in 24hours</h2>
        <p>we buy houses in colorado</p>

        <form className="address-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            placeholder="Enter street address"
            onChange={this.handleChange}
          />
          <button>Get your offer</button>
        </form>
      </div>
    );
  }
}

export default Form;
