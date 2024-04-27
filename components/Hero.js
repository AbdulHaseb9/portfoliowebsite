"use client";
import React from "react";
import { FaFacebookF } from "react-icons/fa6";
// import { FaLinkedinIn } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="h-screen w-full flex items-center py-28 text-center md:text-left">
      <div>
        <h2 className="text-white font-bold text-4xl text-center md:text-left md:text-5xl mb-4">
          Hi, I'm Haseeb Sheikh
        </h2>
        <p className="text-primary_color font-semibold text-2xl text-center md:text-3xl md:text-left">
          Frontend Developer
        </p>
        <p className="text-white text-justify w-full md:w-1/2 mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ullam
          quam harum beatae totam incidunt rerum maxime dignissimos ducimus,
          aliquid animi exercitationem sequi cumque perspiciatis expedita
          dolorum doloribus eius deleniti.
        </p>
        {/* Buttons */}
        <div className="flex justify-center space-x-9 md:block my-5">
          <button className="bg-primary_color border border-primary_color px-3 md:px-7 py-3 rounded-md font-bold hover:bg-transparent hover:text-primary_color">
            Download CV
          </button>
          <button className="border border-primary_color text-primary_color px-3 md:px-7 py-3 rounded-md font-bold hover:bg-primary_color hover:text-black">
            Let's Talk
          </button>
        </div>
        {/* Social Links */}
        <div className="text-white flex justify-center md:justify-normal gap-x-7 text-xl mt-14">
          <a
            href="https://www.facebook.com/profile.php?id=100086119372055"
            target="_blank"
            className="border border-white rounded-full p-2 cursor-pointer hover:text-primary_color hover:border-primary_color"
          >
            <FaFacebookF />
          </a>
          {/* <a
            href="#"
            target="_blank"
            className="border border-white rounded-full p-2 cursor-pointer hover:text-primary_color hover:border-primary_color"
          >
            <FaLinkedinIn />
          </a> */}
          {/* <a href="#" target="_blank" className="border border-white rounded-full p-2 cursor-pointer hover:text-primary_color hover:border-primary_color">
            <FaXTwitter />
          </a> */}
          <a
            href="https://github.com/abdulhaseb9"
            target="_blank"
            className="border border-white rounded-full p-2 cursor-pointer hover:text-primary_color hover:border-primary_color"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/haseebsheikhofficial7/"
            target="_blank"
            className="border border-white rounded-full p-2 cursor-pointer hover:text-primary_color hover:border-primary_color"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}
