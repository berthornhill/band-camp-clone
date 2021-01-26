import React from "react";

const DotSales = () => {
  const dotLeft = <span className="dot-left"></span>;
  const dotRight = <span className="dot-right"></span>;

  return (
    <div className="sales-outer">
      <div className="dot-sales splash">
        <div>
          {dotLeft}
          {dotLeft}
          {dotLeft}
          {dotLeft}
          {dotLeft}
        </div>
        <div className="sales">
          <p>
            Fans have paid more than <strong>1 billion</strong> using Bandlamp,
            and <strong>$10</strong> of that in last 72 hours alone!
          </p>
        </div>
        <div>
          {dotRight}
          {dotRight}
          {dotRight}
          {dotRight}
          {dotRight}
        </div>
      </div>
    </div>
  );
};

export default DotSales;
