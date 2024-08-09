import React from 'react';
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

const ContactMe = () => {
  return (
    <div className="contact-container bg-gray-900 text-white p-8 mx-auto">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <form className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg font-semibold mb-2">Name</label>
          <Input id="name" type="text" placeholder="Your Name" className="bg-gray-800" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-lg font-semibold mb-2">Email</label>
          <Input id="email" type="email" placeholder="Your Email" className="bg-gray-800" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone" className="text-lg font-semibold mb-2">Phone Number</label>
          <Input id="phone" type="tel" placeholder="Your Phone Number" className="bg-gray-800" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="text-lg font-semibold mb-2">Message</label>
          <Textarea id="message" placeholder="Type your message here." className="bg-gray-800" />
        </div>
        <button 
          type="submit" 
          className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactMe;
