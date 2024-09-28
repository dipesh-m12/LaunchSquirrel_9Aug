import React from "react";

function ListedPatentsCard() {
  return (
    <div className="bg-[#ffffff] w-full h-48 p-4 flex items-center mb-1">
      <img
        src={""}
        className="grow-0  h-full aspect-square object-contain bg-gray-400"
        alt="img"
      />
      <div className="h-full px-4 py-2 flex-1">
        <p className="mb-3 font-bold">Dipesh</p>
        <p className="font-bold">Mishra</p>
      </div>
      <div className="grow-0 h-full flex flex-col items-center gap-y-7 pt-8">
        <div className="badge badge-primary badge-outline block border-solid">
          Available
        </div>
        <button className="btn rounded-full bg-slate-900 hover:bg-slate-700 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{ color: "#ffffff" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ListedPatentsCard;
