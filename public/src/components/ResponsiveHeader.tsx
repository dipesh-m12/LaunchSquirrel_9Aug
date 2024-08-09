import React from "react";
import squirrel from "../assets/3f5cd156-1212-4c7d-ae59-cfcccb691678 1.svg";
import { TiThMenu } from "react-icons/ti";
import { EuiHorizontalRule } from "@elastic/eui";
import { useNavigate } from "react-router";
function ResponsiveHeader({ scrollToLetter }: { scrollToLetter: () => void }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full flex  sm:gap-12 min-h-[7vh] sm:min-h-[10vh] bg-[#1A1D29] bg-opacity-5 backdrop-blur-md shadow-md fixed max-h-[10vh] items-center justify-between px-3 sm:px-12   z-10">
        <div className=" sm:grow-0 mr-auto">
          <img alt="_" src={squirrel} className="size-20 sm:size-20" />
        </div>
        <div role="tablist" className="tabs ml-auto hidden sm:flex sm:mr-9">
          <a
            role="tab"
            className="tab tab-active text-bold text-xl"
            onClick={() => {
              navigate("/landing");
            }}
          >
            Home
          </a>
          <a
            role="tab"
            className="tab text-bold text-xl"
            onClick={() => {
              navigate("/aboutus");
            }}
          >
            About
          </a>
          <a
            role="tab"
            className="tab text-bold text-xl"
            onClick={() => {
              navigate("/services");
            }}
          >
            Services
          </a>
        </div>

        <div className="grow-0 ">
          <button
            className="btn btn-neutral text-lg rounded-none w-24 sm:w-40"
            onClick={scrollToLetter}
          >
            Join us
          </button>
        </div>
        <div className=" drawer sm:hidden w-12 ">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
              className="btn  drawer-button bg-transparent"
            >
              <TiThMenu className="scale-150" />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              {/* Sidebar content here */}
              <li>
                <a className="text-slate-700">Home</a>
              </li>
              <EuiHorizontalRule style={{ margin: 0 }} />
              <li>
                <a className="text-slate-700">About</a>
              </li>
              <EuiHorizontalRule style={{ margin: 0 }} />

              <li>
                <a className="text-slate-700">Services</a>
              </li>
              <EuiHorizontalRule style={{ margin: 0 }} />
            </ul>
          </div>
        </div>
      </div>
      <div className="min-h-[8vh] sm:min-h-[10vh]"></div>
    </>
  );
}

export default ResponsiveHeader;
