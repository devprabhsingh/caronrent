import React, { Component } from "react";
let slideIndex = 0;
export default class Updates extends Component {
  slideshow = () => {
    const slides = document.getElementById("updates").childNodes;
    let i;
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(this.slideshow, 3000);
  };
  componentDidMount() {
    this.slideshow();
  }
  render() {
    return (
      <div id="updates">
        <div id="update-1">
          <p>$0 weekly base charges for New Customers</p>
        </div>
        <div id="update-2">
          <p>Save 25% off for renting more than 3 months</p>
        </div>
        <div id="update-3">
          <p>Rent Vintage cars for as low as $10/KM</p>
        </div>
      </div>
    );
  }
}
