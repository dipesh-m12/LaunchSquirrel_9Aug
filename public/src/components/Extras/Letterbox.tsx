import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiForm,
  EuiFormRow,
  EuiFieldText,
} from "@elastic/eui";
import ContactForm from "./ContactForm";
import { throttle } from "lodash"; // Import throttle
import { addDoc, getDocs, query, where } from "firebase/firestore";
import { toast } from "react-toastify";
import { toastOptions } from "../../utils/ToastOptions";
import { aboutRef } from "../../utils/FirebaseConfig";
import { z, ZodError } from "zod"; // Import Zod

// Define Zod schema for email validation
const formSchema = z.object({
  email: z.string().email("Invalid email address"),
});

function Letterbox() {
  const navigate = useNavigate();
  interface FormData {
    email: string;
  }
  const [formData, setFormData] = useState<FormData>({
    email: "",
  });

  const throttledHandleSubmit = throttle(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      // Validate form data using Zod
      try {
        formSchema.parse(formData);

        // If validation succeeds
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
    4000 // 4 seconds
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <p className="font-bold text-center text-xl sm:text-5xl py-6 sm:mb-3">
        We’ll be happy to hear from you.
      </p>
      <div className="flex justify-center">
        <button
          className="btn w-44 sm:btn-wide btn-sm sm:btn-md btn-active btn-neutral"
          onClick={() => {
            navigate("/contactus");
          }}
        >
          Contact Us
        </button>
      </div>
      <div className="hidden sm:flex flex-col">
        <p className="font-bold text-center text-xl sm:text-3xl py-6 mt-6 sm:mb-3">
          Join our wishlist to get premium membership
        </p>
        <ContactForm />
      </div>
      <div className="bg-base-300  border mt-12 shadow-md sm:hidden">
        <div className="sm:bg-base-200 bg-gray-200   flex flex-col h-64 sm:h-72 text-center justify-center px-4 py-4 sm:py-16 font-bold text-xl sm:text-2xl">
          <p className="mb-6">
            Join our wishlist to get <br className="sm:hidden" />
            <span className="text-slate-600 indent-3"> Premium Membership</span>
          </p>
          <div className="px-2 sm:px-20">
            <EuiForm component="form" onSubmit={throttledHandleSubmit}>
              <EuiFlexGroup style={{ gap: "1rem" }}>
                <EuiFlexItem grow>
                  <EuiFormRow fullWidth={true} label="Email">
                    <EuiFieldText
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email address"
                      fullWidth={true}
                      style={{
                        outline: "none",
                        backgroundColor: "#ffffff",
                        color: "#000000ce",
                      }}
                    />
                  </EuiFormRow>
                </EuiFlexItem>
                <EuiFlexItem grow={false}>
                  <button
                    type="submit"
                    className="btn btn-neutral my-auto hover:bg-black-400"
                  >
                    Subscribe
                  </button>
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiForm>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Letterbox;
