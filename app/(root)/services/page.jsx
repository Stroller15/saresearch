import React from 'react';

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
      <div className="max-w-4xl mx-auto p-4">
        <div className="service mb-8">
          <h1 className='text-2xl font-semibold mb-5'>Our Services</h1>
          <h2 className="text-xl font-semibold">1 - Business Strategy Consultant</h2>
          <ul className="ml-4">
            <li>a. Acquisition Advisory</li>
            <li>b. Capex advisory</li>
            <li>c. Growth Advisory</li>
            <li>d. Entry strategy</li>
          </ul>
        </div>
        <div className="service mb-8">
          <h2 className="text-xl font-semibold">2 - Industry Research</h2>
          <ul className="ml-4">
            <li>a. Market Assessment</li>
            <li>b. Company profiling</li>
            <li>c. International benchmarking</li>
            <li>d. Economic research</li>
            <li>e. Policy and Regulatory Research</li>
          </ul>
        </div>
        <div className="service mb-8">
          <h2 className="text-xl font-semibold">3 - Investment Research</h2>
          <ul className="ml-4">
            <li>a. Financial modelling</li>
            <li>b. Pitch Deck creation</li>
            <li>c. Transaction Analysis</li>
          </ul>
        </div>
        <div className="service">
          <h2 className="text-xl font-semibold">4 - Business Valuation</h2>
        </div>
      </div>
    </div>
  );
};

export default Services;
