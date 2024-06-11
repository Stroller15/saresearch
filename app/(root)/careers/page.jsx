import React from 'react';

const Careers = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">Join Our Team</h1>
        <p className="text-lg mb-4">If you are interested in working with us, please send your resume to:</p>
        <a href="mailto:jack@gmail.com" className="text-blue-500 hover:underline">info@saresearch.in</a>
      </div>
    </div>
  );
};

export default Careers;
