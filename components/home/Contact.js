import React from "react";

export default function Contact() {
  return (
    <div
      id="contactme"
      className="md:h-screen w-full bg-bg_color py-12  padding"
    >
      <h2 className="text-center text-4xl font-semibold text-white">
        Contact <span className="text-primary_color">Me!</span>
      </h2>
      <div className="w-full flex justify-center">
        <form className="w-full max-w-[490px] my-12 grid place-items-center md:grid-cols-2 gap-x-6 gap-y-7">
          <div className="w-full">
            <input
              type="text"
              placeholder="FullName"
              className="w-full border-2 border-primary_color bg-transparent px-3 py-2 outline-none text-white rounded-md"
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="Email Address"
              className="w-full border-2 border-primary_color bg-transparent px-3 py-2 outline-none text-white rounded-md"
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="Mobile Number"
              className="w-full border-2 border-primary_color bg-transparent px-3 py-2 outline-none text-white rounded-md"
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="Email Subject"
              className="w-full border-2 border-primary_color bg-transparent px-3 py-2 outline-none text-white rounded-md"
            />
          </div>
          <div className="w-full md:col-span-2">
            <textarea
              cols="30"
              rows="10"
              placeholder="Enter Your Message"
              className="w-full border-2 border-primary_color bg-transparent px-3 py-2 outline-none text-white rounded-md"
            ></textarea>
          </div>
          <div className="w-full flex justify-center md:col-span-2">
            <input
              type="submit"
              className="border-2 border-primary_color bg-transparent px-6 py-2 outline-none text-white rounded-md hover:bg-primary_color hover:text-black font-semibold tracking-[2px]"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
