import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class BookInAdvance extends Component {
  render() {
    return (
      <div id="search-box-container">
        <div className="search-box-headings">
          <h1>You can now even book the car in advance</h1>
          <h3>We deliver the car at your desired location</h3>
        </div>
        <Link to="/bookadvance" onClick={() => window.scroll(0, 0)}>
          See availability and Book now
        </Link>
      </div>
    );
  }
}
