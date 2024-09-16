import comingsoon from "../assets/Team of business people putting hands up together 1 (1).png";
import Footer from "../components/Footer";
import c1 from "../assets/Group 37409.svg";
import c2 from "../assets/Group 37407.svg";
import c3 from "../assets/Group 37408.svg";
import c4 from "../assets/Group 37410.svg";
import Card from "../components/Extras/Card";
import asideimg from "../assets/37184 1.png";
import pedal from "../assets/Rectangle 4451.png";
import bits from "../assets/Rectangle 4452.png";
import {
  EuiFieldText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiForm,
  EuiFormRow,
} from "@elastic/eui";

import ResponsiveHeader from "../components/ResponsiveHeader";
import str from "../assets/stars 1.svg";
import w1 from "../assets/jigsaw 1.svg";
import w2 from "../assets/bridge 1.svg";
import w3 from "../assets/community (1) 1.svg";
import w4 from "../assets/responsive 1.svg";
import LandingCard from "../components/Extras/LandingCard";
import Counter from "../components/Extras/Counter";
import ContactForm from "../components/Extras/ContactForm";
import { useEffect, useRef, useState } from "react";
import { aboutRef } from "../utils/FirebaseConfig";
import { toastOptions } from "../utils/ToastOptions";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router";
import Letterbox from "../components/Extras/Letterbox";

function Landing() {
  const navigate = useNavigate();

  const divRef = useRef<HTMLDivElement>(null);
  function scrollToLetter() {
    if (divRef) {
      divRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="container">
      <ResponsiveHeader scrollToLetter={scrollToLetter} />

      <header className="flex flex-col sm:flex-row min-w-full min-h-[90vh] px-6 sm:px-24 bg-[#3d3f4a] bg-opacity-5">
        <div className="sm:basis-2/3 flex flex-col pt-20 sm:pt-36 ">
          <p className="font-bold text-[1.35rem] sm:text-6xl mb-8 sm:mb-6 text-slate-800  ">
            "Protect. Collaborate. Innovate"
          </p>
          <p className="text-gray-500 text-lg sm:text-2xl sm:pl-8">
            Say GoodBye to slow commercialization
          </p>
          <p className="text-gray-500 text-lg sm:text-2xl  sm:pl-8">
            Hello to the marketplace of your invention
          </p>
          <p className="text-slate-700 text-lg text-center sm:text-[1.92rem] mt-16 sm:mt-36  sm:pl-2">
            Join and Unlock world of possibilities
          </p>
          <section className="flex gap-4 sm:gap-4 justify-center sm:justify-center px-8 py-12 sm:py-6">
            <button
              className="btn  btn-outline btn-md sm:btn-wide shadow-lg border-solid"
              onClick={() => {
                scrollToLetter();
              }}
            >
              Join the Wishlist
            </button>
            <button
              className="btn w-40 btn-neutral sm:btn-wide"
              onClick={() => {
                navigate("/aboutus");
              }}
            >
              About Us
            </button>
          </section>
        </div>
        <div className="sm:basis-1/3 ">
          <img
            alt="_"
            src={comingsoon}
            className="  my-5 mb-7 sm:mb-10 sm:my-0 sm:mt-5  size-11/12 mx-auto sm:size-auto mix-blend-multiply"
          />
          {/* <Counter /> */}
        </div>
      </header>
      <main className="">
        <section className=" py-6  pt-20  sm:py-20 mb-20">
          <p className=" text-center font-bold text-3xl sm:text-5xl sm:mb-5 ">
            "What We Offer"
          </p>
          <div className="grid sm:grid-cols-4 sm:grid-rows-1 grid-cols-2 grid-rows-2 justify-items-center gap-y-16 px-2 sm:px-36 pt-28 pb-20 gap-0 sm:gap-6">
            <Card
              img={c4}
              title="Patent
Commercialization"
              desc="The commercialization of a patent ensures that no one else can copy your invention and that the owner can profit financially from it"
            />
            <Card
              img={c1}
              title="Patent
Customization"
              desc="A design patent is a form of legal protection of the unique visual qualities of a manufactured item."
            />
            <Card
              img={c3}
              title="Workforce
Community"
              desc="Workplace communities take many forms. These forms include employee resource groups, communities of practice, learning communities"
            />
            <Card
              img={c2}
              title="Patent
Filing"
              desc="Safeguards your innovative idea and grants you exclusive rights for 20 years."
            />
          </div>
          <div className="flex justify-center">
            <button
              className="btn btn-wide btn-neutral rounded-none text-lg"
              onClick={() => {
                navigate("/services");
              }}
            >
              Know in Detail
            </button>
          </div>
        </section>
        <img
          alt="_"
          src={str}
          className="size-7 mx-auto relative right-36 top-10"
        />
        <section className=" py-6 px-6 sm:px-24 ">
          <div className="bg-[#DEDFE4] pb-6 ">
            <p className=" text-center font-bold text-3xl  sm:text-5xl relative bottom-4 sm:bottom-7 mb-12 ">
              "WHY US"
            </p>
            <p className="text-lg sm:text-2xl text-center px-6 sm:px-48">
              Choose SQUIRREL IP for a game-changing experience in innovation.
              Our E-platform connects industries with leading scientists, and
              our all-in-one hub simplifies patents, trademarks, and custom IP.
              Connect with us to turn your ideas into success and join a lively
              tech community.
            </p>
            <div className="grid grid-cols-2 grid-rows-2 sm:grid-rows-1 sm:grid-cols-4  mt-7 sm:mt-20  sm:gap-20 sm:px-44  place-content-center px-1">
              <LandingCard
                img={w1}
                title="E-Platform"
                desc="Explore SQUIRREL IP’s platform for an easy way to showcase, buy, and sell patents. Connect, trade, and innovate effortlessly on our vibrant hub."
              />
              <LandingCard
                img={w2}
                title="Community"
                desc="Join SQUIRREL IP’s lively community to work with innovators and experts, pushing new ideas forward. Connect, share, and succeed together in a network focused on top-notch technology. "
              />
              <LandingCard
                img={w3}
                title="Bridge"
                desc="Squirrel IP connects top scientists with innovative industries, turning new research into practical solutions. This partnership speeds up progress and helps both science and business grow together. "
              />
              <LandingCard
                img={w4}
                title="All in 1"
                desc="Squirrel IP is your one-stop shop for all things patents—customizing, filing, and commercializing them. Plus, we connect scientists and create a community where ideas can thrive and turn into market-ready innovations."
              />
            </div>
          </div>
        </section>
        <section className="  ">
          <p className="text-center font-bold text-3xl sm:text-5xl pt-12 sm:pt-48 sm:py-6 sm:mb-12  ">
            "SUPPORTED BY"{" "}
          </p>
          <div className="flex justify-center flex-wrap">
            <div className="flex sm:w-1/3 w-[40vw] ">
              <img
                alt="_"
                src={pedal}
                className=" scale-[0.65] object-contain sm:static"
              />
            </div>
            <div className="flex sm:w-1/3 w-[40vw]">
              <img
                alt="_"
                src={bits}
                className="  scale-75 mx-auto sm:static object-contain mix-blend-multiply"
              />
            </div>
          </div>
        </section>
        <section
          ref={divRef}
          className="bg-gray-200 w-[90vw] sm:w-[70vw] mx-auto py-12 sm:py-18 px-4 sm:px-24 rounded-lg shadow-md relative top-40"
        >
          <Letterbox />
        </section>
      </main>
      <footer className="bg-slate-950 min-h-32"></footer>
      <footer>
        <Footer />
      </footer>
      <ToastContainer />
    </div>
  );
}

export default Landing;
