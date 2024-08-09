import React from "react";

function Service_GridCard({
  img,
  token,
  desc,
  number,
}: {
  img: string;
  token: string;
  desc: string;
  number: number;
}) {
  return (
    <div
      className={`card rounded-none ${
        number == 1 || number == 4 ? "bg-slate-900" : "bg-[#DEDFE4]"
      }  sm:w-96 shadow-xl grow ${
        number == 1 || number == 3 ? " justify-self-end " : "justify-self-start"
      }`}
    >
      {(number == 1 || number == 2) && (
        <figure>
          <img
            src={img}
            alt={"_"}
            className="size-20 sm:size-1/3 object-contain absolute "
          />
        </figure>
      )}
      <div className={`card-body mt-2 sm:p-[2rem] px-3 py-12 `}>
        <h2 className="card-title">{}</h2>
        <p
          className={` ${
            number == 2 || number == 3 ? "text-black" : "text-white"
          } text-justify`}
        >
          {desc}
        </p>
        <div className="card-actions justify-end"></div>
      </div>
      {(number == 3 || number == 4) && (
        <figure>
          <img
            src={img}
            alt={"_"}
            className="size-20 sm:size-1/3 object-contain absolute"
          />
        </figure>
      )}
    </div>
  );
}

export default Service_GridCard;
