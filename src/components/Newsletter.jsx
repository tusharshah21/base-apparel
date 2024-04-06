import React, { useState } from 'react';
import { schema } from 'zod';
import { z } from 'zod';
import arrow from "../assets/icon-arrow.svg"
const NewsletterForm = () => {
  const [emailValue, setEmailValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const emailSchema = z.string().email();

  const handleChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      emailSchema.parse(emailValue);
      // Email is valid
      console.log('Email submitted:', emailValue);
      // Clear the email input field after submission
      setEmailValue('');
      // Clear any previous error messages
      setErrorMessage('');
    } catch (error) {
      // Invalid email
      setErrorMessage('Please provide a valid email.');
    }
  };

  return (
    <div className='lg:pr-12 2xl:pr-24 px-6 lg:px-0'>
      {/* <h2 className="text-xl font-bold mb-4">Subscribe to our Newsletter</h2> */}
      
      <form onSubmit={handleSubmit} className='flex flex-col'>
  <div className='relative flex'>
    <input
      type="email"
      value={emailValue}
      onChange={handleChange}
      placeholder="Email Address"
      className="placeholder-[hsl(0,36%,70%)] josefin-sans-regular w-full p-4 px-8 border bg-transparent border-[hsl(0,36%,70%)] rounded-full focus:outline-none"
    />
    <button type="submit" className="z-2 -ml-20 shadow-xl w-1/4 bg-gradient-to-r from-[hsl(0,80%,86%)] to-[hsl(0,74%,74%)] text-white rounded-full">
      <img src={arrow} alt="Arrow" className="w-3 inline-block" />
    </button>
  </div>
  {errorMessage && <p className="text-red-500 josefin-sans-regular text-sm mt-2 pl-8 self-start">{errorMessage}</p>}
</form>

    </div>
  );
};

export default NewsletterForm;
