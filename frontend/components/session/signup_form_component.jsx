import React from "react";
import { Link } from "react-router-dom";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    // (this.state = this.props.user), (this.state = props.errors);
    // debugger;
    this.state = {
      username: props.user.username,
      artist: props.user.artist,
      password: props.user.password,
      email: props.user.email,
      errors: props.errors,
    };

    // debugger;
    //sets state to empty user and password

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(value) {
    // e.preventDefault();
    // debugger;
    return (e) => {
      // debugger;
      this.setState({ [value]: e.target.value });
      e.target.className = "";

      switch (value) {
        case "username":
          this.setState({ errors: { usernameError: "" } });
        case "email":
          this.setState({ errors: { emailError: "" } });
        case "password":
          this.setState({ errors: { passwordError: "" } });
        case "artist":
          this.setState({ errors: { passwordError: "" } });
      }
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
  }

  // life cycle methods //

  componentWillUnmount() {
    this.props.clearErrors();
  }
  componentDidMount() {
    this.props.removeModal();
  }

  render() {
    // debugger;
    return (
      <div className="form-outer">
        <div className="form-inner-container">
          <form onSubmit={this.handleSubmit} className="login-form">
            <div className="form-type">
              <h2>Sign up for a Bandlamp account</h2>
            </div>
            <div className="form-inputs">
              <div className="item">
                <label>Artist/Band</label>
                <div>
                  <input
                    type="text"
                    value={this.state.artist}
                    onChange={this.handleChange("artist")}
                    className={this.props.errors.artist ? "error-box" : ""}
                  />
                  <div className="errors">{this.props.errors.artist}</div>
                </div>
              </div>
              <div className="item">
                <label>Username</label>
                <div>
                  <input
                    type="text"
                    value={this.state.username}
                    onChange={this.handleChange("username")}
                    className={this.props.errors.username ? "error-box" : ""}
                  />
                  <div className="errors">{this.props.errors.username}</div>
                </div>
              </div>
              <div className="item">
                <label>Email</label>
                <div>
                  <input
                    type="text"
                    value={this.state.email}
                    onChange={this.handleChange("email")}
                    className={this.props.errors.email ? "error-box" : ""}
                  />
                  <div className="errors">{this.props.errors.email}</div>
                </div>
              </div>
              <div className="item">
                <label>Passsword</label>
                <div>
                  <input
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange("password")}
                    className={this.props.errors.password ? "error-box" : ""}
                  />
                  <div className="errors">{this.props.errors.password}</div>
                </div>
              </div>
            </div>
            <div className="submit-button">
              <input type="submit" value="Sign up" className="submit" />
            </div>
          </form>

          <div className="redirect-links">
            <span>
              Already have an account or not ready to sign up just yet?{" "}
              <Link to="/users/login">Log in</Link> or use our{" "}
              <Link
                to={{
                  pathname: "/users/login",
                  type: "demo",
                }}
              >
                demo
              </Link>{" "}
              account.
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupForm;
