import React from "react";

const Arrow = ({ direction, handleClick, arrow }) => {
  // const arrowStyle = {
  //   backgroundImage: `url(${arrow})`,
  // };

  return (
    <img
      src={arrow}
      className={`arrow ${direction}`}
      onClick={handleClick}
      // style={arrowStyle}
    />
  );
};

export default Arrow;
