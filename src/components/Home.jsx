import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import CoreSection from "./CoreSection";
import GamingSection from "./GamingSection";
import HeroSection from "./HeroSection";
import HighestRatedGame from "./HighestRatedGame";

const Home = () => {
  const review = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <div className="w-11/12 mx-auto">
        <HighestRatedGame review={review}></HighestRatedGame>
        <HeroSection></HeroSection>
      </div>
      <CoreSection />
      <div className="w-11/12 mx-auto">
        <GamingSection></GamingSection>
      </div>
    </div>
  );
};

export default Home;
