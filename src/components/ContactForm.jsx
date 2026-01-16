import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    emailjs
      .sendForm(
        "service_9z7j54l",
        "template_vj3rpmy",
        form.current,
        "gTxw6jLYP9gq03_Y_"
      )
      .then(
        () => {
          setLoading(false);
          setSuccess("Message sent successfully!");
          form.current.reset();
        },
        () => {
          setLoading(false);
          setSuccess("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div
      className="
        w-full
        lg:w-full
        min-h-screen
        text-white
        flex
        items-center
        justify-center
        px-4 sm:px-6
      "
    >
      <form
        ref={form}
        onSubmit={sendEmail}
        className="
          w-full
          max-w-md
          bg-white/10
          backdrop-blur-md
          border border-white/20
          rounded-2xl
          p-6 sm:p-8
          text-white
          space-y-5
        "
      >
        <h1 className="font-bold text-3xl sm:text-4xl text-center">
          Contact Us
        </h1>

        {/* EMAIL */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-300">Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email"
            required
            className="
              bg-transparent
              border border-white/30
              rounded-lg
              px-4 py-2
              text-white
              placeholder-gray-400
              focus:outline-none
              focus:ring-2
              focus:ring-purple-500
            "
          />
        </div>

        {/* MESSAGE */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-300">Message</label>
          <textarea
            name="message"
            rows={4}
            placeholder="Enter your message"
            required
            className="
              bg-transparent
              border border-white/30
              rounded-lg
              px-4 py-2
              text-white
              placeholder-gray-400
              focus:outline-none
              focus:ring-2
              focus:ring-purple-500
              resize-none
            "
          />
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="
            w-full
            bg-purple-600
            hover:bg-purple-700
            transition
            py-2
            rounded-lg
            font-semibold
            tracking-wide
            disabled:opacity-50
          "
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {/* SUCCESS MESSAGE */}
        {success && (
          <p className="text-center text-green-400 font-medium">
            {success}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
