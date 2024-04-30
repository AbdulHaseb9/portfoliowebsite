import React from "react";
import Image from "next/image";
import html5 from "../public/html5.png";
import css3 from "../public/css3.png";
import javascript from "../public/javascript.png";
import bootstrap from "../public/bootstrap.png";
import react from "../public/reactjs.png";
import mongodb from "../public/mongodb.svg";
import nodejs from "../public/nodejs.png";
import expressjs from "../public/expressjs.webp";
import github from "../public/github.png";
import tailwindcss from "../public/tailwindcss.png";
import postman from "../public/postman.png";
import redux from "../public/react_redux.png";
import firebase from "../public/firebase.png";
import netlify from "../public/netlify.png";

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
    <div className="lg:h-screen w-full bg-secondary_color padding py-12">
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
