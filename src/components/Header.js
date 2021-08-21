import React from "react";
import "./header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = { menueToggle: "container" };
  }

  toggleClass = () => {
    const currentState = "container" ? "change" : "container";
    this.setState({ menueToggle: currentState });
  };

  render() {
    return (
      <header>
        <div>Logo</div>
        <div>
          <a href="tel:719-930-6606">(719) 930-6606</a>
        </div>

        <div className={this.state.menueToggle} onClick={this.toggleClass}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </header>
    );
  }
}

export default Header;
