import React, { PureComponent } from "react";
import { Link } from "gatsby";
import style from "./index.module.styl";
import Container from "../container";
import menuIconSrc from "../../assets/menu-icon.svg";
import closeIconSrc from "../../assets/close-menu-icon.svg";
import resizeEvent from "../../utils/resize-event";

const links = [
  <Link key="games" className={style.link} activeClassName={style.activeLink} to="/">
    Games
  </Link>,
  <Link key="tools" className={style.link} activeClassName={style.activeLink} to="/tools">
    Tools
  </Link>,
  <Link key="about" className={style.link} activeClassName={style.activeLink} to="/about">
    About
  </Link>,
  <Link key="contact" className={style.link} activeClassName={style.activeLink} to="/contact">
    Contact
  </Link>
];

class CollapsedNav extends PureComponent {
  state = {
    isOpen: false
  };

  openMenu = () => this.setState({ isOpen: true });
  closeMenu = () => this.setState({ isOpen: false });

  render() {
    const { isOpen } = this.state;

    return (
      <Container>
        <nav className={style.collapsedNav}>
          <div className={style.logo}>
            <Link to="/">Sporadic Labs</Link>
          </div>
          <button disabled={isOpen} className={style.openButton}>
            <img src={menuIconSrc} alt="Open Menu" onClick={this.openMenu} role="button" />
          </button>
        </nav>
        {isOpen && (
          <div className={style.collapsedOverlayMenu}>
            <button className={style.closeButton}>
              <img src={closeIconSrc} alt="Close Menu" onClick={this.closeMenu} role="button" />
            </button>
            <div className={style.overlay} />
            <div className={style.overlayLinks}>{links}</div>
          </div>
        )}
      </Container>
    );
  }
}

class ExpandedNav extends PureComponent {
  render() {
    return (
      <Container>
        <nav className={style.nav}>
          <div className={style.logo}>
            <Link to="/">Sporadic Labs</Link>
          </div>
          <div>{links}</div>
        </nav>
      </Container>
    );
  }
}

class Nav extends PureComponent {
  state = {
    // Gatsby renders out HTML on the server, so we don't know the width until we've mounted.
    // Optimistically assume it's a small device
    width: 400
  };

  componentDidMount() {
    resizeEvent.addListener(this.onResize);
    this.onResize();
  }

  componentWillUnmount() {
    resizeEvent.removeListener(this.onResize);
  }

  onResize = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    return width > 700 ? <ExpandedNav /> : <CollapsedNav />;
  }
}

export default Nav;
