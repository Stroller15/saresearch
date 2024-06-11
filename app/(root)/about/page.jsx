import React from 'react';

const AboutUs = () => {
  return (
    <div className="flex min-h-screen bg-[url('/bg-building.jpeg')] bg-cover bg-no-repeat p-6">
      <div className="text-left max-w-3xl">
        <h1 className="text-6xl font-bold mb-4 text-black">About Us</h1>
        <p className="sm:text-2xl text-black sm:font-bold sm:leading-loose leading-8 font-semibold">
          S&A Research is your trusted partner in achieving your business goals and visions. Established with a commitment to excellence and a passion for helping businesses thrive, we specialize in providing comprehensive business consulting services to a diverse clientele, including startups, MSMEs, corporates, and MNCs.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
