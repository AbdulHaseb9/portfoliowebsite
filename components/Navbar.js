"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

export default function Navbar() {
  const pathname = usePathname();
  const [respnav, setrespnav] = useState(false);
  return (
    // Navbar
    <nav className="fixed top-4 left-0 w-full flex items-center justify-between text-white px-6 md:px-10 lg:px-14 large:px-16">
      {/* Logo */}
      <div className="flex items-center gap-x-5">
        <button className="md:hidden" onClick={() => setrespnav(true)}>
          <FaBarsStaggered />
        </button>
        <h3 className="text-3xl">Haseeb.</h3>
      </div>
      {/* NavLinks */}
      <div className="hidden md:block space-x-8 md:text-sm lg:text-lg font-semibold">
        <Link
          href={"/"}
          className={`${
            pathname === "/" ? "text-primary_color" : "text-white"
          }`}
        >
          Home
        </Link>
        <Link
          href={"about"}
          className={`${
            pathname === "/about" ? "text-primary_color" : "text-white"
          }`}
        >
          About
        </Link>
        <Link
          href={"services"}
          className={`${
            pathname === "/services" ? "text-primary_color" : "text-white"
          }`}
        >
          Service
        </Link>
        <Link
          href={"projects"}
          className={`${
            pathname === "/projects" ? "text-primary_color" : "text-white"
          }`}
        >
          Projects
        </Link>
        <Link
          href={"contactme"}
          className={`${
            pathname === "/contactme" ? "text-primary_color" : "text-white"
          }`}
        >
          Contact
        </Link>
      </div>
      {/* Responsive sidebar that enable when user click on hamburger */}
      <div
        className={`transition-all duration-500 bg-bg_color w-9/12 h-screen fixed ${
          respnav ? `-left-0` : `-left-full`
        } top-0 flex flex-col justify-center items-center md:hidden`}
      >
        <div className="w-full text-white h-1/6 py-12 px-12 text-2xl flex justify-end">
          <ImCross onClick={() => setrespnav(false)} />
        </div>
        <div className="h-5/6 text-center space-y-4 md:text-sm lg:text-lg font-semibold">
          <Link
            href={"/"}
            className={`block ${
              pathname === "/" ? "text-primary_color" : "text-white"
            }`}
          >
            Home
          </Link>
          <Link
            href={"about"}
            className={`block ${
              pathname === "/about" ? "text-primary_color" : "text-white"
            }`}
          >
            About
          </Link>
          <Link
            href={"services"}
            className={`block ${
              pathname === "/services" ? "text-primary_color" : "text-white"
            }`}
          >
            Service
          </Link>
          <Link
            href={"projects"}
            className={`block ${
              pathname === "/projects" ? "text-primary_color" : "text-white"
            }`}
          >
            Projects
          </Link>
          <Link
            href={"contactme"}
            className={`block ${
              pathname === "/contactme" ? "text-primary_color" : "text-white"
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
