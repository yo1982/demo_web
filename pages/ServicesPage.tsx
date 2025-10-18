
import React, { useState } from 'react';
import type { Service } from '../types';
import OrderForm from '../components/OrderForm';

const servicesData: Service[] = [
  { id: 1, title: 'Enterprise Software Suite', description: 'A complete suite of tools for managing your business operations, from HR to finance.', price: 5000, imageUrl: 'https://picsum.photos/seed/enterprise/600/400' },
  { id: 2, title: 'Cloud Migration & DevOps', description: 'Expert assistance in moving your applications to the cloud and implementing DevOps practices.', price: 8000, imageUrl: 'https://picsum.photos/seed/cloud/600/400' },
  { id: 3, title: 'AI-Powered Analytics', description: 'Leverage machine learning to gain deep insights from your business data.', price: 12000, imageUrl: 'https://picsum.photos/seed/ai/600/400' },
  { id: 4, title: 'Mobile App Development', description: 'Custom iOS and Android applications to engage your customers on the go.', price: 15000, imageUrl: 'https://picsum.photos/seed/mobile/600/400' },
  { id: 5, title: 'Cybersecurity Assessment', description: 'A thorough audit of your digital infrastructure to identify and mitigate security risks.', price: 7500, imageUrl: 'https://picsum.photos/seed/security/600/400' },
  { id: 6, title: 'E-commerce Platform', description: 'A robust and scalable online store solution tailored to your brand.', price: 10000, imageUrl: 'https://picsum.photos/seed/ecommerce/600/400' },
];

const ServicesPage: React.FC = () => {
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleOrderClick = (service: Service) => {
    setSelectedService(service);
    setIsOrderFormOpen(true);
  };

  const handleCloseOrderForm = () => {
    setIsOrderFormOpen(false);
    setSelectedService(null);
  };

  return (
    <>
      <div className="space-y-12">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-text-main">Our Services</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-text-secondary">
            We offer a range of expert services to help your business thrive in the digital age.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div key={service.id} className="bg-secondary rounded-lg shadow-lg overflow-hidden flex flex-col border border-border">
              <img src={service.imageUrl} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-text-main">{service.title}</h3>
                <p className="mt-2 text-text-secondary flex-grow">{service.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">${service.price.toLocaleString()}</span>
                  <button 
                    onClick={() => handleOrderClick(service)}
                    className="bg-primary hover:bg-primary-hover text-white font-semibold py-2 px-4 rounded-md transition duration-300"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <OrderForm 
        service={selectedService} 
        isOpen={isOrderFormOpen} 
        onClose={handleCloseOrderForm} 
      />
    </>
  );
};

export default ServicesPage;