import React, { PureComponent } from "react";
import { Link } from "gatsby";

class Nav extends PureComponent {
  render() {
    return (
      <nav>
        <Link to="/games">Games</Link> | <Link to="/tools">Tools</Link> |{" "}
        <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
      </nav>
    );
  }
}

export default Nav;
