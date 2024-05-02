import React from "react";
import Image from "next/image";
import html5 from "@/public/skills/html5.png";
import css3 from "@/public/skills/css3.png";
import javascript from "@/public/skills/javascript.png";
import bootstrap from "@/public/skills/bootstrap.png";
import react from "@/public/skills/reactjs.png";
import mongodb from "@/public/skills/mongodb.svg";
import nodejs from "@/public/skills/nodejs.png";
import expressjs from "@/public/skills/expressjs.webp";
import github from "@/public/skills/github.png";
import tailwindcss from "@/public/skills/tailwindcss.png";
import postman from "@/public/skills/postman.png";
import redux from "@/public/skills/react_redux.png";
import firebase from "@/public/skills/firebase.png";
import netlify from "@/public/skills/netlify.png";

export default function Skills() {
  const Skills = [
    {
      imagename: "HTML5",
      imageurl: html5,
    },
    {
      imagename: "CSS3",
      imageurl: css3,
    },
    {
      imagename: "Bootstrap5",
      imageurl: bootstrap,
    },
    {
      imagename: "Javascript",
      imageurl: javascript,
    },
    {
      imagename: "ReactJS",
      imageurl: react,
    },
    {
      imagename: "NodeJS",
      imageurl: nodejs,
    },
    {
      imagename: "ExpressJS",
      imageurl: expressjs,
    },
    {
      imagename: "MongoDB",
      imageurl: mongodb,
    },
    {
      imagename: "Github",
      imageurl: github,
    },
    {
      imagename: "TailwindCSS",
      imageurl: tailwindcss,
    },
    {
      imagename: "Postman",
      imageurl: postman,
    },
    {
      imagename: "Redux",
      imageurl: redux,
    },
    {
      imagename: "Firebase",
      imageurl: firebase,
    },
    {
      imagename: "Netlify",
      imageurl: netlify,
    },
  ];

  return (
    <div id="skill" className="lg:h-screen w-full bg-secondary_color padding py-12">
      <h2 className="text-center text-4xl font-semibold text-white">
        My <span className="text-primary_color">Skills</span>
      </h2>
      <div className="mt-10 py-7 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 large:grid-cols-7 gap-x-3 gap-y-5 large:gap-x-5">
        {Skills.map((item, index) => {
          return (
            <div
              className="w-full h-32 md:h-44 bg-primary_color/30 rounded-md flex flex-col justify-center items-center"
              key={index}
            >
              <div className="h-32 flex items-center">
                <Image
                  src={item.imageurl}
                  alt={item.imagename}
                  className="w-20"
                />
              </div>
              <h4 className="hidden md:block text-white text-lg lg:text-xl font-semibold tracking-wider">
                {item.imagename}
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}
