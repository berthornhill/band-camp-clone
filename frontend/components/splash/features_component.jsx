import React from "react";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div className="splash">
      <div className="feature-bg">
        <div className="featured">
          <div className="top-story">
            <Link to="/artist/286">
              <img src={window.concert2} alt="top story, rock star guy image" />
              <h3>Welcome to my Bandcamp Clone!</h3>
            </Link>
          </div>
          <div className="trio-box">
            <div className="mini-story one">
              <Link to="/artist/277">
                <img src={window.record} alt="top story, rock star guy image" />
                <h4>Sign up and create a Profile!</h4>
              </Link>
            </div>
            <div className="mini-story two">
              <Link to="/artist/307">
                <img
                  src={window.rockstarguy}
                  alt="top story, rock star guy image"
                />
                <h4>Upload some images or some music. Make it unique!</h4>
              </Link>
            </div>
            <div className="mini-story three">
              <Link to="/artist/308">
                <img
                  src={window.urmusic}
                  alt="top story, rock star guy image"
                />
                <h4>about the developer</h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
