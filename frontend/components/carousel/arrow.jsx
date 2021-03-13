import React from "react";

const Arrow = ({ direction, handleClick, arrow }) => {
  const arrowStyle = `background-image: url(${arrow})`;

  return (
    <div
      className={`arrow direction`}
      onClick={this.handleClick}
      style={arrowStyle}
    ></div>
  );
};

export default Arrow;
