import React from "react";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.user; //sets state to empty user and password
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(value) {
    return (e) => this.setState({ [value]: e.target.value });
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then(this.props.removeModal());
  }
  componentWillUnmount() {
    this.props.clearErrors();
  }

  render() {
    debugger;

    const errors = this.props.errors.map((error) => {
      return <p className="error">{error}</p>;
    });

    let withErrors;
    //add css selector with errors.
    errors ? (withErrors = "errors") : "";

    return (
      <form onSubmit={this.handleSubmit} className="signup-form">
        <div className="form-type">
          <h2>Sign up for a Bandlamp account</h2>
        </div>
        <label>
          Artist/Band
          <input
            type="text"
            value={this.state.artist}
            onChange={this.handleChange("artist")}
            className={withErrors}
          />
        </label>
        <label>
          Username
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleChange("username")}
            className={withErrors}
          />
        </label>
        <label>
          Email
          <input
            type="text"
            value={this.state.email}
            onChange={this.handleChange("email")}
            className={withErrors}
          />
        </label>
        <label>
          Passsword
          <input
            type="password"
            value={this.state.password}
            onChange={this.handleChange("password")}
            className={withErrors}
          />
        </label>
        <span>{errors}</span>
        <input type="submit" value={this.props.formType} className="submit" />
      </form>
    );
  }
}

export default SignupForm;
