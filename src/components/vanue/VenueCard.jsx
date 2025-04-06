"use client";
import React from "react";

function VenueCard() {
  const handleGetDirections = () => {
    // In a real implementation, this could open maps in a new tab or trigger navigation
    window.open(
      "https://maps.google.com/?q=123+Porto+Blvd,+Suite+100,+New+York,+NY",
      "_blank",
    );
  };

  return (
    <div className="flex flex-wrap justify-center items-start w-full">
      <article className="relative flex overflow-hidden flex-col w-full bg-white rounded-xl shadow-2xl max-w-[855px] max-md:flex-col max-sm:flex-col">
        <div className="flex flex-row max-md:flex-col max-sm:flex-col">
          <div className="w-[356px] max-md:w-full max-sm:w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e91ef1b5f70a6f0165a765ea1bc201168e47a92"
              alt="New York Plazha venue"
              className="w-full h-[350px] object-cover rounded-[10px_0_0_10px] max-lg:rounded-[10px_10px_0_0] max-sm:rounded-[10px_10px_0_0]"
            />
          </div>
          <div className="flex relative flex-col flex-1 gap-4 items-center p-10">
            <h3 className="w-full text-xl font-bold leading-7 text-center text-neutral-800">
              New York Plazha
            </h3>
            <address className="flex flex-col items-center pb-2 w-full opacity-80 not-italic">
              <p className="w-full text-sm leading-7 text-center text-neutral-500">
                <span>123 Porto Blvd, Suite 100</span>
                <br />
                <span>New York, NY</span>
                <br />
                <span>Phone: 123-456-7890</span>
              </p>
            </address>
            <button
              onClick={handleGetDirections}
              className="px-12 py-4 text-sm font-bold leading-5 text-center text-white duration-200 cursor-pointer bg-zinc-800 rounded-[35px] hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500"
              aria-label="Get directions to New York Plazha"
            >
              Get Directions
            </button>
          </div>
        </div>
        <div
          className="absolute left-2/4 bg-white rotate-45 -translate-x-2/4 bottom-[-25px] h-[50px] w-[50px] max-md:hidden"
          aria-hidden="true"
        />
      </article>
    </div>
  );
}

export default VenueCard;
