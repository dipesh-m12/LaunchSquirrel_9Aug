import React, { useState } from "react";
import { toast } from "react-toastify";
import { throttle } from "lodash"; // Import throttle
import { addDoc, getDocs, query, where } from "firebase/firestore";
import { toastOptions } from "../../utils/ToastOptions";
import { aboutRef } from "../../utils/FirebaseConfig";
import { z, ZodError } from "zod"; // Import Zod

// Define Zod schema for email validation
const formSchema = z.object({
  email: z.string().email("Invalid email address"),
});

function ContactForm() {
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
          console.log(error.errors);
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
    <form onSubmit={throttledHandleSubmit} className="flex w-[40vw] mx-auto">
      <div className="flex-grow">
        <label className="input input-bordered flex items-center gap-2">
          Email
          <input
            type="text"
            onChange={handleChange}
            name="email"
            className="grow rounded-none"
            placeholder="WeAdmireInventors@gmail.com"
            required
          />
        </label>
      </div>
      <div>
        <button
          className="btn btn-neutral rounded-none relative right-2"
          type="submit"
        >
          Subscribe
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
