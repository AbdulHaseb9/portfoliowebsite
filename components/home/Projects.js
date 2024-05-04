import React from "react";
import SwiperCarousel from "../Swiper";

export default function Projects() {
  return (
    <div id="projects" className="md:h-screen w-full bg-bg_color py-12 padding">
      <h2 className="text-center text-4xl font-semibold text-white tracking-wider">
        My <span className="text-primary_color">Projects</span>
      </h2>
      <div className="w-full flex justify-center relative">
        <SwiperCarousel />
      </div>
    </div>
  );
}
