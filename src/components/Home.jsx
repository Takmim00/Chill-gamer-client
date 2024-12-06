import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import HighestRatedGame from "./HighestRatedGame";
import HeroSection from "./HeroSection";
import GamingSection from "./GamingSection";


const Home = () => {
  const review = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <HighestRatedGame review={review}></HighestRatedGame>
      <HeroSection></HeroSection>
      <GamingSection></GamingSection>
    </div>
  );
};

export default Home;
