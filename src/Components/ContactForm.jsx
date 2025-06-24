
import { Link } from "react-router-dom";
import { Component, useState } from "react";

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
    console.log("Form submitted:", this.state);
    
    fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    })
    .then (response => response.json())
    .then (data => {
      console.log('Success:', data);
     
     
    })
  }



  //now we render the form
  //we will use the state to set the value of the input fields
  render() {
    return (
      <>
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
        </form>

        <div>
          <button type="submit" onClick={this.handleSubmit}>
            Submit
          </button>
          <Link to="/">
            <button>Cancel</button>
          </Link>
        </div>
      </>
    );
  }
}
export default ContactForm;
