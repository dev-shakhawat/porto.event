"use client";
import React from "react";
import SpeakerCard from "./SpeakerCard";
import team1 from "../../assets/team-1.jpg"
import team2 from "../../assets/team-2.jpg"
import team3 from "../../assets/team-3.jpg"
import team4 from "../../assets/team-4.jpg"
import team5 from "../../assets/team-5.jpg"
import team6 from "../../assets/team-6.jpg"

function SpeakersSection() {
  // Speaker data array
  const speakers = [
    {
      id: 1,
      name: "John Doe",
      role: "WORDPRESS DEV",
      imageUrl: team1,
    },
    {
      id: 2,
      name: "Janice Doe",
      role: "WORDPRESS DEV",
      imageUrl: team2,
    },
    {
      id: 3,
      name: "Josh Doe",
      role: "WORDPRESS DEV",
      imageUrl: team3,
    },
    {
      id: 4,
      name: "Monica Doe",
      role: "WORDPRESS DEV",
      imageUrl: team4,
    },
    {
      id: 5,
      name: "Will Doe",
      role: "WORDPRESS DEV",
      imageUrl: team5,
    },
    {
      id: 6,
      name: "Brad Doe",
      role: "WORDPRESS DEV",
      imageUrl: team6,
    },
  ];

  return (
    <section className="flex flex-col items-center py-12 w-full bg-white">
      <div className="flex flex-col items-center px-4 max-w-full w-[1140px] max-md:w-full">
        <header>
          <h2 className="mb-1.5 text-base font-bold leading-4 text-center uppercase text-secondery tracking-[2px]">
            PORTO EVENT 2025
          </h2>
          <h1 className="mb-12 text-3xl font-bold tracking-tighter leading-8 text-center text-primary">
            Speakers
          </h1>
        </header>

        <div className="grid grid-cols-3 gap-6 w-full max-md:grid-cols-2 max-sm:grid-cols-1">
          {speakers.map((speaker) => (
            <SpeakerCard
              key={speaker.id}
              name={speaker.name}
              role={speaker.role}
              imageUrl={speaker.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SpeakersSection;
