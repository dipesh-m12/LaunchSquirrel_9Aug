import React, { useState } from "react";
import dummy from "../../assets/Rectangle 4446.png";
import linkedIn from "../../assets/LinkedIn.png";
import { useNavigate } from "react-router";

function AboutCard({
  img,
  title,
  desc,
  link,
}: {
  img: string;
  title: string;
  desc: string;
  link: string;
}) {
  const navigate = useNavigate();
  const [hover, setHover] = useState<boolean>(false);
  return (
    <div
      className="overflow-hidden w-[31vw] h-[33vh] sm:w-96 sm:h-[50vh] hover:opacity-40 relative shadow-lg"
      //   style={{ backgroundImage: `url(${img ? img : dummy})` }}
      onClick={() => {
        window.open(link, "_blank");
      }}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        alt="_"
        src={linkedIn}
        className={` absolute top-[40%] left-[30%] scale-50 ${
          hover ? "opacity-100 z-10" : "opacity-0"
        }`}
      />
      <figure>
        <img
          src={img ? img : dummy}
          alt="_"
          className={`object-cover w-[31vw] h-[25vh] sm:w-96 sm:h-[50vh] ${
            hover ? "scale-110" : ""
          } transition-all duration-200`}
        />
      </figure>
      <div className="card-body relative sm:bottom-16 bg-white rounded-md w-[29vw] sm:w-80 mx-auto p-1">
        <h2 className="card-title justify-center text-xs sm:text-[1.25rem]">
          {title}
        </h2>
        <p className="text-center text-xs">{desc}</p>
      </div>
    </div>
  );
}

export default AboutCard;
