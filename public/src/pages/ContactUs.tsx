import {
  EuiFieldNumber,
  EuiFieldText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiForm,
  EuiFormRow,
  EuiImage,
  EuiTextArea,
} from "@elastic/eui";
import { toast, ToastContainer } from "react-toastify";
import { FaPhone } from "react-icons/fa6";
import { ImLocation2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { addDoc } from "firebase/firestore";
import { workWithUsRef } from "../utils/FirebaseConfig";
import { toastOptions } from "../utils//ToastOptions";
import Footer from "../components/Footer";
import ResponsiveHeader from "../components/ResponsiveHeader";
import { z, ZodError } from "zod"; // Import Zod
import { throttle } from "lodash";

// Define Zod schema for form validation
const formSchema = z.object({
  name: z.string(),
  orgName: z.string(),
  phoneNumber: z.string(),
  email: z.string().email("Invalid email address"),
  message: z.string(),
});

function ContactUs() {
  interface FormData {
    name: string;
    orgName: string;
    phoneNumber: string;
    email: string;
    message: string;
  }
  const [formData, setFormData] = useState<FormData>({
    name: "",
    orgName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const divRef = useRef<HTMLDivElement>(null);

  function scrollToLetter() {
    if (divRef) {
      divRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }

  const handleSubmit = throttle(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      try {
        formSchema.parse(formData);

        try {
          await addDoc(workWithUsRef, formData);
          toast.success("Sent!", toastOptions);
          setFormData({
            name: "",
            orgName: "",
            phoneNumber: "",
            email: "",
            message: "",
          });
        } catch (e) {
          toast.error("Try again later!", toastOptions);
        }
      } catch (error) {
        if (error instanceof ZodError) {
          // Display validation error using toast
          toast.error(
            error.errors[0]?.message || "Validation error",
            toastOptions
          );
        }
      }
    },
    4000
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <ResponsiveHeader scrollToLetter={scrollToLetter} />
      <main className="container">
        <header className="sm:min-h-[40vh] min-h-[20vh] bg-gray-300/40 flex flex-col justify-center ">
          <p className="text-center text-2xl sm:text-3xl  tracking-widest pt-10 sm:pt-0">
            Contact us
          </p>
          <p className="text-4xl sm:text-6xl font-bold  text-slate-900 text-center mt-2">
            We'd love to talk
          </p>
          <div className="flex justify-center gap-2 sm:gap-20 relative top-14 sm:top-28">
            <section className="min-w-28 px-1 py-2 sm:min-w-96 sm:px-8 sm:py-4 bg-white backdrop-blur-sm shadow-2xl  hover:shadow-xl transition-shadow duration-300 ">
              <div className="flex gap-2 sm:gap-4 items-baseline ">
                <FaPhone className="hidden sm:block" />
                <a
                  href="tel:+918692006742"
                  className="text-slate-700 font-bold text-base sm:text-lg "
                >
                  Call us <br />
                  <span className="text-sm sm:text-base">+917977563694</span>
                </a>
              </div>
            </section>
            <section className="min-w-28 px-1 py-2 sm:min-w-96 sm:px-8 sm:py-4 bg-white backdrop-blur-sm shadow-2xl  hover:shadow-xl transition-shadow duration-300 ">
              <div className="flex gap-2 sm:gap-4 justify-start sm:items-baseline ">
                <MdEmail className="hidden sm:block" />
                <a
                  href="mailto:info.squirrelip@gmail.com"
                  className="text-slate-700 font-bold text-base sm:text-lg"
                >
                  Email us <br />
                  <span className="text-xs sm:text-base">
                    info.squirrelip@gmail.com
                  </span>
                </a>
              </div>
            </section>
            <section className="min-w-28 px-1 py-2 sm:min-w-96 sm:px-8 sm:py-4 bg-white backdrop-blur-sm shadow-2xl  hover:shadow-xl transition-shadow duration-300">
              <div className="flex gap-2 sm:gap-4 items-baseline">
                <ImLocation2 className="hidden sm:block" />
                <a
                  href="tel:+918692006742"
                  className="text-slate-700 font-bold text-base sm:text-lg"
                >
                  OUR OFFICE
                  <br />
                  <span className="text-sm sm:text-base">Thane, Mumbai</span>
                </a>
              </div>
            </section>
          </div>
        </header>
        <section
          ref={divRef}
          className="min-h-[60vh] flex flex-col sm:flex-row pt-24 sm:pt-10"
        >
          <div className="flex-1 flex flex-col justify-center">
            <p className="sm:text-center pl-8 sm:pl-0 text-4xl sm:text-5xl font-bold  text-slate-700 ">
              Let's Work Together
            </p>
            <p className="px-8 sm:px-10 mt-3 indent-1 sm:mt-6 text-gray-500 text-xl sm:text-[1.8rem] sm:leading-9">
              Share your innovations, visions for your next project with us now.
              Please contact us for basic questions. We’re always here to help.{" "}
            </p>
          </div>
          <div className="flex-1 py-10 pt-16 sm:pt-16">
            <form onSubmit={handleSubmit} className="px-4 sm:px-20">
              <EuiFlexGroup direction="column">
                <EuiFlexItem>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full name"
                    className="input input-bordered w-full "
                    required
                  />
                </EuiFlexItem>

                <EuiFlexItem>
                  <input
                    type="text"
                    name="orgName"
                    value={formData.orgName}
                    onChange={handleChange}
                    placeholder="Organization name"
                    className="input input-bordered w-full "
                    required
                  />
                </EuiFlexItem>

                <EuiFlexItem>
                  <EuiFlexGroup>
                    <EuiFlexItem>
                      <input
                        type="number"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        className="input input-bordered w-full "
                        required
                      />
                    </EuiFlexItem>
                    <EuiFlexItem>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="input input-bordered w-full "
                        required
                      />
                    </EuiFlexItem>
                  </EuiFlexGroup>
                </EuiFlexItem>
                <EuiFlexItem>
                  <textarea
                    className="textarea textarea-bordered"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    required
                  />
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiFormRow fullWidth={true}>
                    <div className="flex justify-center mt-8">
                      <button
                        type="submit"
                        className="btn btn-neutral btn-wide rounded-none flex-1"
                      >
                        Submit
                      </button>
                    </div>
                  </EuiFormRow>
                </EuiFlexItem>
              </EuiFlexGroup>
            </form>
          </div>
        </section>
        <Footer />
      </main>
      <ToastContainer />
    </>
  );
}

export default ContactUs;
