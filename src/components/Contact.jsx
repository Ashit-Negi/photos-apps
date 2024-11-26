import React from 'react'

import { useState } from "react";

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        setHasError(false);
        form.reset();
      } else {
        setIsSubmitted(false);
        setHasError(true);
      }
    } catch (error) {
      setIsSubmitted(false);
      setHasError(true);
    }
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>

        <div className="max-w-lg mx-auto">
          {/* Contact Form */}
          <form
            action="https://formspree.io/f/mldewrvr" // Replace with your Formspree endpoint
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-6 mb-8"
          >
            <div>
              <label htmlFor="name" className="block text-lg font-semibold">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-semibold">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-semibold">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-yellow-500 text-white rounded-lg text-lg hover:bg-yellow-600 transition duration-300 ease-in-out"
              >
                Send Message
              </button>
            </div>
          </form>

          {isSubmitted && (
            <div className="text-center text-lg font-semibold text-green-500">
              Thank you for reaching out! I’ll get back to you soon.
            </div>
          )}

          {hasError && (
            <div className="text-center text-lg font-semibold text-red-500">
              Something went wrong. Please try again later.
            </div>
          )}
        </div>

        {/* Contact Info */}
        <div className="text-center mt-8">
          <p className="text-lg font-semibold text-gray-700 mb-4">Or reach out to me via:</p>
          <ul className="space-y-4">
            <li>
              <a href="tel:+1234567890" className="text-lg text-blue-500 hover:text-yellow-500">📞 +91 8077040296</a>
            </li>
            <li>
              <a href="mailto:your-email@example.com" className="text-lg text-blue-500 hover:text-yellow-500">✉️ ashitnegi7@gmail.com</a>
            </li>
            <li>
              <a href="https://www.facebook.com/yourfacebookid" target="_blank" rel="noopener noreferrer" className="text-lg text-blue-500 hover:text-yellow-500">🌐 Facebook: @yourfacebookid</a>
            </li>
            <li>
              <a href="https://www.instagram.com/yourinstagramid" target="_blank" rel="noopener noreferrer" className="text-lg text-blue-500 hover:text-yellow-500">📸 Instagram: @yourinstagramid</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;


