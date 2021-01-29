import React from "react";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div className="splash">
      <div className="feature-bg">
        <div className="featured">
          <div className="top-story">
            <Link to="/artist/210">
              <img src={window.concert2} alt="top story, rock star guy image" />
            </Link>
            <h3>This Year, Concerts Are Outside!</h3>
          </div>
          <div className="trio-box">
            <Link to="/artist/178">
              <img src={window.record} alt="top story, rock star guy image" />
            </Link>
            <Link to="/artist/199">
              <img
                src={window.rockstarguy}
                alt="top story, rock star guy image"
              />
            </Link>
            <Link to="/artist/200">
              <img src={window.urmusic} alt="top story, rock star guy image" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
