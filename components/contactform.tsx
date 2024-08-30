"use client"; 

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [messageSent, setMessageSent] = useState(false);

  const templateParams = {
    from_firstName: formData.firstName,
    from_lastName: formData.lastName,
    subject: formData.subject,
    message: formData.message,
    from_email: formData.email
  };

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    emailjs
      .send('service_bpvxg39', 'template_a34wjms', templateParams, '1k7eFjqIoQZ8tUkaJ')
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setMessageSent(true);

          // Envoie un email de confirmation à l'utilisateur
          emailjs.send('service_bpvxg39', 'template_confirmation', {
            to_email: formData.email,
            to_name: `${formData.firstName} ${formData.lastName}`
          }, '1k7eFjqIoQZ8tUkaJ');

          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            subject: '',
            message: ''
          });

          // Cache le message après un certain temps (optionnel)
          setTimeout(() => {
            setMessageSent(false);
          }, 5000); // Cache le message après 5 secondes
        },
        (err) => {
          console.log('FAILED...', err);
        },
      );
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-6 bg-gray-100 min-h-screen">
      <div className="w-full md:w-1/2 p-4">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
              Nom
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Nom"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder=" email address"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Votre message"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              SOUMETTRE
            </button>
          </div>
        </form>
        {messageSent && (
          <div className="mt-4 text-green-500 font-bold">
            Votre email a été envoyé avec succès !
          </div>
        )}
      </div>
      <div className="w-full md:w-1/2 p-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.971192789055!2d-74.0060154!3d40.7127752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDBswqA0MSczNy4xIk4gNzTCsDAwJzE3LjQiVw!5e0!3m2!1sen!2sus!4v1604099470627!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactForm;
