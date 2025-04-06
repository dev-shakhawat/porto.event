
import React from "react";
import StatItem from "./StatItem";




// icons
import { BsShieldCheck } from "react-icons/bs";
import { GrGroup } from "react-icons/gr";
import { MdOutlineNoteAlt } from "react-icons/md";
import { CiUser } from "react-icons/ci";


function StatisticsSection() {
  const stats = [
    {
      number: "6",
      label: "Event Editions",
      image: <BsShieldCheck   className="text-2xl" />
    },
    {
      number: "136",
      label: "Event Visitors",
      image: <GrGroup   className="text-2xl" />
    },
    {
      number: "1133",
      label: "Successfull Stories",
      image: <MdOutlineNoteAlt   className="text-2xl" />
    },
    {
      number: "11",
      label: "Professional Speakers",
      image:  <CiUser   className="text-2xl" />
    },
  ];

  return (
    <div
      className="flex flex-col justify-center items-center self-stretch py-12 bg-zinc-800"
      aria-label="Statistics"
    >
      <div className="container">
        <div className="flex flex-wrap py-12 w-full max-md:max-w-full">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              number={stat.number}
              label={stat.label}
              image={stat.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default StatisticsSection;
