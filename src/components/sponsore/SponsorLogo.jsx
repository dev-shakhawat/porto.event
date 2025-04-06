import React from "react";

function SponsorLogo({ imageUrl, width, aspect, paddingY = "" }) {
  return (
    <div
      className={`flex flex-col flex-1 shrink justify-center items-center self-stretch px-3 my-auto basis-0 max-w-[1140px] ${paddingY}`}
    >
      <img
        src={imageUrl}
        alt="Sponsor logo"
        className={`object-contain max-w-full aspect-[${aspect}] w-[${width}]`}
      />
    </div>
  );
}

export default SponsorLogo;
