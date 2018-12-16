import React, { PureComponent } from "react";
import Page from "../../components/page";
import style from "./index.module.styl";

const defined = val => {
  return val !== undefined && val !== null && val !== "";
};

class Contact extends PureComponent {
  constructor(props) {
    super(props);
    this.validate = this.validate.bind(this);
    this.contactName = React.createRef();
    this.contactEmail = React.createRef();
    this.contactMessage = React.createRef();
  }

  validate(event) {
    if (
      !defined(this.contactName.current.value) ||
      !defined(this.contactEmail.current.value) ||
      !defined(this.contactMessage.current.value)
    ) {
      alert("Hey send a message or something!");
      event.preventDefault();
    }
  }

  render() {
    return (
      <Page title="Contact">
        <h1>Get in Touch</h1>
        <p>Interested in our work? Or, maybe you just want to say hello? Drop us a line.</p>
        <form
          name="sl-contact-form"
          className={style.form}
          action="https://formspree.io/sporadiclabs@gmail.com"
          onSubmit={this.validate}
          method="POST"
        >
          <div className={style.field}>
            <label className={style.label} htmlFor="contact-name">
              Your Name
            </label>
            <input
              className={style.control}
              ref={this.contactName}
              type="text"
              id="contact-name"
              name="name"
            />
          </div>
          <div className={style.field}>
            <label className={style.label} htmlFor="contact-email">
              Your Email
            </label>
            <input
              className={style.control}
              ref={this.contactEmail}
              type="email"
              id="contact-email"
              name="email"
            />
          </div>
          <div className={style.field}>
            <label className={style.label} htmlFor="contact-message">
              Your Message
            </label>
            <textarea
              className={style.control}
              ref={this.contactMessage}
              name="message"
              rows="4"
              id="contact-message"
            />
          </div>
          <div className={style.field}>
            <input className={style.submitBtn} type="submit" value="Send →" />
          </div>
          <input type="text" name="_gotcha" style={{ display: "none" }} />
          <input type="hidden" name="_subject" value="Sporadic Labs Contact" />
        </form>
      </Page>
    );
  }
}

export default Contact;
