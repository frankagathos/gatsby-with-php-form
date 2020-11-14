import React from "react";
import axios from "axios";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mailSent: false,
      error: null,

    };
  }

  handleFormSubmit = e => {
    e.preventDefault();
    axios({
      method: "post",
      url: 'https://your-website-domain.com/api/contact/index.php', //change this to correct endpoint 
      headers: { "content-type": "application/json" },
      data: this.state
    })
      .then(result => {
        if (result.data.sent) {
          this.setState({
            mailSent: result.data.sent
          });
          this.setState({ error: false });
        } else {
          this.setState({ error: true });
        }
      })
      .catch(error => this.setState({ error: error.message }));
  };

  //handle changing fields

  handleChange = (e, field) => {
    let value = e.target.value;
    let updateValue = {};
    updateValue[field] = value;
    this.setState(updateValue);
  };

  render() {

    return (
      <div className="form-wrapper">
        <h2>Contact form-A</h2>

        <div>
          <form action="#">
            {/* Name */}
            <label>First name</label>
            <input
              type="text"
              placeholder="First name"
              value={this.state.firstName}
              onChange={e => this.handleChange(e, 'firstName')}
              required
            />

            <label>Last name</label>
            <input
              type="text"
              placeholder="Last name"
              value={this.state.lastName}
              onChange={e => this.handleChange(e, 'lastName')}
              required
            />


            {/* Email */}
            <label>Email</label>
            <input
              type="email"
              placeholder="Your@Name.com"
              value={this.state.email}
              onChange={e => this.handleChange(e, "email")}
              required
            />


            <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />

            <div>

              {this.state.mailSent && <div className="success">success</div>}
              {this.state.error && <div className="error">Error</div>}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
