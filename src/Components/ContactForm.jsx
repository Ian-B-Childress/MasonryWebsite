import React from "react";
import { Link } from "react-router-dom";
import { Component } from "react";

//lets write a controlled component for the contact form
//name our class
class ContactForm extends Component {
  //initialize the state
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      address: "",
      message: "",
      loading: false, //sets loading to false by default
    };

    //handleChange updates the state each time it changes
    this.handleChange = this.handleChange.bind(this);
    //handleSubmit will be used to submit the updated state
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //handleChange will update the state of the name, phone, address, and message fields
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ loading: true }); //set loading to true when the form is submitted
    console.log("Form submitted:", this.state);

    fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        this.setState({ loading: false }); //set loading to false when the form is submitted, disabling the spinner
      })
      .catch((error) => {
        console.error("Error:", error);
        this.setState({ loading: false }); //set loading to false if there is an error
      }
  )};

  //now we render the form
  //we will use the state to set the value of the input fields
  render() {
    return (
      <>
        {this.state.loading && (
          //short circuit conditional^^ renders the loading spinner if this.state.loading is true.
          <div className="loading-spinner" id="loading"></div>
        )}
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            Phone Number:
            <input
              type="tel"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            Address:
            <textarea
              name="address"
              value={this.state.address}
              onChange={this.handleChange}
              required
            ></textarea>
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
              required
            ></textarea>
          </label>
          <div>
            <button type="submit" disabled={this.state.loading}>Submit</button>
            <Link to="/">
              <button type="button">Cancel</button>
            </Link>
          </div>
        </form>
      </>
    );
  }
}

export default ContactForm;
