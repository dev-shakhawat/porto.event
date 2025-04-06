import React from "react";

function EventSection() {
  return (
    <div className="flex overflow-hidden flex-col flex-1 shrink justify-center self-stretch px-12 py-10 h-  bg-brand basis-0 max-w-[1920px] min-w-60 max-md:px-5 max-md:py-24 max-md:max-w-full">
      {/* header */}
      <div className="font-bold leading-none text-white max-md:max-w-full">
        <h2 className="w-full text-base uppercase tracking-[2px] max-md:max-w-full">
          What is Porto Event 2025
        </h2>
        <h3 className="mt-1.5 w-full text-3xl tracking-tighter max-md:max-w-full">
          About the Event
        </h3>
      </div>

      <article className="mt-4 text-white max-md:max-w-full">
        <div className="overflow-hidden overflow-x-auto pt-2.5 w-full max-md:max-w-full">
          <p className="z-10 pb-5 mt-0 mb-0 text-lg leading-8 max-md:mb-2.5 max-md:max-w-full">
            Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Totam

            aliquid debitis adipisci voluptate. Lorem ipsum, dolor, sit amet
          </p>
          <div className="z-10  max-md:max-w-full">
            <div className="flex flex-col justify-center items-start py-1 w-full max-md:max-w-full">
              <a href="#" className="flex gap-1 items-center h-5">
                <span className="self-stretch my-auto text-sm font-semibold leading-7">
                  Read More
                </span>
                <span className="self-stretch my-auto text-sm font-black leading-none"></span>
              </a>
            </div>
          </div>
        </div>
      </article>

      <div className="w-full text-sm font-bold text-center max-md:max-w-full">
        <div className="flex flex-wrap gap-5 items-start pt-5 pb-4 w-full max-md:max-w-full">
          <button
            className="self-stretch px-12 py-4 text-white border border-solid bg-primary border-primary rounded-[35px] max-md:px-5"
            aria-label="Buy tickets for the event"
          >
            Buy Tickets!
          </button>
          <a
            href="https://www.okler.net/previews/porto/12.1.0/demo-event.html#schedule"
            target="_blank"
            rel="noopener noreferrer"
            className="self-stretch px-12 py-4 bg-white border border-solid border-secondery rounded-[35px] text-neutral-800 max-md:px-5"
            aria-label="View event schedule"
          >
            Event Schedule
          </a>
        </div>
      </div>
    </div>
  );
}

export default EventSection;
