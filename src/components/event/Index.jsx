"use client";
import React from "react";
import EventSection from "./EventSection";

function Event() {
  return (
    <div className="   ">
      <div className="flex flex-wrap items-stretch w-full max-md:max-w-full">
        <img className={`object-cover flex-1 shrink self-stretch w-full aspect-[1.23] basis-[98px] max-w-[1920px] min-w-60 max-md:max-w-full `} src="https://cdn.builder.io/api/v1/image/assets/TEMP/061df3937685c56d64b64b83f5802eefcc86a69d?placeholderIfAbsent=true&apiKey=466f249b7d214751928742d45a4b8b0b" />

        <EventSection />

        <div className="flex flex-col flex-1 shrink justify-center self-stretch my-auto basis-[98px] bg-zinc-800 max-w-[1920px] min-h-[520px] min-w-60 max-md:max-w-full">
          <img className={`object-contain flex-1 shrink self-stretch w-full aspect-[1.23] basis-[98px] max-w-[1920px] min-w-60 max-md:max-w-full `} src="https://cdn.builder.io/api/v1/image/assets/TEMP/615eb0171d7da258a41e0ca746c7433a51303407?placeholderIfAbsent=true&apiKey=466f249b7d214751928742d45a4b8b0b" />
        </div>
      </div>
    </div>
  );
}

export default Event;
