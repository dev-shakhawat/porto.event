"use client";
import React from "react";
import VenueHeader from "./VenueHeader";
import VenueCard from "./VenueCard";

function VenueInformation() {
  return (
    <div
      className="flex flex-col items-center pt-12 w-full"
      aria-labelledby="venue-title"
    >
      <div className="flex flex-col gap-12 items-start container">
        <VenueHeader />
        <VenueCard />
      </div>
      {/* map part */}
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56328.49883824463!2d-80.72051013579889!3d28.06933606123474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88de120d5f70dc85%3A0xb5b87988df60fb55!2sAndretti%20Thrill%20Park!5e0!3m2!1sbn!2sbd!4v1743924008773!5m2!1sbn!2sbd" width={"100%"} height="450"  loading="lazy" ></iframe>
    </div>
  );
}

export default VenueInformation;
