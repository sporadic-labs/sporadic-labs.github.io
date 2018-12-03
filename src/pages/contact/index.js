import React from "react";
import PageLayout from "../../components/page-layout";
import style from "./index.module.styl";

export default () => (
  <PageLayout title="Contact">
    <h1>Get in Touch</h1>
    <p>Interested in our work? Or, maybe you just want to say hello? Drop us a line.</p>
    <form className={style.form} action="https://formspree.io/sporadiclabs@gmail.com" method="POST">
      <div className={style.field}>
        <label className={style.label} htmlFor="contact-name">
          Your Name
        </label>
        <input className={style.control} type="text" id="contact-name" name="name" />
      </div>
      <div className={style.field}>
        <label className={style.label} htmlFor="contact-email">
          Your Email
        </label>
        <input className={style.control} type="email" id="contact-email" name="email" />
      </div>
      <div className={style.field}>
        <label className={style.label} htmlFor="contact-message">
          Your Message
        </label>
        <textarea className={style.control} name="message" rows="4" id="contact-message" />
      </div>
      <div className={style.field}>
        <input type="submit" value="Send →" />
      </div>
      <input type="text" name="_gotcha" style={{ display: "none" }} />
      <input type="hidden" name="_subject" value="Sporadic Labs Contact" />
    </form>
  </PageLayout>
);
