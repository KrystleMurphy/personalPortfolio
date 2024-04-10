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
        <label htmlFor="email" className="col-12 col-md-3">
          Email Address:
        </label>
        <div className="col-12 col-md-9">
          <input
            id="email"
            type="email" 
            name="email"
            placeholder='MyEmail@example.com'
            className='rounded w-100' // Adjusted the input width
            style={{border: "1px solid var(--custom-blue)"}}
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
        </div>
      </div>

      <div className="row p-3">
        <label htmlFor="message" className="col-12 col-md-3">
          Message:
        </label>
        <div className="col-12 col-md-9">
          <textarea
            id="message"
            name="message"
            placeholder='Hi there...'
            className='rounded w-100' // Adjusted the textarea width
            style={{border: "1px solid var(--custom-blue)"}}
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
        </div>
      </div>
      
      <div className="row p-3 justify-content-center">
        <button className="btn btn-primary rounded" type="submit" disabled={state.submitting}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default ContactForm;

