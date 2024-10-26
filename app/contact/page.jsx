"use client"
import { useState } from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceID = 'service_33mogec';
    const templateID = 'template_rnodjb8';
    const userID = '8sWyNiBXFaYltx2M4'; // This comes from your EmailJS dashboard

    try {
      await emailjs.send(serviceID, templateID, formData, userID);
toast.success("Message sent successfully!")
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch (error) {
      console.error("Failed to send message:", error);
      toast.error("Failed to send message, please try again.");
    }
  };

  return (
  <>
  <Toaster/>
      <div className=" p-8 flex flex-col items-center justify-center min-h-screen ">
      <div className="backdrop-blur-3xl rounded-lg p-8 shadow-xl max-w-4xl w-full">
        <h2 className="text-white text-3xl font-bold text-center mb-8">Contact Me</h2>
        <div className="flex flex-col md:flex-row justify-between">
          {/* Contact Form */}
          <div className="w-full md:w-1/2 p-4">
            <h3 className="text-lg font-semibold text-white mb-4">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-400 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-400 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-400 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <button
                type="submit"
                className="w-full py-3 bg-green-600  text-white font-semibold rounded-md hover:bg-green-800"
              >
                Send Message
              </button>
            </form>
          </div>
          {/* Contact Information */}
          <div className="w-full md:w-1/2 p-4 text-white">
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <p className="flex items-center space-x-2">
              <span role="img" aria-label="phone">📞</span>
              <span>+91 7876630370</span>
            </p>
            <p className="flex items-center space-x-2">
              <span role="img" aria-label="email">✉️</span>
              <span>rittikchauhan8112002@gmail.com</span>
            </p>
            <p className="flex items-center space-x-2">
              <span role="img" aria-label="location">📍</span>
              <span>Sirmaur, Himachal Pradesh, India</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}
