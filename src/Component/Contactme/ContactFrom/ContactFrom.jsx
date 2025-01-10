"use client";
import React, { useRef, useState } from "react";
import "./ContactFrom.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const ContactFrom = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading
    emailjs
      .sendForm(
        "service_vfij11a",
        "template_blywdsr",
        form.current,
        "3CqoWZfneUNDFwJ-2"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!", {
            position: "bottom-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to send message. Please try again.", {
            position: "bottom",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          console.error(error.text);
        }
      )
      .finally(() => {
        setIsLoading(false); // End loading
      });
  };

  return (
    <div className="md:mx-0 mx-2">
      <div className="contact-from">
        <form ref={form} onSubmit={sendEmail}>
          <div className="name-contaner">
            <input
              name="to_name"
              required
              type="text"
              placeholder="First Name"
            />
            <input
              name="to_names"
              required
              type="text"
              placeholder="Last Name"
            />
          </div>
          <input
            name="from_name"
            required
            type="email"
            placeholder="Enter your email address"
          />
          <textarea required name="message" placeholder="Message"></textarea>
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactFrom;
