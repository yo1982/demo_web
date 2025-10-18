
import React from 'react';
import { NavLink } from 'react-router-dom';
import { LogoIcon } from './icons/LogoIcon';

const Header: React.FC = () => {
  const navLinkClasses = 'px-3 py-2 rounded-md text-sm font-medium text-text-secondary hover:text-text-main hover:bg-secondary';
  const activeNavLinkClasses = 'bg-primary text-white';

  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0 flex items-center gap-2 text-white font-bold text-xl">
              <LogoIcon />
              QuantumLeap
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink 
                to="/" 
                className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}
                end
              >
                Home
              </NavLink>
              <NavLink 
                to="/services" 
                className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}
              >
                Services
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;