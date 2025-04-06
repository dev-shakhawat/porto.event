
import React from "react";

function StatItem({ number, label, image }) {
  return (
    <div className="flex-1 shrink px-3 basis-0   ">
      <div className={`flex flex-col w-full ${!image ? "pt-12" : ""}`}>
        {image && (
          <div className="flex z-10 items-start self-center group-hover:text-white duration-300  ">
            {image}
          </div>
        )}
        <div className="pt-4 text-5xl font-bold leading-none text-center text-white whitespace-nowrap max-md:text-4xl">
          {number}
        </div>
        <div className="pt-2 text-lg leading-none text-center text-white font-[250]">
          {label}
        </div>
      </div>
    </div>
  );
}

export default StatItem;
