import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { LiaFacebookSquare } from "react-icons/lia";
import squirrel from "../assets/Squirrel IP-logos_white (2) 2.svg";
import { EuiImage } from "@elastic/eui";
import { FaPhone } from "react-icons/fa6";
import { ImLocation2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import s1 from "../assets/social (1) 1.svg";
import s2 from "../assets/social 1.svg";
import { useNavigate } from "react-router";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoMail } from "react-icons/io5";

function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="min-h-[70vh] pb-20 sm:pb-20  sm:min-h-[20vh] bg-slate-950 flex  flex-col sm:flex-row sm:items-center sm:py-5 sm:pt-10">
      <div className=" flex flex-wrap flex-grow justify-around px-4 sm:justify-evenly pt-20 sm:pt-0">
        <div className="pt-5 w-full sm:w-auto">
          <img alt="_" src={squirrel} className="size-24 block mx-auto" />
          <p className="sm:text-center text-gray-300 sm:text-2xl font-bold mt-4 mb-2 text-center">
            Follow us on
          </p>
          <section className="flex justify-center gap-3">
            <a
              href="mailto:info.squirrelip@gmail.com"
              className="text-gray-400"
            >
              <IoMail className="scale-125" />
            </a>
            <a
              href="https://www.linkedin.com/in/samruddhi-khanvilkar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              className="text-gray-400"
            >
              <IoLogoLinkedin />
            </a>
          </section>
        </div>
        <div className=" flex flex-col pt-6 sm:pt-10 gap-2">
          <p className="font-bold text-xl sm:text-3xl text-gray-200 mb-4 sm:mb-2">
            Contact Us
          </p>
          <div>
            {" "}
            <FaPhone className="inline-block text-gray-300" />
            <a
              href="tel:+918692006742"
              className="text-gray-400 ml-2 hover:underline text-md sm:text-lg"
            >
              +918692006742
            </a>
          </div>
          <div>
            {" "}
            <MdEmail className="inline-block text-gray-300" />
            <a
              href="mailto:info.squirrelip@gmail.com"
              className="text-gray-400 ml-2 hover:underline text-md sm:text-lg"
            >
              info.squirrelip@gmail.com
            </a>
          </div>
          <div>
            {" "}
            <ImLocation2 className="inline-block text-gray-300" />
            <a
              href="#"
              className="text-gray-400 ml-2 hover:underline text-md sm:text-lg"
            >
              Thane,Mumbai
            </a>
          </div>
        </div>
        <div className=" sm:flex flex-col pt-6 sm:pt-10 gap-2 hidden ">
          <p className="font-bold text-xl sm:text-3xl text-gray-200 mb-4 sm:mb-2">
            Services
          </p>
          <p className=" text-gray-400 text-md sm:text-lg">Patent Filing</p>
          <p className=" text-gray-400 text-md sm:text-lg">
            Patent Commercialization
          </p>
          <p className=" text-gray-400 text-md sm:text-lg">
            Patent Customization
          </p>
          <p className=" text-gray-400 text-md sm:text-lg">
            Patent Workforce Community
          </p>
        </div>
        <div className=" flex flex-col pt-6 sm:pt-10  gap-2">
          <p className="font-bold text-xl sm:text-2xl text-gray-200 mb-4 sm:mb-2">
            Pages
          </p>
          <a
            onClick={() => {
              navigate("/aboutus");
            }}
            className="text-gray-400  hover:underline text-md sm:text-lg"
          >
            About
          </a>
          <a
            onClick={() => {
              navigate("/services");
            }}
            className="text-gray-400  hover:underline text-md sm:text-lg"
          >
            Services
          </a>

          <a
            onClick={() => {
              navigate("/contactus");
            }}
            className="text-gray-400  hover:underline text-md sm:text-lg"
          >
            Contact us
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
