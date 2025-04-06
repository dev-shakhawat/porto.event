
import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";



// Footer column component for consistent styling
const FooterColumn = ({ width, children }) => {
  return (
    <div
      className={`flex flex-col justify-center items-start pt-6 max-w-[1140px] ${width} max-md:w-full`}
    >
      <div className="flex flex-col gap-3.5 items-start px-3 py-0 h-[140px] max-w-[1140px]">
        {children}
      </div>
    </div>
  );
};

function EventFooter() {
  return (
    <footer className="flex flex-col items-center bg-primary ">

      {/* Main footer content */}
      <div className="flex flex-col items-start container">
        <section className="flex flex-wrap justify-center items-center px-0 py-12 max-md:px-0 max-md:py-8 max-sm:px-0 max-sm:py-6">
          {/* Logo Column */}
          <div className="flex flex-col items-center pt-6 max-w-[1140px] w-[190px] max-md:w-full max-sm:items-start">
            <div className="flex flex-col items-start px-3 py-0 max-w-[1140px]">
              <div className="flex items-center">
                <img
                  src="/images/logo.png"
                  alt="Porto Logo"
                  className="w-[128px] h-[34px] max-w-[190px]"
                />
              </div>
            </div>
          </div>

          {/* Event Info Column */}
          <FooterColumn width="w-[380px]">
            <h2 className="text-lg font-bold tracking-tighter leading-7 text-white">
              Porto Event - July 17 &amp; 18, 2025 | NYC
            </h2>
            <div className="flex items-center pb-1.5">
              <span className="text-xs text-brand" aria-hidden="true">
                <i className="ti ti-map-pin" />
              </span>
              <p className="text-xs font-semibold leading-7 text-brand ml-1">
                NEW YORK PLAZA - NEW WORK - NY
              </p>
            </div>
            <button
              className="px-12 py-4 text-xs font-bold leading-5 text-center text-white bg-brand  cursor-pointer rounded-[35px]"
              aria-label="Buy Tickets for Porto Event"
            >
              Buy Tickets
            </button>
          </FooterColumn>

          {/* Social Media Column */}
          <FooterColumn width="w-[285px]">
            <h2 className="text-lg font-bold tracking-tighter leading-7 text-white">
              Follow
            </h2>
            <ul
              className="flex gap-1 items-start mt-5  "
              aria-label="Social Media Links"
            >
                <li className=" w-[40px] h-[40px] grid place-items-center hover:bg-brand rounded-full text-white  "><a href="#"><FaInstagram /></a></li>
                <li className=" w-[40px] h-[40px] grid place-items-center hover:bg-brand rounded-full text-white  "><a href="#"><FaFacebookF /></a></li>
            </ul>
              
              
          </FooterColumn>

          {/* Latest Post Column */}
          <FooterColumn width="w-[285px]">
            <h2 className="text-lg font-bold tracking-tighter leading-7 text-white">
              Latest Post
            </h2>
            <article className="flex flex-col items-start">
              <div className="flex gap-2 items-center opacity-80">
                <i
                  className="ti ti-arrow-right text-xs text-brand"
                  aria-hidden="true"
                />
                <h3 className="text-xs font-semibold leading-7 text-white">
                  Lorem ipsum dolor sit amet.
                </h3>
              </div>
              <time
                className="text-xs leading-7 text-secondery"
                dateTime="2025-12-19T00:55:00"
              >
                12:55 AM Dec 19th
              </time>
            </article>
          </FooterColumn>
        </section>
      </div>

      {/* Copyright Section */}
      <div className="flex flex-col items-center w-full bg-primary">
        <div className="flex flex-col items-start px-0 py-2 max-w-[1140px] w-[1140px] max-md:px-5 max-md:w-full max-sm:px-4">
          <div className="flex flex-wrap justify-center items-start px-0 py-6 w-full">
            <div className="flex flex-col items-start px-3 py-0 flex-[1_0_0] max-w-[1140px] w-full">
              <p className="text-sm leading-7 text-center text-neutral-400 w-full">
                Porto Event. © 2025. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default EventFooter;
