import React from "react";

const withStyle = (css) => (DecoratComponent) => {
  return function (props) {
    const { staticContext } = props;
    if (staticContext) {
      props.staticContext.css.push(css._getCss());
    }
    return <DecoratComponent {...props}></DecoratComponent>;
  };
};

export default withStyle;
