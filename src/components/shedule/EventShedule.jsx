
import React from "react";


import team1 from "../../assets/team-1.jpg"
import team2 from "../../assets/team-2.jpg"
import team3 from "../../assets/team-3.jpg"
import team4 from "../../assets/team-4.jpg"
import team5 from "../../assets/team-5.jpg"
import team6 from "../../assets/team-6.jpg"




const ScheduleHeader = () => {
  return (
    <header className="mb-6 text-center">
      <h2 className="mb-1.5 text-base font-bold uppercase text-secondery tracking-[2px] max-sm:text-sm">
        Porto Event Agenda
      </h2>
      <h1 className="text-3xl font-bold tracking-tighter text-primary max-sm:text-2xl">
        Schedule
      </h1>
    </header>
  );
};

const DayBadge = ({ day, date }) => {
  return (
    <div className="mb-12">
      <div
        className="flex flex-col justify-center items-center text-white bg-brand rounded-full h-[115px] w-[115px]"
        aria-label={`Day ${day}, ${date}`}
      >
        <div className="text-2xl font-bold tracking-tighter">DAY {day}</div>
        <div className="text-xs font-semibold uppercase opacity-70">{date}</div>
      </div>
    </div>
  );
};

const BasicEvent = ({ time, title, description }) => {
  return (
    <div className="relative mb-10">
      <div
        className="absolute text-sm font-bold left-[-70px] text-primary top-[35px] max-sm:text-xs max-sm:left-[-50px]"
        aria-label={`Event at ${time}`}
      >
        {time}
      </div>
      <div
        className="absolute w-2 h-2 bg-brand rounded-full shadow-sm left-[-89px] top-[42px] max-sm:left-[-69px] border-2 border-white outline-2 outline-brand "
        aria-hidden="true"
      />
      <div className="relative p-5 ml-8 rounded bg-neutral-100 max-md:ml-5 max-sm:p-4 max-sm:ml-4">
        <h3 className="mb-1.5 text-base font-bold text-primary">{title}</h3>
        <p className="text-xs leading-5 opacity-80 text-secondery">
          {description}
        </p>
      </div>
    </div>
  );
};

const SpeakerEvent = ({ time, name, description, imageUrl }) => {
  return (
    <div className="relative mb-10">
      <div
        className="absolute text-sm font-bold left-[-70px] text-primary top-[35px] max-sm:text-xs max-sm:left-[-50px]"
        aria-label={`Event at ${time}`}
      >
        {time}
      </div>
      <div
        className="absolute w-2 bg-brand rounded-full shadow-sm h-[7px] left-[-89px] top-[42px] max-sm:left-[-69px] border-2 border-white outline-2 outline-brand"
        aria-hidden="true"
      />
      <div className="relative p-5 ml-8 rounded bg-neutral-100 max-md:ml-5 max-sm:p-4 max-sm:ml-4">
        <div className="flex gap-4 items-start">
          <img
            src={imageUrl}
            alt={`Speaker ${name}`}
            className="object-cover rounded-full h-[70px] w-[70px] max-sm:h-[50px] max-sm:w-[50px]"
          />
          <div className="flex-1 max-sm:text-sm">
            <h3 className="mb-1.5 text-base font-bold text-primary">
              {name}
            </h3>
            <p className="text-xs leading-5 opacity-80 text-secondery">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const DaySchedule = ({ day, date, events }) => {
  return (
    <div className="relative flex-1" aria-labelledby={`day-${day}-heading`}>
      <DayBadge day={day} date={date} />
      <div
        className="absolute h-[925px] left-[143px] opacity-35 top-[-60px] w-[3px] max-md:hidden"
        aria-hidden="true"
      />
      <div className="ml-24 max-sm:ml-16">
        {events.map((event, index) =>
          event.type === "speaker" ? (
            <SpeakerEvent
              key={`day-${day}-event-${index}`}
              time={event.time}
              name={event.name}
              description={event.description}
              imageUrl={event.imageUrl}
            />
          ) : (
            <BasicEvent
              key={`day-${day}-event-${index}`}
              time={event.time}
              title={event.title}
              description={event.description}
            />
          ),
        )}
      </div>
    </div>
  );
};

function EventSchedule() {
  const day1Events = [
    {
      type: "basic",
      time: "8:00 AM",
      title: "Breakfast & Welcome",
      description: "Lorem ipsum dolor, sit amet consectetur.",
    },
    {
      type: "speaker",
      time: "9:00 AM",
      name: "John Doe",
      description: "Lorem ipsum dolor, sit amet consectetur.",
      imageUrl: team1,
    },
    {
      type: "speaker",
      time: "11:30 AM",
      name: "Janice Doe",
      description: "Lorem ipsum dolor, sit amet consectetur.",
      imageUrl: team2,
    },
    {
      type: "speaker",
      time: "3:30 PM",
      name: "Josh Doe",
      description: "Lorem ipsum dolor, sit amet consectetur.",
      imageUrl: team3,
    },
    {
      type: "basic",
      time: "5:00 PM",
      title: "Day 1 End",
      description: "Lorem ipsum dolor, sit amet consectetur.",
    },
  ];

  const day2Events = [
    {
      type: "basic",
      time: "8:00 AM",
      title: "Breakfast & Welcome",
      description: "Lorem ipsum dolor, sit amet consectetur.",
    },
    {
      type: "speaker",
      time: "9:00 AM",
      name: "Monica Doe",
      description: "Lorem ipsum dolor, sit amet consectetur.",
      imageUrl: team4,
    },
    {
      type: "speaker",
      time: "11:30 AM",
      name: "Will Doe",
      description: "Lorem ipsum dolor, sit amet consectetur.",
      imageUrl: team5,
    },
    {
      type: "speaker",
      time: "3:30 PM",
      name: "Brad Doe",
      description: "Lorem ipsum dolor, sit amet consectetur.",
      imageUrl: team6,
    },
    {
      type: "basic",
      time: "5:00 PM",
      title: "Day 2 End",
      description: "Lorem ipsum dolor, sit amet consectetur.",
    },
  ];

  return (
    <div className="">
      <div className="flex flex-col items-center py-12 container">
        <ScheduleHeader />
        <div className="flex gap-12 px-3 py-6 w-full max-4xl:flex-col max-md:gap-6">
          <DaySchedule day="1" date="July 7" events={day1Events} />
          <DaySchedule day="2" date="July 8" events={day2Events} />
        </div>
      </div>
    </div>
  );
}

export default EventSchedule;
