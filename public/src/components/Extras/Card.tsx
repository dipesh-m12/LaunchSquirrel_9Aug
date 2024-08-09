import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Card({
  img,
  title,
  desc,
}: {
  img: string;
  title: string;
  desc: string;
}) {
  const [hovered, setIsHovered] = useState<boolean>(false);

  return (
    <Container
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card rounded-none bg-[#7D8491] bg-opacity-15   w-[47vw] sm:w-80 h-[45vh] shadow-xl hover:bg-[#1A1D29] hover:text-white transition duration-150 relative">
        <figure>
          <img
            src={img}
            alt={title}
            className="size-1/2 aspect-square absolute"
          />
        </figure>
        <div className="card-body sm:mt-20 mt-10 sm:px-[2rem] px-2">
          <h2 className="card-title sm:text-[1.25rem] text-lg">{title}</h2>
          <p className="text-justify ">{desc}</p>
          <div className="card-actions  justify-end absolute right-3 bottom-4 sm:right-6">
            {/* <button
              className={`btn btn-neutral  rounded-none ${
                hovered ? "hovered" : ""
              }`}
            >
              Know more
            </button> */}
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .hovered {
    background-color: white;
    color: #29292a;
  }
`;

export default Card;
