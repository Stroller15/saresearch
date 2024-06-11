import React from 'react';

const AboutUs = () => {
  const pdfs = [
    {
      title: 'India Readymade Garment(Apparel) Industry',
      description: 'Learn about effective strategies to grow your business.',
      url: '/pdfs/india-rmg-industry.pdf',
    },
    {
      title: 'India Semiconductor Industry',
      description: 'A comprehensive market analysis report for 2023.',
      url: '/pdfs/india-semiconductor-industry.pdf',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[url('/bg-building.jpeg')] bg-cover bg-no-repeat p-6">
      <div className="text-left max-w-3xl mb-8">
        <h1 className="text-6xl font-bold mb-4 text-black">Research Paper</h1>
        <p className="text-2xl text-black leading-relaxed">
          S&A Research is your trusted partner in achieving your business goals and visions. Established with a commitment to excellence and a passion for helping businesses thrive, we specialize in providing comprehensive business consulting services to a diverse clientele, including startups, MSMEs, corporates, and MNCs.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pdfs.map((pdf, index) => (
          <div key={index} className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-2">{pdf.title}</h2>
            <p className="text-gray-700 mb-4">{pdf.description}</p>
            <a
              href={pdf.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Read PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
