import React, { useState } from 'react';
import { FaLeaf, FaComments, FaEnvelope } from 'react-icons/fa';

const About = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-green-50 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-6">About Us</h1>
      <div className="flex items-center justify-center mb-4">
        <FaLeaf className="text-green-600 text-5xl mr-2" />
        <p className="text-lg text-gray-700 text-center">
          We are dedicated to providing accurate and reliable information about various plant species and their diseases. Our recognition system leverages advanced technology to help you identify plant issues quickly and effectively. Whether you're a gardener, a botanist, or just a plant enthusiast, we are here to assist you in nurturing your green companions.
        </p>
      </div>

      <h2 className="text-3xl font-semibold mt-8 mb-4 text-green-600 text-center">What Our Users Say</h2>
      <div className="space-y-4">
        <div className="p-4 border rounded-lg shadow-md bg-white">
          <p className="font-semibold">Alice Johnson</p>
          <p className="text-gray-600">"This service has been a game-changer for my garden! I can now identify plant diseases with ease."</p>
        </div>
        <div className="p-4 border rounded-lg shadow-md bg-white">
          <p className="font-semibold">Mark Smith</p>
          <p className="text-gray-600">"I love how user-friendly the app is. It helped me save my dying plants!"</p>
        </div>
        <div className="p-4 border rounded-lg shadow-md bg-white">
          <p className="font-semibold">Sarah Lee</p>
          <p className="text-gray-600">"The information provided is accurate and very helpful. Highly recommend!"</p>
        </div>
        <div className="p-4 border rounded-lg shadow-md bg-white">
          <p className="font-semibold">John Doe</p>
          <p className="text-gray-600">"Fantastic tool for any plant lover. I learned so much about my plants!"</p>
        </div>
      </div>

      <h2 className="text-3xl font-semibold mt-8 mb-4 text-green-600 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            rows="4"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition duration-200 flex items-center justify-center"
        >
          <FaEnvelope className="mr-2" />
          Send Message
        </button>
      </form>
    </div>
  );
};

export default About;