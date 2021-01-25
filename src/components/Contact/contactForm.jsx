import React from "react";
import ButtonWithLoader from "./loadingButton";
import "./styles.css";

const ContactForm = ({ handleChange, handleSubmit, data, loading }) => {
  const { name, email, message } = data;

  return (
    <div id="contact-form">
      <form autoComplete="off" onSubmit={() => false}>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            required
            name="name"
            placeholder="Your name"
            value={name || ""}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            required
            name="email"
            placeholder="Your email address"
            value={email || ""}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="name">Message</label>
          <textarea
            name="message"
            required
            id="message"
            placeholder="Hi Spencer, How's it going?"
            value={message || ""}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <ButtonWithLoader
          type="submit"
          text="Submit"
          onClick={handleSubmit}
          loading={loading}
        />
      </form>
    </div>
  );
};

export default ContactForm;
