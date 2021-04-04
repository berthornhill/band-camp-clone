import React, { useImperativeHandle } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.user; //sets state to empty user and password
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleChange(value) {
    return (e) => {
      this.setState({ [value]: e.target.value });
      e.target.className = "";
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
  }

  handleDemo() {
    this.setState({ username: "demo", password: "testpassword" });
  }

  // life cycle methods //

  componentWillUnmount() {
    this.props.clearErrors();
  }

  componentDidMount() {
    this.props.removeModal();
  }

  render() {
    return (
      <div className="form-outer">
        <div className="form-inner-container">
          <form onSubmit={this.handleSubmit} className="login-form">
            <div className="form-type">
              <h2>{this.props.formType}</h2>
            </div>
            <div className="form-inputs">
              <div className="item">
                <label>Username</label>
                <div>
                  <input
                    type="text"
                    value={this.state.username}
                    onChange={this.handleChange("username")}
                    className={this.props.errors.login ? "error-box" : ""}
                  />
                </div>
              </div>
              <div className="item">
                <label>Password</label>
                <div>
                  <input
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange("password")}
                    className={this.props.errors.login ? "error-box" : ""}
                  />
                  <div className="errors">{this.props.errors.login}</div>
                </div>
              </div>
            </div>
            <div className="submit-button">
              <input className="submit" type="submit" value="Log in" />
            </div>
          </form>

          <div className="redirect-links">
            <span>
              Don't have an account? <Link to="/users/signup"> Sign up</Link> or
              use our
              <button className="demo-link" onClick={() => this.handleDemo()}>
                demo
              </button>
              account.
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
