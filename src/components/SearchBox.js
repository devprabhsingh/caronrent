import React, { Component, Fragment } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import Posts from "./Posts";
import { connect } from "react-redux";
class SearchBox extends Component {
  state = {
    pickupDate: new Date(),
    address: "",
    showCalendar: false,
    showResults: false,
    changed: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.pickupDate !== this.state.pickupDate &&
      prevState.pickupDate !== new Date()
    ) {
      this.setState({
        posts: [],
        changed: true,
      });
    }
    if (prevState.address !== this.state.address) {
      this.setState({
        posts: [],
        changed: true,
      });
    }
  }
  onChangeDate = (e) => {
    this.setState({
      pickupDate: e,
    });
    this.toggleCalendar();
  };

  toggleCalendar = () => {
    this.setState({
      showCalendar: !this.state.showCalendar,
    });
  };

  onChange = (e) => {
    this.setState({
      address: e.target.value,
    });
  };
  startCarSearch = () => {
    document.getElementById("address-error").innerText =
      this.state.address.length === 0 ? "Please enter address" : "";
    if (this.state.address !== "" && this.state.changed === true) {
      this.setState({
        showResults: true,
        changed: false,
      });
    }
  };
  render() {
    return (
      <Fragment>
        <div id="search-box">
          <div className="search-box-headings">
            <h1>You can now even book the car in advance</h1>
            <div>
              <h3>We deliver the car at your desired location</h3>
              <h4>
                To see the availability of cars you can rent, fill the details
                below
              </h4>
            </div>
          </div>
          <div id="form">
            <div>
              <h3>Enter your shipping address</h3>
              <input
                id="shipping-address"
                value={this.state.address}
                onChange={this.onChange}
                placeholder="address goes here.."
              />
              <p id="address-error"></p>
            </div>
            <div>
              <h3>Select delivery date</h3>
              <input
                id="pickup-date"
                readOnly
                onClick={this.toggleCalendar}
                value={moment(this.state.pickupDate).format("MMMM Do YYYY")}
                placeholder="select date.."
              />
              {this.state.showCalendar ? (
                <Calendar
                  onChange={this.onChangeDate}
                  value={this.state.pickupDate}
                />
              ) : (
                ""
              )}
            </div>
            <button onClick={this.startCarSearch} className="submit">
              Search
            </button>
          </div>
        </div>
        {this.state.showResults ? (
          <div id="searchResults-box">
            <Posts title="Available Cars" posts={this.props.posts} />
          </div>
        ) : (
          ""
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.data.posts,
});

export default connect(mapStateToProps, null)(SearchBox);
