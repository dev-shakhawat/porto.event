import React from "react";
import banrplaybtn from "../../assets/bnrplaybnt.svg";
import bnrbg from "../../assets/bnrbg.jpg";
// import "./bnr.css"

function EventHero() {
  return (
    <div
      className={`flex relative items-center min-h-screen bg-center bg-cover `}
      style={{ backgroundImage: `url(${bnrbg})` }}
      aria-label="Event hero section"
    >
      <div className="relative container">
        <div className="max-w-[855px]">
          <p className="mb-1 text-base font-semibold text-white uppercase max-sm:text-sm">
            2 DAYS, 23 TALKS
          </p>
          <h1 className="mx-0 relative my-5 flex 3xl:text-7xl 3sx:text-3xl font-bold tracking-tighter text-white uppercase leading-[81px] max-md:text-6xl max-md:leading-[65px] max-sm:text-4xl max-sm:tracking-tighter max-sm:leading-10">
            #PORTO
            <svg className="3xl:mt-[-10px] 3sx:mt-[-25px] ml-2  ">
              <text className="bnrAminate" x="0%" y="50%">
                event
              </text>
            </svg>
          </h1>
          <p className="mb-1 text-2xl font-bold text-white max-sm:text-xl">
            July 17 &amp; 18, 2025 | NYC
          </p>
          <div
            className="flex gap-2 items-center text-sm font-semibold text-brand"
            aria-label="Event location"
          >
            <i className="ti ti-map-pin text-sm" aria-hidden="true" />
            <span>NEW YORK PLAZA - NEW WORK - NY</span>
          </div>
        </div>
        <div className="flex absolute right-3 justify-end top-[38px] w-[261px] max-md:relative max-md:top-auto max-md:right-auto max-md:mt-8 max-sm:justify-center max-sm:w-full">
          <div className="h-[62px] w-[62px]">
            <img src={banrplaybtn} alt="banrplaybtn" className=" 2xl:inline-block 3sx:hidden   " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventHero;
