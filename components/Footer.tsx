
import React from 'react';
import EmailSubscriptionForm from './EmailSubscriptionForm';
import { GithubIcon } from './icons/GithubIcon';
import { TwitterIcon } from './icons/TwitterIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';


const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-text-main mb-4">QuantumLeap Solutions</h3>
            <p className="text-text-secondary">Innovating the future, one solution at a time. We provide cutting-edge services to propel your business forward.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-text-main mb-4">Stay Connected</h3>
            <EmailSubscriptionForm />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-text-main mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-text-secondary hover:text-primary"><TwitterIcon /></a>
              <a href="#" className="text-text-secondary hover:text-primary"><GithubIcon /></a>
              <a href="#" className="text-text-secondary hover:text-primary"><LinkedinIcon /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-text-secondary text-sm">
          <p>&copy; {new Date().getFullYear()} QuantumLeap Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;