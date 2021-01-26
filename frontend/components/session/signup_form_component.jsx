import React from "react";
import { Link } from "react-router-dom";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: props.user,
      errors: props.errors,
    };

    //sets state to empty user and password

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(value) {
    return (e) => {
      this.setState({ [value]: e.target.value });
      e.target.className = "";

      switch (value) {
        case "username":
          this.setState({ errors: { usernameError: "" } });
        case "email":
          this.setState({ errors: { emailError: "" } });
        case "password":
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

    // const errors = this.props.errors.map((error) => {
    //   return <p className="error">{error}</p>;
    // });
    // debugger;
    // const { errors } = this.props.errors;
    // debugger;

    // switch (true) {
    //   case this.props.errors.includes("Username can't be blank"):
    //     this.setState({
    //       errors: {
    //         usernameError: (
    //           <div className="errors">Username can't be blank</div>
    //         ),
    //       },
    //     });
    //   case this.props.errors.includes("Username has already been taken"):
    //     this.setState({
    //       errors: {
    //         usernameError: (
    //           <div className="errors">Username has already been taken</div>
    //         ),
    //       },
    //     });

    //   case this.props.errors.includes(
    //     "Password is too short (minimum is 6 characters)"
    //   ):
    //     this.setState({
    //       errors: {
    //         passwordError: (
    //           <div className="errors">
    //             Password is too short (minimum is 6 characters)
    //           </div>
    //         ),
    //       },
    //     });
    //   case this.props.errors.includes("Email can't be blank"):
    //     this.setState({
    //       errors: {
    //         emailError: <div className="errors">Email can't be blank</div>,
    //       },
    //     });
    // }

    // debugger;
    // let withErrors;
    // //add css selector with errors.
    // errors ? (withErrors = "errors") : "";

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
                  />
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
                    className={this.state.errors.password ? "error-box" : ""}
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
