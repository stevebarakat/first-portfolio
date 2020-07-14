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
  const [formdata, setFormdata] = React.useState({})

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...formdata,
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
                <div className="mi-form-field">
                  <label htmlFor="contact-form-name">Enter your name*</label>
                  <input onChange={handleChange} type="text" name="name" id="contact-form-name" value={formdata.name} />
                </div>
                <div className="mi-form-field">
                  <label htmlFor="contact-form-email">Enter your email*</label>
                  <input onChange={handleChange} type="text" name="email" id="contact-form-email" value={formdata.email} />
                </div>
                <div className="mi-form-field">
                  <label htmlFor="contact-form-subject">Enter your subject*</label>
                  <input onChange={handleChange} type="text" name="subject" id="contact-form-subject" value={formdata.subject} />
                </div>
                <div className="mi-form-field">
                  <label htmlFor="contact-form-message">Enter your Message*</label>
                  <textarea onChange={handleChange} name="message" id="contact-form-message" cols="30" rows="6" value={formdata.message}></textarea>
                </div>
                <div className="mi-form-field">
                  <button className="mi-button" type="submit">Send Mail</button>
                </div>
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
