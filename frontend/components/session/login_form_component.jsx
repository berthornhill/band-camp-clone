import React, { useImperativeHandle } from "react";
import { useHistory } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.user; //sets state to empty user and password
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(value) {
    return (e) => {
      this.setState({ [value]: e.target.value });
      this.props.clearErrors();
      // debugger;
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
    // this.setState({ password: "" });
    // debugger;
    // if (this.props.errors) {
    //   this.renderErrors();
    // } else {
    //   this.props.history.push("/");
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

    const errors = this.props.errors.map((error) => {
      return <p className="error">{error}</p>;
    });

    let withErrors;
    //add css selector with errors.
    errors ? (withErrors = "errors") : "";

    return (
      <div className="form-outer">
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
                  className={withErrors}
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
                  className={withErrors}
                />
              </div>
            </div>
            <div className="errors-render">
              <span>{errors}</span>
            </div>
          </div>
          <div className="submit-button">
            <input
              className="submit"
              type="submit"
              value={this.props.formType}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
