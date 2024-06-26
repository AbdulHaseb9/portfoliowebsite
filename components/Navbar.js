"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

export default function Navbar() {
  const pathname = usePathname();
  const [respnav, setrespnav] = useState(false);
  const [fixnavbg, setfixnavbg] = useState(false);

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setfixnavbg(true) : setfixnavbg(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    // return () => {
    //   window.removeEventListener("scroll", listenScrollEvent);
    // };
  }, []);

  return (
    <>
      {/*  Navbar */}
      <nav
        className={`z-30 fixed py-3 top-0 left-0 w-full flex items-center justify-between text-white padding ${
          fixnavbg ? `bg-secondary_color` : null
        }`}
      >
        {/* Logo */}
        <div className={`z-30 flex items-center gap-x-5`}>
          <button className="md:hidden" onClick={() => setrespnav(true)}>
            <FaBarsStaggered />
          </button>
          <h3 className="text-2xl large:text-3xl">Haseeb.</h3>
        </div>
        {/* NavLinks */}
        <div className="hidden md:block space-x-8 md:text-sm lg:text-lg font-semibold">
          <Link
            href={"#main"}
            className={`${
              pathname === "/" ? "text-primary_color" : "text-white"
            }`}
          >
            Home
          </Link>
          <Link
            href={"#journey"}
            className={`${
              pathname === "/#journey" ? "text-primary_color" : "text-white"
            }`}
          >
            About
          </Link>
          <Link
            href={"#skill"}
            className={`${
              pathname === "#skill" ? "text-primary_color" : "text-white"
            }`}
          >
            Skills
          </Link>
          <Link
            href={"#projects"}
            className={`${
              pathname === "#projects" ? "text-primary_color" : "text-white"
            }`}
          >
            Projects
          </Link>
          <Link
            href={"#contactme"}
            className={`${
              pathname === "/contactme" ? "text-primary_color" : "text-white"
            }`}
          >
            Contact
          </Link>
        </div>
      </nav>
      {/* Responsive sidebar that enable when user click on hamburger */}
      <div
        className={`z-50 transition-all duration-500 bg-bg_color w-9/12 h-screen fixed ${
          respnav ? `-left-0` : `-left-full`
        } top-0 flex flex-col justify-center items-center md:hidden`}
      >
        <div className="w-full text-white h-1/6 py-12 px-12 text-2xl flex justify-end">
          <ImCross onClick={() => setrespnav(false)} />
        </div>
        <div className="h-5/6 text-center space-y-4 md:text-sm lg:text-lg font-semibold">
          <Link
            href={"#main"}
            onClick={() => setrespnav(false)}
            className={`block ${
              pathname === "/" ? "text-primary_color" : "text-white"
            }`}
          >
            Home
          </Link>
          <Link
            href={"#journey"}
            onClick={() => setrespnav(false)}
            className={`block ${
              pathname === "/#journey" ? "text-primary_color" : "text-white"
            }`}
          >
            About
          </Link>
          <Link
            href={"#skill"}
            onClick={() => setrespnav(false)}
            className={`block ${
              pathname === "#skill" ? "text-primary_color" : "text-white"
            }`}
          >
            Skills
          </Link>
          <Link
            href={"#projects"}
            onClick={() => setrespnav(false)}
            className={`block ${
              pathname === "#projects" ? "text-primary_color" : "text-white"
            }`}
          >
            Projects
          </Link>
          <Link
            href={"#contactme"}
            onClick={() => setrespnav(false)}
            className={`block ${
              pathname === "/contactme" ? "text-primary_color" : "text-white"
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
