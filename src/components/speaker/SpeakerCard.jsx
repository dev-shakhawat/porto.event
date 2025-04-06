import React from "react";

function SpeakerCard({ name, role, imageUrl }) {
  return (
    <article className="flex flex-col items-center">
      <figure className="overflow-hidden mb-4 w-full rounded">
        <img
          src={imageUrl}
          alt={`Speaker ${name}`}
          className="w-full h-[220px] object-cover"
        />
      </figure>
      <h3 className="mb-2 text-xl font-bold tracking-tighter leading-5 text-center text-neutral-800">
        {name}
      </h3>
      <p className="mb-4 text-xs font-bold leading-3 text-center uppercase text-neutral-500 tracking-[2px]">
        {role}
      </p>
      <div className="flex gap-1">
        <a
          href="#"
          className="flex justify-center items-center rounded-full h-[33px] w-[33px]"
          aria-label={`${name}'s Facebook profile`}
        >
          <i
            className="ti ti-brand-facebook text-sm text-neutral-700"
            aria-hidden="true"
          />
        </a>
        <a
          href="#"
          className="flex justify-center items-center rounded-full h-[33px] w-[33px]"
          aria-label={`${name}'s LinkedIn profile`}
        >
          <i
            className="ti ti-brand-linkedin text-sm text-neutral-700"
            aria-hidden="true"
          />
        </a>
      </div>
    </article>
  );
}

export default SpeakerCard;
