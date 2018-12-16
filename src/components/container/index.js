import React, { PureComponent } from "react";
import style from "./index.module.styl";

class Container extends PureComponent {
  render() {
    const { children, ...otherProps } = this.props;
    return (
      <div className={style.container} {...otherProps}>
        {children}
      </div>
    );
  }
}

export default Container;
