
import React, { useState } from 'react';
import { useAnalytics } from '../hooks/useAnalytics';
import type { ContactFormData } from '../types';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { trackEvent } = useAnalytics();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (formData.name && formData.email && formData.message) {
      console.log('Form Submitted:', formData);
      setStatus('success');
      trackEvent('generate_lead', { form_type: 'contact' });
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text-secondary">Full Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full bg-slate-900 border border-border rounded-md shadow-sm py-2 px-3 text-text-main focus:outline-none focus:ring-primary focus:border-primary"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text-secondary">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full bg-slate-900 border border-border rounded-md shadow-sm py-2 px-3 text-text-main focus:outline-none focus:ring-primary focus:border-primary"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-secondary">Message</label>
        <textarea
          name="message"
          id="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          className="mt-1 block w-full bg-slate-900 border border-border rounded-md shadow-sm py-2 px-3 text-text-main focus:outline-none focus:ring-primary focus:border-primary"
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:bg-slate-600"
        >
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </button>
      </div>
      {status === 'success' && <p className="text-green-400 text-center">Your message has been sent successfully!</p>}
      {status === 'error' && <p className="text-red-400 text-center">Something went wrong. Please try again.</p>}
    </form>
  );
};

export default ContactForm;