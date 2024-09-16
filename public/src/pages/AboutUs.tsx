import React, { useEffect, useRef, useState } from "react";
import ResponsiveHeader from "../components/ResponsiveHeader";
import asideimg from "../assets/Group 37426.png";
import AboutCard from "../components/Extras/AboutCard";
import pedal from "../assets/Rectangle 4451.png";
import bits from "../assets/Rectangle 4452.png";
import A_AchievementsCard from "../components/Extras/A_AchievementsCard";
import poster from "../assets/Team of business people putting hands up together 1 (1).png";
import Counter from "../components/Extras/Counter";
import Footer from "../components/Footer";
import ContactForm from "../components/Extras/ContactForm";
import { addDoc, getDocs, query, where } from "firebase/firestore";
import { aboutRef } from "../utils/FirebaseConfig";
import { toastOptions } from "../utils//ToastOptions";
import {
  EuiFieldText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiForm,
  EuiFormRow,
} from "@elastic/eui";
import { toast, ToastContainer } from "react-toastify";
import prasad from "../assets/prasad-karhad-5~2.png";
import akshat from "../assets/IMG-20231126-WA0002~2.jpg";
import sam from "../assets/IMG-20240807-WA0009~2.png";
import { useNavigate } from "react-router";
import Letterbox from "../components/Extras/Letterbox";

function AboutUs() {
  const navigate = useNavigate();
  interface FormData {
    email: string;
  }
  interface FormErrors {
    email: string;
  }
  const [formData, setFormData] = useState<FormData>({
    email: "",
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({
    email: "",
  });
  const divRef = useRef<HTMLDivElement>(null);
  function scrollToLetter() {
    if (divRef) {
      divRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }
  const errors: Partial<FormData> = {};

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (Object.keys(errors).length === 0) {
      try {
        const q = query(aboutRef, where("email", "==", formData.email));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
          await addDoc(aboutRef, formData);
          toast.success("Sent!", toastOptions);
        } else {
          console.log(1);
          toast.warn("You are already queued", toastOptions);
        }
      } catch (e) {
        toast.warn("Try again later!", toastOptions);
      }
    }
  };

  useEffect(() => {
    Object.keys(formData).forEach((key) => {
      if (!formData[key as keyof FormData]) {
        errors[key as keyof FormErrors] = "This field is required";
      }
    });
    setFormErrors(errors as FormData);
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <>
      <ResponsiveHeader scrollToLetter={scrollToLetter} />
      <header className="min-h-[45vh] sm:min-h-[70vh] bg-[#F4F5F5]">
        <p className="sm:text-7xl text-2xl text-center font-bold pt-36 pb-10 sm:pt-56 sm:pb-14">
          “Protect. Collaborate. Innovate.”
        </p>
        <p className="text-gray-500 text-lg sm:text-3xl text-center px-7">
          Safe-guard your innovations,
          <br className="sm:hidden" /> Connect with scientists & Turn visions
          into reality
        </p>
      </header>
      <section className="flex flex-col sm:flex-row pt-10 sm:pt-20 mb-10 sm:mb-15 ">
        <img
          alt="_"
          src={asideimg}
          className="scale-75 sm:scale-75 basis-1/3"
        />
        <p className="text-xl sm:text-3xl bg-slate-800 w-[90vw] mx-auto  text-justify text-white basis-2/3 px-4 sm:px-16 py-5 sm:py-24 h-fit sm:h-[67vh]  sm:right-40  relative bottom-20 sm:top-7">
          {/* relative bottom-20 sm:top-16 */}
          At SQUIRREL IP, we're creating an online platform to connect
          industries with scientists and streamline innovation. We offer
          comprehensive services for technology commercialization, including
          patent, trademark, and copyright filing, as well as custom patent
          creation. Our goal is to support new technologies and build a vibrant
          community of innovators through our dedicated portal.
        </p>
      </section>
      <section className="mb-20 sm:mb-24">
        <p className="text-4xl sm:text-6xl font-bold text-center mb-7 sm:mb-20">
          Our Team
        </p>
        <div className="flex flex-wrap gap-1 sm:gap-5 justify-center px-2  sm:px-24 pb-4">
          <AboutCard
            img={akshat}
            title="Samruddhi Khanvilkar"
            desc="Co-founder & CEO"
            link="https://www.linkedin.com/in/samruddhi-khanvilkar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          />
          <AboutCard
            img={sam}
            title="Akshat Mohite"
            desc="Co-founder & COO"
            link="https://www.linkedin.com/in/cosmoakshat?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          />
          <AboutCard
            img={prasad}
            title="Prasad Karhad"
            desc="Of. Legal Counsel"
            link="https://www.linkedin.com/in/prasadkarhad?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          />
        </div>
      </section>
      <section className="flex flex-col sm:flex-row py-9 sm:py-20 px-4 sm:px-24 gap-7 sm:gap-12 mb-12 sm:mb-16 sm:pt-52 pt-0">
        <div className="basis-2/5 sm:self-center">
          {/* <p className="text-gray-600 text-lg sm:text-3xl">Achievements</p> */}
          <p className="text-slate-900 font-bold text-4xl sm:text-7xl mb-6 text-center sm:text-left">
            Our
            <br className="hidden sm:flex" /> Achievements
          </p>
          <p className="text-gray-400 text-lg sm:text-2xl">
            At Squirrel IP, we are proud to have worked with PedalStart and
            BGIIES BITS Goa. These partnerships have greatly helped our growth
            and innovation, setting us up for success in patent
            commercialization.
          </p>
        </div>
        <div className="sm:basis-3/5 basis-full flex gap-1 sm:gap-5">
          <A_AchievementsCard
            img={pedal}
            desc=" PedalStart provides us with invaluable mentorship and resources, helping us refine our business strategies and accelerate our growth. Their extensive network of industry experts offers us guidance on navigating market challenges and seizing opportunities."
          />
          <A_AchievementsCard
            img={bits}
            desc=" BGIIES BITS Goa offers us an incubation environment and research resources. Their academic expertise and industry connections provide us with critical insights and collaboration opportunities. Being part of this prestigious institution helps us attract top talent and enhances our credibility in the market. Their comprehensive support in legal, financial, and administrative matters ensures we operate smoothly and efficiently. "
          />
        </div>
      </section>
      <section className="py-4 sm:py-20 px-4 sm:px-24 mt-20">
        <p className="text-center font-bold text-5xl sm:text-6xl pt-7 sm:pt-0">
          Our Portal
        </p>
        <img alt="_" src={poster} className="mx-auto" />
        <div className="px-5 sm:px-56">
          <p className="text-gray-600 text-lg sm:text-3xl mb-12 sm:mb-28 text-justify">
            We're excited to announce that we’re building a new online platform
            to make patent commercialization easier than ever. This portal will
            seamlessly connect industries with groundbreaking innovators, making
            the process of bringing new inventions to market faster and more
            efficient. Keep an eye out for our launch—we’re excited to help you
            bring your ideas to life!
          </p>
        </div>
        <p className="font-bold text-5xl sm:text-7xl mb-6 text-center tracking-wide">
          Coming Soon!
        </p>
        {/* <Counter /> */}
      </section>
      <section
        ref={divRef}
        className="bg-gray-200 w-[90vw] sm:w-[70vw] mx-auto py-12 sm:py-18 px-4 sm:px-24 rounded-lg shadow-md relative top-40"
      >
        <Letterbox />
      </section>
      <footer className="bg-slate-950 min-h-32"></footer>
      <footer>
        <Footer />
      </footer>
      <ToastContainer />
    </>
  );
}

export default AboutUs;
