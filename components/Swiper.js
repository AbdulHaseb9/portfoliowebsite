"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "@/app/globals.css";
// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";

// Import Images
import greenmind from "/public/projects/greenmind.png";
import logoipsum from "/public/projects/logoipsum.png";
import abrothers from "/public/projects/abrothers.png";

export default function SwiperCarousel() {
  const projectsdata = [
    {
      title: "ABrothers E-com",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, debitis eaque veniam voluptatum nostrum ipsa facilis maxime rem laboriosam quaerat mollitia blanditiis libero deleniti ut ex quo, vero reprehenderit at!",
      image: abrothers,
      githuburl: "#",
      liveurl: "#",
    },
    {
      title: "Green Mind",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, debitis eaque veniam voluptatum nostrum ipsa facilis maxime rem laboriosam quaerat mollitia blanditiis libero deleniti ut ex quo, vero reprehenderit at!",
      image: greenmind,
      githuburl: "#",
      liveurl: "#",
    },
    {
      title: "Logo Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, debitis eaque veniam voluptatum nostrum ipsa facilis maxime rem laboriosam quaerat mollitia blanditiis libero deleniti ut ex quo, vero reprehenderit at!",
      image: logoipsum,
      githuburl: "#",
      liveurl: "#",
    },
  ];
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="w-full h-full my-9"
      >
        {projectsdata.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
              className="py-8 flex gap-x-5 gap-y-14 flex-col md:flex-row md:h-96 large:h-[440px] overflow-hidden"
            >
              <div className="h-72 md:h-full w-full md:w-1/2 lg:p-10">
                <Image
                  src={item.image}
                  className="w-full h-full object-cover object-top"
                  alt={item.title}
                />
              </div>
              <div className="w-full md:w-1/2 lg:p-10">
                <h3 className="text-primary_color text-2xl font-semibold tracking-wider">
                  {item.title}
                </h3>
                <p className="text-lg my-5 text-text_secondary_color text-justify">
                  {item.description}
                </p>
                <div className="space-x-6 my-9">
                  <a
                    href={item.liveurl}
                    className="text-white font-semibold tracking-wider px-4 py-3 md:px-6 md:py-3 border border-primary_color rounded-full cursor-pointer hover:bg-primary_color"
                  >
                    Live Demo
                  </a>
                  <a
                    href={item.githuburl}
                    className="text-white font-semibold tracking-wider px-4 py-3 md:px-6 md:py-3 border border-primary_color rounded-full cursor-pointer hover:bg-primary_color"
                  >
                    Get Code
                  </a>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
