import React, { useEffect, useRef, useState } from "react";
import ResponsiveHeader from "../components/ResponsiveHeader";
import logo from "../assets/5127314 1.png";
import c1 from "../assets/Group 37409.svg";
import c2 from "../assets/Group 37407.svg";
import c3 from "../assets/Group 37408.svg";
import c4 from "../assets/Group 37410.svg";
import ServicesBGCard from "../components/Extras/ServicesBGCard";
import ContactForm from "../components/Extras/ContactForm";
import {
  EuiFieldText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiForm,
  EuiFormRow,
} from "@elastic/eui";
import { toast, ToastContainer } from "react-toastify";
import { toastOptions } from "../utils/ToastOptions";
import { addDoc, getDocs, query, where } from "firebase/firestore";
import { aboutRef } from "../utils/FirebaseConfig";
import Footer from "../components/Footer";
import s1 from "../assets/Group 37429.png";
import s2 from "../assets/Group 37430.png";
import s3 from "../assets/Group 37431.png";
import s4 from "../assets/Group 37432.png";
import s5 from "../assets/Group 37433.png";
import Service_GridCard from "../components/Extras/Service_GridCard";
import { useNavigate } from "react-router";
import Letterbox from "../components/Extras/Letterbox";
function Services() {
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
      <section className="py-10 min-h-screen sm:h-auto">
        {/* <p className="font-bold text-slate-900 text-4xl sm:text-6xl text-center ">
          OUR SERVICES
        </p> */}
        <img
          alt="_"
          src={logo}
          className="sm:size-2/3 mx-auto mt-7 sm:mt-0 object-contain"
        />
        <div className="flex gap-2 sm:gap-5 justify-center sm:pt-28 grow sm:px-24 sm:mb-20 pt-60 px-2">
          <ServicesBGCard img={c4} />
          <ServicesBGCard img={c1} />
          <ServicesBGCard img={c3} />
          <ServicesBGCard img={c2} />
        </div>
      </section>
      <section className="grid grid-cols-2 gap-1 sm:gap-14 gap-y-16 sm:gap-y-8 py-14 sm:py-24 grid-rows-2 justify-items-center border-solid border-slate-900 border-8 w-fit sm:px-24 mx-auto px-2 relative">
        <Service_GridCard
          img={s2}
          token="black"
          number={1}
          desc={
            "At SQUIRREL IP, we simplify patent commercialization by connecting innovators with industries through our specialized services. We're also creating a simple platform to speed up this process, helping new ideas get to market faster and more efficiently. "
          }
        />
        <Service_GridCard
          img={s3}
          token="black"
          number={2}
          desc={
            "Our IP Filing Services handle all the paperwork for patents, trademarks, and copyrights. We make sure your intellectual property is properly filed and protected, so you can focus on what matters most—bringing your ideas to life. "
          }
        />
        <Service_GridCard
          img={s5}
          token="black"
          number={3}
          desc={
            "We know some patents aren't ready for industry use. So, we offer custom patent solutions tailored to fit specific industry needs, making innovations practical and valuable for different sectors."
          }
        />
        <Service_GridCard
          img={s4}
          token="black"
          number={4}
          desc={
            "At SQUIRREL IP, we foster a vibrant community where scientists and innovators can collaborate on projects, and discuss the latest advancements in technology. Our platform connects like-minded individuals, facilitating partnerships and driving continuous innovation."
          }
        />
        <img
          alt="_"
          src={s1}
          className="absolute scale-[0.35] top-[35%]  sm:top-20 sm:scale-[0.37]"
        />
      </section>
      {/* <p className="text-4xl sm:text-6xl font-bold text-center mt-40 sm:mt-80 mb-20">
        "WHAT OUR CUSTOMER SAY ABOUT US"
      </p>
      <section className="sm:px-72 mb-16 sm:mb-60">
        <div className="carousel w-full h-44 sm:h-80">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
              className="w-full"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a
                href="#slide4"
                className="btn btn-circle border-solid border-black "
              >
                ❮
              </a>
              <a
                href="#slide2"
                className="btn btn-circle  border-solid border-black"
              >
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
              className="w-full"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
              className="w-full"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
              className="w-full"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </section> */}

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

export default Services;
