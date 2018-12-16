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

/**
 * A component that wraps around pages and transitions between them as the route changes
 */
class PageTransition extends PureComponent {
  render() {
    const { children, location } = this.props;

    // PosedGroup animates children as they are mounted/unmounted - it is important that each
    // child's key matches the URL, so that the PosedGroup can keep track of them
    return (
      <PoseGroup>
        <PosedFadingDiv key={location.pathname}>{children}</PosedFadingDiv>
      </PoseGroup>
    );
  }
}

export default PageTransition;
