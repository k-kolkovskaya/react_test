import React from "react";
import PropTypes from "prop-types";

function Button(props) {
  return <button onClick={props.onClick}>Explain</button>;
}

Button.propTypes = {
  onClick: PropTypes.func
};

export default Button;
