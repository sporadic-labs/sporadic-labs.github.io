import React, { PureComponent } from "react";
import posed, { PoseGroup } from "react-pose";

const PosedFadingDiv = posed.div({
  enter: {
    opacity: 1,
    transition: {
      type: "tween",
      delay: 250,
      duration: 250,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    transition: {
      type: "tween",
      duration: 250,
      ease: "easeIn"
    }
  }
});

class PageTransition extends PureComponent {
  render() {
    const { children, location } = this.props;

    return (
      <PoseGroup>
        <PosedFadingDiv key={location.pathname}>{children}</PosedFadingDiv>
      </PoseGroup>
    );
  }
}

export default PageTransition;
