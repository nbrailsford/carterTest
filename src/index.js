import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
