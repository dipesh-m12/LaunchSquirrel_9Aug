import React from "react";

function ServicesBGCard({ img }: { img: string }) {
  return (
    <div className="card rounded-none bg-slate-900  w-80 h-[10vh] sm:h-[20vh] shadow-xl grow">
      <figure>
        <img src={img} alt={"_"} className="size-2/3 aspect-square absolute" />
      </figure>
      <div className="card-body mt-20">
        <h2 className="card-title">{}</h2>
        <p>{}</p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
}

export default ServicesBGCard;
