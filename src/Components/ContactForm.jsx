import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Component } from "react";

//lets write a controlled component for the contact form
//name our class
class ContactForm extends Component {
  //initialize the state
  constructor(props) {
    super(props);

    //parsing url parameters to prefill the form

    const parameters = new URLSearchParams(window.location.search);
    //pulls the material from the url parameters, if it exists
    //if it does not exist, it will default to "selectJobMaterial"
    const material = (
      parameters.get("material") || "selectJobMaterial"
    ).toLowerCase();
    const allowedMaterials = ["brick", "block", "stone"];
    //if the material is not in the allowedMaterials array, it will default to "selectJobMaterial"
    const selectedMaterial = allowedMaterials.includes(material)
      ? material
      : "selectJobMaterial";

    this.state = {
      name: "",
      phone: "",
      address: "",
      message: "",
      selectedMaterial: selectedMaterial, //sets the selected material to the material from the url parameters, or "selectJobMaterial" if it does not exist
      loading: false, //sets loading to false by default
      statusMessage: "",
      statusType: "", //'success' or 'error'
    };

    //handleChange updates the state each time it changes
    this.handleChange = this.handleChange.bind(this);
    //handleSubmit will be used to submit the updated state
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //handleChange will update the state of the material, name, phone, address, and message fields
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ loading: true });
    //set loading to true when the form is submitted
    console.log("Form submitted:", this.state);

    fetch("https://masonrywebsite.onrender.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        this.setState({
          loading: false,
          statusType: "success",
          statusMessage: "Successfully submitted, we will be in contact soon!",
        }); //set loading to false, status type to success, and message to message when the form is submitted, disabling the spinner
      })
      .catch((error) => {
        console.error("Error:", error);
        this.setState({
          loading: false,
          statusType: "error",
          statusMessage:
            "There was an issue processing your request. Try again later or reach us directly at (606)213-7094",
        }); //set loading to false if there is an error, status type to error, and message to error message
      });
  }

  //now we render the form
  //we will use the state to set the value of the input fields
  render() {
    return (
      <>
        <div className="contact-form-container">
          {this.state.loading && (
            //short circuit conditional^^ renders the loading spinner if this.state.loading is true.
            <div className="loading-container">
              <div className="loading-spinner" id="loading"></div>
            </div>
          )}

          {this.state.statusMessage && (
            <div className="status-container">
              <div className="status-message">
                <p>{this.state.statusMessage}</p>
              </div>
            </div>
          )}

          <form onSubmit={this.handleSubmit}>
            <label className="contact-material">
              <select
                name="selectedMaterial"
                value={this.state.selectedMaterial}
                required
                onChange={(e) =>
                  this.setState({ selectedMaterial: e.target.value })
                }
              >
                <option value="selectJobMaterial" disabled>
                  Select Job Material
                </option>
                <option value="brick">Brick</option>
                <option value="block">Block</option>
                <option value="stone">Stone</option>
              </select>
            </label>
            <label className="contact-name">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={this.state.name}
                onChange={this.handleChange}
                required
              />
            </label>
            <label className="contact-number">
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={this.state.phone}
                onChange={this.handleChange}
                required
              />
            </label>
            <label className="contact-address">
              <textarea
                name="address"
                placeholder="Job Address"
                value={this.state.address}
                onChange={this.handleChange}
                required
              ></textarea>
            </label>
            <label className="contact-message">
              <textarea
                name="message"
                placeholder="Job Description"
                value={this.state.message}
                onChange={this.handleChange}
                required
              ></textarea>
            </label>
            <div>
              <button type="submit" disabled={this.state.loading}>
                Submit
              </button>
              <Link to="/">
                <button type="button">Cancel</button>
              </Link>
            </div>
          </form>
        </div>
        <div className="empty-space-easter-egg">
          <p>
            hey if u found this heres my github :{" "}
            <a href="https://github.com/Ian-B-Childress">github</a>{" "}
          </p>
        </div>
      </>
    );
  }
}

export default ContactForm;
