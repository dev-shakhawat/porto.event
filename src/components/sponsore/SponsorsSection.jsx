import React from "react";
import SponsorLogo from "./SponsorLogo";


import logo8 from "../../assets/logo-8.png"
import logo9 from "../../assets/logo-9.png"
import logo10 from "../../assets/logo-10.png"
import logo11 from "../../assets/logo-11.png"
import logo12 from "../../assets/logo-12.png"
import logo13 from "../../assets/logo-13.png"

function SponsorsSection() {
  const sponsors = [
    { id: 1, url: logo8, width: "90px", aspect: "1.92" },
    { id: 2, url: logo9 , width: "140px", aspect: "3.79" },
    { id: 3, url: logo10, width: "140px", aspect: "8.77", paddingY: "pt-1.5 pb-1", },
    { id: 10, url: logo11, width: "140px", aspect: "3.26" },
    { id: 11, url: logo12, width: "100px", aspect: "2.56" },
    { id: 12, url: logo13, width: "100px", aspect: "2.56" },
  ];

  return (
    <section className="flex flex-col justify-center items-center self-stretch py-12 bg-neutral-100">
      <div className="pt-4 pb-8 max-w-full w-[1140px]">
        <header className="flex flex-wrap justify-center w-full font-bold leading-none text-center max-md:max-w-full">
          <div className="flex-1 shrink px-3 w-full basis-0 max-w-[1140px] min-w-60 max-md:max-w-full">
            <h2 className="w-full text-base uppercase text-secondery tracking-[2px] max-md:max-w-full">
              Thanks To Our Sponsors
            </h2>
            <h3 className="mt-1.5 w-full text-3xl tracking-tighter whitespace-nowrap text-primary max-md:max-w-full">
              Sponsors
            </h3>
          </div>
        </header>

        <div className="flex flex-wrap items-center py-12 mt-4 w-full max-md:max-w-full">
          {sponsors.map((sponsor) => (
            <SponsorLogo
              key={sponsor.id}
              imageUrl={sponsor.url}
              width={sponsor.width}
              aspect={sponsor.aspect}
              paddingY={sponsor.paddingY}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SponsorsSection;
