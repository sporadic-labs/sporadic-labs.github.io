import React, { PureComponent } from "react";
import { Link } from "gatsby";
import style from "./index.module.styl";
import Container from "../container";

class Nav extends PureComponent {
  render() {
    return (
      <Container>
        <nav className={style.nav}>
          <div className={style.logo}>
            <Link to="/">Sporadic Labs</Link>
          </div>
          <div>
            <Link className={style.link} activeClassName={style.activeLink} to="/">
              Games
            </Link>
            <Link className={style.link} activeClassName={style.activeLink} to="/tools">
              Tools
            </Link>
            <Link className={style.link} activeClassName={style.activeLink} to="/about">
              About
            </Link>
            <Link className={style.link} activeClassName={style.activeLink} to="/contact">
              Contact
            </Link>
          </div>
        </nav>
      </Container>
    );
  }
}

export default Nav;
