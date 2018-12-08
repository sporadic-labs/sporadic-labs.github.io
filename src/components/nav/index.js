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
          <div className={style.links}>
            <Link to="/games">Games</Link>
            <Link to="/tools">Tools</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
