import React from "react";

function LandingCard({
  img,
  title,
  desc,
}: {
  img: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="card bg-transparent w-44 sm:w-72 h-fit sm:h-[50vh] ">
      <figure className="sm:h-36 min-h-20 ">
        <img src={img} alt="_" className="scale-75 object-cover aspect-auto" />
      </figure>
      <div className="card-body   p-2">
        <h2 className="card-title justify-center font-bold text-lg sm:text-xl mb-4">
          {title}
        </h2>
        <p className=" text-justify">{desc}</p>
      </div>
    </div>
  );
}

export default LandingCard;
