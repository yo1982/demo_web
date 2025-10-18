
import React, { useState, useEffect } from 'react';
import type { Service, OrderFormData } from '../types';
import { useAnalytics } from '../hooks/useAnalytics';

interface OrderFormProps {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
}

const OrderForm: React.FC<OrderFormProps> = ({ service, isOpen, onClose }) => {
  const [formData, setFormData] = useState<OrderFormData>({
    serviceId: 0,
    serviceName: '',
    quantity: 1,
    company: '',
    email: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { trackEvent } = useAnalytics();

  useEffect(() => {
    if (service) {
      setFormData({
        serviceId: service.id,
        serviceName: service.title,
        quantity: 1,
        company: '',
        email: '',
      });
      setStatus('idle');
    }
  }, [service]);
  
  if (!isOpen || !service) return null;
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (formData.email && formData.company && formData.quantity > 0) {
      console.log('Order Submitted:', formData);
      setStatus('success');
      trackEvent('purchase', {
        value: service.price * formData.quantity,
        currency: 'USD',
        items: [{
          item_id: `SERVICE_${service.id}`,
          item_name: service.title,
          price: service.price,
          quantity: formData.quantity
        }]
      });
    } else {
      setStatus('error');
    }
    setTimeout(() => {
        setStatus('idle');
        onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 transition-opacity">
      <div className="bg-secondary rounded-lg shadow-xl p-8 max-w-lg w-full m-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-text-main">Order: {service.title}</h2>
          <button onClick={onClose} className="text-text-secondary hover:text-text-main">&times;</button>
        </div>
        
        {status === 'success' ? (
          <div className="text-center py-8">
            <h3 className="text-2xl font-bold text-green-400 mb-2">Order Placed!</h3>
            <p className="text-text-secondary">Thank you. We will be in touch shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-secondary">Your Email</label>
              <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full bg-slate-900 border border-border rounded-md shadow-sm py-2 px-3 text-text-main focus:outline-none focus:ring-primary focus:border-primary" />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-text-secondary">Company Name</label>
              <input type="text" name="company" id="company" required value={formData.company} onChange={handleChange} className="mt-1 block w-full bg-slate-900 border border-border rounded-md shadow-sm py-2 px-3 text-text-main focus:outline-none focus:ring-primary focus:border-primary" />
            </div>
            <div>
              <label htmlFor="quantity" className="block text-sm font-medium text-text-secondary">Quantity</label>
              <input type="number" name="quantity" id="quantity" min="1" required value={formData.quantity} onChange={handleChange} className="mt-1 block w-full bg-slate-900 border border-border rounded-md shadow-sm py-2 px-3 text-text-main focus:outline-none focus:ring-primary focus:border-primary" />
            </div>
            <div className="text-right text-lg font-semibold text-text-main">
              Total: ${(service.price * formData.quantity).toLocaleString()}
            </div>
            <div className="flex justify-end space-x-4 pt-4">
              <button type="button" onClick={onClose} className="py-2 px-4 bg-slate-600 hover:bg-slate-500 text-white rounded-md">Cancel</button>
              <button type="submit" disabled={status === 'loading'} className="py-2 px-4 bg-primary hover:bg-primary-hover text-white rounded-md disabled:opacity-50">
                {status === 'loading' ? 'Placing Order...' : 'Confirm Order'}
              </button>
            </div>
            {status === 'error' && <p className="text-red-400 text-center mt-4">Please fill out all fields correctly.</p>}
          </form>
        )}
      </div>
    </div>
  );
};

export default OrderForm;