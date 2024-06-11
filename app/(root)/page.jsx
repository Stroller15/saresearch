import React from "react";
import Banner from "../../components/Banner";
import Navbar from '../../components/Navbar';

const Page = () => {
  return (
    <div className="relative h-screen">
      <Banner className="absolute z-50" />
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 brightness-50"
      >
        <source src="/main-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Navbar />
    </div>
  );
};

export default Page;
