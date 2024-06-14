import React from 'react';

const Services = () => {
  return (
    <div className="min-h-screen bg-[url('/bg-building.jpeg')] bg-cover bg-no-repeat text-white">
      <div className="max-w-4xl sm:p-8 sm:ml-10 p-3">
        <div className="service mb-8">
          <h1 className='sm:text-4xl text-2xl font-bold sm:tracking-widest mb-5 text-black'>Our Services</h1>
          <h2 className="text-xl font-bold sm:tracking-widest text-black">1 - Business Strategy Consultant</h2>
          <ul className="ml-4 font-semibold sm:tracking-widest text-black">
            <li>a. Acquisition Advisory</li>
            <li>b. Capex Advisory</li>
            <li>c. Growth Advisory</li>
            <li>d. Entry Strategy</li>
          </ul>
        </div>
        <div className="service mb-8 sm:tracking-widest text-black">
          <h2 className="text-xl sm:tracking-widest font-bold text-black">2 - Industry Research</h2>
          <ul className="ml-4 font-semibold sm:tracking-widest text-black">
            <li>a. Market Assessment</li>
            <li>b. Company Profiling</li>
            <li>c. International Benchmarking</li>
            <li>d. Economic Research</li>
            <li>e. Policy And Regulatory Research</li>
          </ul>
        </div>
        <div className="service mb-8 text-black">
          <h2 className="text-xl sm:tracking-widest font-bold text-black">3 - Investment Research</h2>
          <ul className="ml-4 font-semibold sm:tracking-widest text-black">
            <li>a. Financial Modelling</li>
            <li>b. Pitch Deck Creation</li>
            <li>c. Transaction Analysis</li>
          </ul>
        </div>
        <div className="service">
          <h2 className="text-xl sm:tracking-widest text-black font-bold">4 - Business Valuation</h2>
        </div>
      </div>
    </div>
  );
};

export default Services;
