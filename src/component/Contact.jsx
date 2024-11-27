import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';

function Contact() {
  const form = useRef();

  // react-hook-form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendEmail = (data, e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_07g34e5', // Replace with your EmailJS Service ID
        'template_ee9f52w', // Replace with your EmailJS Template ID
        form.current,
        'jhz2ehXDeFkAB5gkP' // Replace with your Public Key
      )
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div
      name="Contact"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <span>Please fill out the form below to contact me</span>
      <div className="flex flex-col items-center justify-center mt-5">
        <form
          ref={form}
          onSubmit={handleSubmit(sendEmail)}
          className="bg-slate-200 w-96 px-8 py-6 rounded-xl"
        >
          <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>

          {/* Full Name Field */}
          <div className="flex flex-col mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input
              {...register('name', { required: true })}
              className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
            />
            {errors.name && <span className="text-red-500">This field is required</span>}
          </div>

          {/* Email Field */}
          <div className="flex flex-col mb-4">
            <label className="block text-gray-700">Email Address</label>
            <input
              {...register('email', { required: true })}
              className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
            />
            {errors.email && <span className="text-red-500">This field is required</span>}
          </div>

          {/* Message Field */}
          <div className="flex flex-col mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              {...register('message', { required: true })}
              className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              name="message"
              placeholder="Enter your query"
            />
            {errors.message && <span className="text-red-500">This field is required</span>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
