import React from "react";

function VenueHeader() {
  return (
    <div className="flex flex-wrap justify-center items-start w-full">
      <div className="flex flex-col flex-1 gap-1.5 items-start px-3 w-full max-w-[1140px]">
        <h2 className="w-full text-base font-bold leading-4 text-center uppercase text-neutral-500 tracking-[2px]">
          Check Out The Venue Information
        </h2>
        <h1
          id="venue-title"
          className="w-full text-3xl font-bold tracking-tighter leading-8 text-center text-neutral-800"
        >
          Venue
        </h1>
      </div>
    </div>
  );
}

export default VenueHeader;
