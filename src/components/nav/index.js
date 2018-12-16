import React, { PureComponent } from "react";
import { Link } from "gatsby";
import posed, { PoseGroup } from "react-pose";
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

// Testing out posed as a tool for easier animation. When this posed div is added or removed from a
// PosedGroup, it animates to the "enter" or "exit" poses as defined here
const PosedOverlayDiv = posed.div({
  enter: {
    opacity: 1,
    transition: {
      type: "tween",
      duration: 150,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    transition: {
      type: "tween",
      duration: 150,
      ease: "easeIn"
    }
  }
});

const logo = (
  <div className={style.logo}>
    <Link to="/">Sporadic Labs</Link>
  </div>
);

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
          {logo}
          <button disabled={isOpen} className={style.openButton}>
            <img src={menuIconSrc} alt="Open Menu" onClick={this.openMenu} role="button" />
          </button>
        </nav>
        <PoseGroup animateOnMount={true}>
          {isOpen && (
            <PosedOverlayDiv key="menu">
              <div className={style.collapsedOverlayMenu}>
                <button className={style.closeButton}>
                  <img src={closeIconSrc} alt="Close Menu" onClick={this.closeMenu} role="button" />
                </button>
                <div className={style.overlay} />
                <div className={style.overlayLinks}>{links}</div>
              </div>
            </PosedOverlayDiv>
          )}
        </PoseGroup>
      </Container>
    );
  }
}

class ExpandedNav extends PureComponent {
  render() {
    return (
      <Container>
        <nav className={style.nav}>
          {logo}
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
    showCollapsedNav: true
  };

  componentDidMount() {
    resizeEvent.addListener(this.onResize);
    this.onResize();
  }

  componentWillUnmount() {
    resizeEvent.removeListener(this.onResize);
  }

  onResize = () => {
    this.setState({ showCollapsedNav: window.innerWidth < 750 });
  };

  render() {
    const { showCollapsedNav } = this.state;
    return showCollapsedNav ? <CollapsedNav /> : <ExpandedNav />;
  }
}

export default Nav;
