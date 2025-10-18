
import React from 'react';
import ContactForm from '../components/ContactForm';
import { PhoneIcon } from '../components/icons/PhoneIcon';
import { EnvelopeIcon } from '../components/icons/EnvelopeIcon';
import { MapPinIcon } from '../components/icons/MapPinIcon';


const ContactPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-text-main">Contact Us</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-text-secondary">
          Have a question or a project in mind? We'd love to hear from you.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-secondary p-8 rounded-lg border border-border">
        {/* Contact Info */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-text-main">Get in Touch Directly</h2>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 pt-1"><MapPinIcon/></div>
            <div>
              <h3 className="text-lg font-semibold text-text-main">Our Office</h3>
              <p className="text-text-secondary">123 Innovation Drive, Tech City, 12345</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 pt-1"><EnvelopeIcon/></div>
            <div>
              <h3 className="text-lg font-semibold text-text-main">Email Us</h3>
              <p className="text-text-secondary hover:text-primary cursor-pointer">contact@quantumleap.dev</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 pt-1"><PhoneIcon/></div>
            <div>
              <h3 className="text-lg font-semibold text-text-main">Call Us</h3>
              <p className="text-text-secondary hover:text-primary cursor-pointer">(555) 123-4567</p>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold text-text-main mb-4">Send a Message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;