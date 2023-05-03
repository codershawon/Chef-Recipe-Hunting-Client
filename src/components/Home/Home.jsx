import React from "react";
import Banner from "../Banner/Banner";
import Chefs from "../chefs/chefs";
import ImproveSkills from "../ImproveSkills/ImproveSkills";
import Gallery from "../Gallery/Gallery";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Chefs></Chefs>
      <ImproveSkills></ImproveSkills>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;
