import React, { useState } from "react";
import { navigate } from 'gatsby-link';
import * as Icon from "react-feather";
import Sectiontitle from "../components/Sectiontitle";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

function Contact() {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  return (
    <div className="mi-contact-area mi-section mi-padding-top mi-padding-bottom">
      <div className="container">
        <Sectiontitle title="Contact Me" />
        <div className="row">
          <div className="col-lg-6">
            <div className="mi-contact-formwrapper">
              <h4>Get In Touch</h4>
              <form
                name="contact"
                method="post"
                action="/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don’t fill this out: <input name="bot-field" onChange={handleChange} />
                  </label>
                </p>
                <p>
                  <label>
                    Your name:
            <br />
                    <input type="text" name="name" onChange={handleChange} />
                  </label>
                </p>
                <p>
                  <label>
                    Your email:
            <br />
                    <input type="email" name="email" onChange={handleChange} />
                  </label>
                </p>
                <p>
                  <label>
                    Message:
            <br />
                    <textarea name="message" onChange={handleChange} />
                  </label>
                </p>
                <p>
                  <button type="submit">Send</button>
                </p>
              </form>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mi-contact-info">
              <div className="mi-contact-infoblock">
                <span className="mi-contact-infoblock-icon">
                  <Icon.Phone />
                </span>
                <div className="mi-contact-infoblock-content">
                  <h6>Phone</h6>
                  <p><a href="tel:+9048684685">(904) 868-4685</a></p>
                </div>
              </div>
              <div className="mi-contact-infoblock">
                <span className="mi-contact-infoblock-icon">
                  <Icon.MapPin />
                </span>
                <div className="mi-contact-infoblock-content">
                  <h6>Address</h6>
                  <p>
                    3862 Valencia Rd.<br />
                        Jacksonville, FL 32205
                      </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
