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
          <input type="text" value={"artist"} onChange={this.handleChange} />
        </label>
        <label>
          Username
          <input type="text" value={"username"} onChange={this.handleChange} />
        </label>
        <label>
          Passsword
          <input type="text" value={"password"} onChange={this.handleChange} />
        </label>
        <input type="submit">{this.props.formType}</input>
      </form>
    );
  }
}

export default SignupForm;
