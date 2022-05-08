import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div id="footer-wrapper">
          <p id="info">
            <span>CARonRENT</span>
            <img
              alt="icon"
              src="https://img.icons8.com/plasticine/100/000000/car--v1.png"
            />
            is a limited company registered in Toronto whose registered address
            is 125 Christ Street, Toronto, M4T 13R.
          </p>
          <div id="links">
            <button href="#">Privacy Notice</button>
            <button href="#">Cookies</button>
            <button href="#">Terms and Conditions</button>
            <button href="#">Help</button>
            <button href="#">Affiliate Programs</button>
            <button href="#">Careers</button>
          </div>
          <p id="copyright">
            Copyright © 2022 CARonRENT.com Transport Limited. All rights
            reserved
          </p>
        </div>
      </footer>
    );
  }
}
