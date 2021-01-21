import React from "react";

class SignupForm extends React.Component {
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
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>{this.props.formType}</h2>
        <label>
          Artist/Band
          <input
            type="text"
            value={this.state.artist}
            onChange={this.handleChange("artist")}
          />
        </label>
        <label>
          Username
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleChange("username")}
          />
        </label>
        <label>
          Email
          <input
            type="text"
            value={this.state.email}
            onChange={this.handleChange("email")}
          />
        </label>
        <label>
          Passsword
          <input
            type="password"
            value={this.state.password}
            onChange={this.handleChange("password")}
          />
        </label>
        <input type="submit" value={this.props.formType} />
      </form>
    );
  }
}

export default SignupForm;
