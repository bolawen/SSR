import React from "react";
import { isServer } from "../../utils";
import image from "../../assets/images/404.png";

function NotFound(props) {
  if (isServer && props.staticContext) {
    props.staticContext.NOT_FOUND = true;
  }
  return (
    <div>
      <img src={image} />
    </div>
  );
}

export default NotFound;
