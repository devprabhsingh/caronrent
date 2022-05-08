import React, { Component, Fragment } from "react";

export default class BookingForm extends Component {
  state = {
    isFormFilled: false,
  };
  validateForm = (e) => {
    e.preventDefault();
    const inputs = document.querySelector(".inputs").childNodes;
    let emptyFields = 0;
    inputs.forEach((i) => {
      if (i.value === "") {
        emptyFields++;
      }
    });

    if (emptyFields > 1) {
      document.getElementById("error").innerHTML = "Please enter all fields";
    } else {
      document.getElementById("error").innerHTML = "";
      this.setState({
        isFormFilled: true,
      });
    }
  };
  render() {
    return (
      <Fragment>
        {!this.state.isFormFilled ? (
          <div id="booking-form">
            <h2>We need some details</h2>
            <p id="error"></p>
            <form className="inputs" onSubmit={this.validateForm}>
              <input required type="text" placeholder="Enter your name" />
              <input required type="text" placeholder="Enter your email" />
              <input
                required
                type="text"
                placeholder="Enter your phone number"
              />
              <input
                required
                type="text"
                placeholder="Enter your street address"
              />
              <input required type="text" placeholder="Enter your city" />
              <input
                required
                type="text"
                placeholder="Enter your postal code"
              />
              <button className="submit">Submit</button>
            </form>
          </div>
        ) : (
          <h2 style={{ textAlign: "center", marginTop: "10vh" }}>
            We have sent you an email. Please confirm the booking.
          </h2>
        )}
      </Fragment>
    );
  }
}
