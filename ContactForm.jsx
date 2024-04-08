import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mvoeqbbg");
  if (state.succeeded) {
      return <p>Thanks for reaching out! I will be in contact soon</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
        <div className="row p-3">
      <label htmlFor="email">
        Email Address:
      </label>

      <input
        id="email"
        type="email" 
        name="email"
        placeholder='MyEmail@example.com'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      /></div>

      <div className="row p-3">
        Message:
      <textarea
        id="message"
        name="message"
        placeholder='Hi there...'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      /></div>
      <div className="row  p-3 justify-content-center" >
      <button className="btn col-3 rounded" style={{ backgroundColor: "var(--custom-blue)" }} type="submit" disabled={state.submitting}>
        Submit
      </button></div>
    </form>
  );
}

export default ContactForm