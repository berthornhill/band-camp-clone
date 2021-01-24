import React from "react";

class SignupForm extends React.Component {
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
  }

  // life cycle methods //

  componentWillUnmount() {
    this.props.clearErrors();
  }
  componentDidMount() {
    this.props.removeModal();
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
      <div className="form-outer">
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
                  className={withErrors}
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
                  className={withErrors}
                />
              </div>
            </div>
            <div className="item">
              <label>Email</label>
              <div>
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.handleChange("email")}
                  className={withErrors}
                />
              </div>
            </div>
            <div className="item">
              <label>Passsword</label>
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
              type="submit"
              value={this.props.formType}
              className="submit"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;
