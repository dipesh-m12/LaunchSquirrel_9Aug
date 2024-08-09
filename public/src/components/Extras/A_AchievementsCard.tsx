import React from "react";

function A_AchievementsCard({ img, desc }: { img: string; desc: string }) {
  return (
    <section className="w-[45vw] sm:w-[24vw] overflow-hidden  border-solid border-2 p-3 sm:p-10 ">
      <figure className="h-32 sm:h-[40%] flex">
        <img
          alt="_"
          src={img}
          className="mb-5 object-cover mx-auto scale-75 sm:scale-100 self-center"
        />
      </figure>
      <p className="text-justify text-lg sm:text-xl  ">{desc}</p>
    </section>
  );
}

export default A_AchievementsCard;
