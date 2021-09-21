import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <div className="navbar">
        <img src="./images/logo1.png" alt="" />
        <div className="nav__menu">
          <p>Home</p>
          <p>Galary</p>
          <p>Booking</p>
          <p>Contact Us</p>
          <p>About Us</p>
          <img src="https://img.icons8.com/bubbles/50/000000/user.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Nav;
