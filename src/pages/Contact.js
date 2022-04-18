import React from "react";
import "./Contact.css";

import { ImLocation2 } from "react-icons/im";
import { FiPhoneCall } from "react-icons/fi";
import { AiTwotoneMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <div className="container">
        <div className="contact-content">
          <h2>Contact Us</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            quam, porro, delectus repellat officiis consectetur blanditiis,
            voluptas expedita cupiditate voluptatibus aut maxime accusantium
            iusto laboriosam animi explicabo eius. Quisquam repellendus culpa ut
            dolorem cumque praesentium, at rerum iusto voluptatum impedit
            similique molestiae modi dolorum porro alias, distinctio blanditiis
            necessitatibus ad eos architecto, quibusdam debitis assumenda
            numquam. Molestiae ipsam impedit temporibus!
          </p>
        </div>
        <div className="contact-image">
          <img src="/images/call-us.jpg" alt="contact us" />
        </div>
      </div>
      <div className="address-section">
        <h2>Contact & Address</h2>
        <p className="address-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
          saepe impedit ad, architecto numquam rem adipisci <br /> eum mollitia
          incidunt. Vel deleniti delectus possimus.
        </p>
        <div className="address">
          <div className="address-image">
            <img src="/images/globe-rb.png" alt="address" />
          </div>
          <div className="address-content">
            <p>
              <ImLocation2 />
              123, Main Street, New York, USA
            </p>
            <p>
              <FiPhoneCall />+ 254 748923894
            </p>
            <p>
              <AiTwotoneMail />
              contact@linkedtech.com
            </p>
          </div>
        </div>
      </div>
      <div className="form">
        <h3>
          Get In Touch <span>With Us</span>
        </h3>
        <form action="">
          <div className="form-content">
            <input type="text" placeholder="name" />
            <input type="email" placeholder="email" />
            <input type="text" placeholder="subject" />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="message"
            ></textarea>
            <input type="submit" value="Send Message" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
