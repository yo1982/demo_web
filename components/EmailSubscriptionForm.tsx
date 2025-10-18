
import React, { useState } from 'react';
import { useAnalytics } from '../hooks/useAnalytics';

const EmailSubscriptionForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { trackEvent } = useAnalytics();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (email.includes('@')) {
      setStatus('success');
      trackEvent('subscribe', { method: 'footer_form' });
      setEmail('');
    } else {
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your.email@example.com"
        required
        className="flex-grow bg-slate-900 border border-border rounded-md px-3 py-2 text-text-main focus:ring-primary focus:border-primary transition"
        disabled={status === 'loading'}
      />
      <button 
        type="submit" 
        className="bg-primary hover:bg-primary-hover text-white font-bold py-2 px-4 rounded-md transition duration-300 disabled:opacity-50"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
      </button>
      {status === 'success' && <p className="text-green-400 text-sm mt-2">Thank you for subscribing!</p>}
      {status === 'error' && <p className="text-red-400 text-sm mt-2">Please enter a valid email.</p>}
    </form>
  );
};

export default EmailSubscriptionForm;