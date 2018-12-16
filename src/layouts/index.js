import React, { PureComponent } from "react";
import Nav from "../components/nav";

export default class Layout extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Nav />
        {children}
      </div>
    );
  }
}
