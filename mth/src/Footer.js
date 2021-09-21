import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="left">
          <div className="contact__detail">
            <h1>Let's get in touch</h1>
            <p>We're open for any suggestion or just have chat</p>
            <p>
              <img src="./images/location.png" alt="" />
              <span>Address:</span>village:-Antali, Teh:-Asind (Bhilwara)
            </p>
            <p>
              <img src="./images/phone.png" alt="" />
              <span>Phone:</span>9950946749
            </p>
            <p>
              <img src="./images/email.png" alt="" />
              <span>Email:</span>yoyosirr@gmail.com
            </p>
            <p>
              <img src="./images/website.png" alt="" /> <span>website:</span>
              www.mth.com
            </p>
          </div>
        </div>
        <div className="right">
          <h1>Get in Touch</h1>
          <div className="form__detail">
            <div className="flex">
              <p>First Name</p>
              <input type="text" name="" id="" />
              <p>Email</p>
              <input type="email" />
            </div>
            <p>Subject</p>
            <input type="text" />
            <p>Description</p>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button>Submit</button>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; All Right Reserved by Mahaveer Tent House </p>
      </div>
    </>
  );
}

export default Footer;
