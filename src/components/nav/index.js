import React, { PureComponent } from "react";
import { Link } from "gatsby";
import style from "./index.module.styl";

class Nav extends PureComponent {
  render() {
    return (
      <div className={style.navContainer}>
        <nav className={style.nav}>
          <div className={style.logo}>
            <Link to="/">Sporadic Labs</Link>
          </div>
          <div>
            <Link className={style.link} activeClassName={style.activeLink} to="/games">
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
      </div>
    );
  }
}

export default Nav;
