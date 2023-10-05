import React from "react";
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import { men_kurata } from "../../../data/men_kurata";

function Homepage() {
  return (
    <div>
      <MainCarousel />

      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel data={men_kurata} sectionName={"Men Kurata"} />
        <HomeSectionCarousel data={men_kurata} sectionName={"Men Shoes"} />
        <HomeSectionCarousel data={men_kurata} sectionName={"Men Things"} />
      </div>
    </div>
  );
}

export default Homepage;
