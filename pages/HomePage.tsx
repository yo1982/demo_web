
import React from 'react';
import { Link } from 'react-router-dom';
import { ChartBarIcon } from '../components/icons/ChartBarIcon';
import { CodeBracketIcon } from '../components/icons/CodeBracketIcon';
import { CloudArrowUpIcon } from '../components/icons/CloudArrowUpIcon';


const HomePage: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-text-main mb-4">
          Innovate. Integrate. <span className="text-primary">Inspire.</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-text-secondary mb-8">
          QuantumLeap provides next-generation business solutions, leveraging technology to solve complex problems and drive growth.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/services" className="bg-primary hover:bg-primary-hover text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            Our Services
          </Link>
          <Link to="/contact" className="bg-secondary hover:bg-slate-700 text-text-main font-bold py-3 px-6 rounded-lg transition duration-300">
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-secondary p-8 rounded-lg text-center border border-border">
            <div className="flex justify-center mb-4"><CodeBracketIcon /></div>
            <h3 className="text-2xl font-bold text-text-main mb-2">Custom Software</h3>
            <p className="text-text-secondary">
              Tailored software solutions that fit your unique business needs, built with modern, scalable technologies.
            </p>
          </div>
          <div className="bg-secondary p-8 rounded-lg text-center border border-border">
            <div className="flex justify-center mb-4"><CloudArrowUpIcon /></div>
            <h3 className="text-2xl font-bold text-text-main mb-2">Cloud Integration</h3>
            <p className="text-text-secondary">
              Seamlessly migrate and manage your infrastructure on the cloud for enhanced security, scalability, and efficiency.
            </p>
          </div>
          <div className="bg-secondary p-8 rounded-lg text-center border border-border">
            <div className="flex justify-center mb-4"><ChartBarIcon /></div>
            <h3 className="text-2xl font-bold text-text-main mb-2">Data Analytics</h3>
            <p className="text-text-secondary">
              Unlock the power of your data with our advanced analytics services to make informed, data-driven decisions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;