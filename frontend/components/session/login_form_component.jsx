import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.user; //sets state to empty user and password
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(value) {
    return (e) => this.setState({ [value]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
    this.setState({ password: "" });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="login-form">
        <div classname="form-type">
          <h2>{this.props.formType}</h2>
        </div>
        <label>
          Username
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleChange("username")}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={this.state.password}
            onChange={this.handleChange("password")}
          />
        </label>
        <input className="submit" type="submit" value={this.props.formType} />
      </form>
    );

    // return <h1>Forms a coming!~</h1>;
  }
}

export default LoginForm;
