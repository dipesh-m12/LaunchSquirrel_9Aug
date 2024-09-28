import React, { useState } from "react";
import ResponsiveHeader from "../components/ResponsiveHeader";
import { useNavigate } from "react-router-dom";
import wishlistImg from "../assets/wishlistIcon.svg";
import { BsFillFilterSquareFill } from "react-icons/bs";
import ListedPatentsCard from "../components/Marketplace/ListedPatentsCard";

function MarketPlace() {
  const [activefilterType, setactivefilterType] = useState<number>(1);
  const navigate = useNavigate();
  return (
    <div className="container">
      <ResponsiveHeader scrollToLetter={() => navigate("/")} />
      <div className="bg-[#1A1D29] h-full min-h-[90vh] pb-5">
        <div className="flex justify-center gap-x-12 py-4">
          <p className="text-white font-bold text-xl">All()</p>
          <p className="text-white font-bold text-xl">Available()</p>
          <p className="text-white font-bold text-xl">Sold()</p>
        </div>
        <label className="input bg-[#D9D9D9] my-3 input-bordered flex items-center gap-2 w-[40vw] mx-auto">
          <div className="bg-black p-2 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70  text-white"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            type="text"
            className="grow"
            placeholder="Search by keywords"
          />
        </label>
        <div className="w-[90vw] mx-auto rounded-xl h-full bg-[#DEDFE4] p-9">
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg sm:w-[17vw] bg-white">
            <img src={wishlistImg} className="size-7" />
            Wishlist
          </button>
          <section className="flex items-start">
            <div className="basis-1/5 bg-[#ffffff] py-4 rounded-lg mt-5 px-5">
              <div className="flex items-center gap-x-4 justify-center ">
                <BsFillFilterSquareFill className="size-8" />
                <p className="font-bold text-xl">Filters</p>
              </div>
              <label className="form-control w-full max-w-xs mt-5">
                <div className="label">
                  <span className="label-text">Industry</span>
                </div>
                <select className="select select-bordered">
                  <option disabled selected>
                    Filter by Industry
                  </option>
                  <option>Star Wars</option>
                  <option>Harry Potter</option>
                  <option>Lord of the Rings</option>
                  <option>Planet of the Apes</option>
                  <option>Star Trek</option>
                </select>
                <div className="label"></div>
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Technology</span>
                </div>
                <select className="select select-bordered">
                  <option disabled selected>
                    Filter by technology
                  </option>
                  <option>Star Wars</option>
                  <option>Harry Potter</option>
                  <option>Lord of the Rings</option>
                  <option>Planet of the Apes</option>
                  <option>Star Trek</option>
                </select>
                <div className="label"></div>
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Transaction type</span>
                </div>
                <select className="select select-bordered">
                  <option disabled selected>
                    Select a transition type
                  </option>
                  <option>Star Wars</option>
                  <option>Harry Potter</option>
                  <option>Lord of the Rings</option>
                  <option>Planet of the Apes</option>
                  <option>Star Trek</option>
                </select>
                <div className="label"></div>
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Listed Date</span>
                </div>
                <input
                  type="date"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
                <div className="label"></div>
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Sort By</span>
                </div>
                <select className="select select-bordered">
                  <option disabled selected>
                    Sort By
                  </option>
                  <option>Star Wars</option>
                  <option>Harry Potter</option>
                  <option>Lord of the Rings</option>
                  <option>Planet of the Apes</option>
                  <option>Star Trek</option>
                </select>
                <div className="label"></div>
              </label>
              <div className="join ">
                <button
                  className={`btn btn-outline ${
                    activefilterType === 1 && "btn-active"
                  } border-solid  join-item`}
                  onClick={() => setactivefilterType(1)}
                >
                  Design
                </button>
                <button
                  className={`btn btn-outline ${
                    activefilterType === 2 && "btn-active"
                  } border-solid  join-item`}
                  onClick={() => setactivefilterType(2)}
                >
                  Utility
                </button>
                <button
                  className={`btn btn-outline ${
                    activefilterType === 3 && "btn-active"
                  } border-solid  join-item`}
                  onClick={() => setactivefilterType(3)}
                >
                  Plant
                </button>
              </div>
              <p className="text-right my-3">Clear all</p>
              <div className="flex justify-center mt-9">
                <button className="btn btn-active btn-neutral">Search</button>
              </div>
            </div>
            <div className="basis-4/5 px-5 py-2">
              <div className="mb-4">
                <p className="font-bold text-xl">Applied filters</p>
                <div>
                  <ListedPatentsCard />
                  <ListedPatentsCard />
                  <ListedPatentsCard />
                </div>
                <div className="flex justify-center">
                  <div className="join">
                    <button className="join-item btn">«</button>
                    <button className="join-item btn">Page 22</button>
                    <button className="join-item btn">»</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default MarketPlace;
