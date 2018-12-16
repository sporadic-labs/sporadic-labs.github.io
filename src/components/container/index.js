import React, { PureComponent } from "react";
import classNames from "classnames";
import style from "./index.module.styl";

class Container extends PureComponent {
  render() {
    const { children, className, ...otherProps } = this.props;
    return (
      <div className={classNames(style.container, className)} {...otherProps}>
        {children}
      </div>
    );
  }
}

export default Container;
