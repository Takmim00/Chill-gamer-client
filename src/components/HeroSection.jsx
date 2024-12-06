import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

const HeroSection = () => {
  return (
    <section className=" py-16 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Text Section */}
        <div className="flex-1">
          <Slide>
            <h1 className="text-5xl font-bold leading-tight mb-6">
              SOME COOL & DOPE <br />
              <span className="text-primary">CHARACTERS</span>
            </h1>
          </Slide>
          <Fade delay={1e3} cascade damping={1e-1} >
          <p className="text-lg mb-8">
            Driven by innovation and creativity, we're constantly evolving and
            expanding our platform to bring you the latest and greatest in
            gaming. From exciting new releases to classic favorites.
          </p>
          </Fade>
          <button className="btn btn-primary btn-wide">
            NEXT CAN BE YOU →
          </button>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center mt-10 lg:mt-0">
          <div className="relative">
            <div className="rounded-full bg-green-500 w-72 h-72 absolute -z-10"></div>
            <img
              src="https://i.ibb.co.com/WznpHRS/cta1-1.png"
              alt="Cool Character"
              className="w-72 h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
