import React from "react";
import "./Hero.css";
import Form from "./Form";

class Hero extends React.Component {
  render() {
    return (
      <h1 className="heroImage">
        <Form />
      </h1>
    );
  }
}

export default Hero;
