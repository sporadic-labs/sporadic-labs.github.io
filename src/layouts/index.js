import React, { PureComponent } from "react";
import Nav from "../components/nav";
import PageTransition from "../components/page-transition";

export default class Layout extends PureComponent {
  render() {
    const { children, location } = this.props;

    return (
      <div>
        <Nav />
        <PageTransition location={location}>{children}</PageTransition>
      </div>
    );
  }
}
