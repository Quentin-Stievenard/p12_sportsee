import React from "react";
import PropTypes from "prop-types";
/**
 * @param  {string} {img}
 * @param  {function} {onClick
 * @param  {string} {className}
 */
export default function Button({ img, onClick, className }) {
  return (
    <div
      onClick={onClick}
      className={`${className} bg-white p-3.5 rounded-md w-fit`}
    >
      <img src={img} alt="img button" />
    </div>
  );
}

Button.propTypes = {
  img: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Button.defaultProps = {
  img: "",
  onClick: () => {},
  className: "",
};
