import React from "react";

export default function Contact() {
  return (
    <div
      id="contactme"
      className="md:h-screen w-full bg-bg_color py-28 padding"
    >
      <h2 className="text-center text-4xl font-semibold text-white">
        Contact <span className="text-primary_color">Me!</span>
      </h2>
      <div className="w-full flex justify-center">
        <form className="w-[460px] grid place-items-center md:gap-12 grid-cols-1 md:grid-cols-2 my-9 text-white text-sm">
          <div className="w-full">
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              className="w-full border-2 rounded-md border-primary_color bg-transparent outline-none py-2 px-3"
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="Email Address"
              name="email"
              className="w-full border-2 rounded-md border-primary_color bg-transparent outline-none py-2 px-3"
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="Mobile Number"
              name="number"
              className="w-full border-2 rounded-md border-primary_color bg-transparent outline-none py-2 px-3"
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="Email Subject"
              name="subject"
              className="w-full border-2 rounded-md border-primary_color bg-transparent outline-none py-2 px-3"
            />
          </div>
          <div className="w-full col-span-2">
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Your Message"
              className="w-full border-2 rounded-md border-primary_color bg-transparent outline-none py-2 px-3"
            ></textarea>
          </div>
          <div className="w-full col-span-2 flex justify-center">
            <input
              type="submit"
              value="Submit"
              className="border-2 rounded-md border-primary_color px-5 py-2"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
