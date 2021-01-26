import React from "react";

const Features = () => {
  return (
    <div className="splash">
      <div className="feature-bg">
        <div className="featured">
          <div className="top-story">
            <img src={window.concert2} alt="top story, rock star guy image" />
            <h3>This Year, Concerts Are Outside!</h3>
          </div>
          <div className="trio-box">
            <img src={window.record} alt="top story, rock star guy image" />
            <img
              src={window.rockstarguy}
              alt="top story, rock star guy image"
            />
            <img src={window.urmusic} alt="top story, rock star guy image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
