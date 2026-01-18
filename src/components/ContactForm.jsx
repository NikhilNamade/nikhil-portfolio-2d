import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, Send, Phone, Github, Linkedin } from "lucide-react";

const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ msg: "", type: "" });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ msg: "", type: "" });

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
          setStatus({ msg: "Message sent successfully 🚀", type: "success" });
          form.current.reset();
        },
        () => {
          setLoading(false);
          setStatus({ msg: "Something went wrong 😢", type: "error" });
        }
      );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      
      {/* Blue Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-blue-400/20 blur-3xl" />

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="
          relative
          w-full max-w-lg
          bg-white/10 backdrop-blur-xl
          border border-white/20
          rounded-2xl
          p-8
          shadow-2xl
        "
      >
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-white mb-2">
          Get in Touch
        </h2>
        <p className="text-center text-gray-300 mb-8">
          Have a project or opportunity? Let’s connect.
        </p>

        {/* Email */}
        <div className="mb-5">
          <label className="text-sm text-gray-300 mb-1 block">
            Your Email
          </label>
          <div className="
            flex items-center gap-2
            bg-white/5
            border border-white/20
            rounded-lg
            px-4 py-2
            focus-within:ring-2
            focus-within:ring-blue-500
          ">
            <Mail size={18} className="text-blue-500" />
            <input
              type="email"
              name="user_email"
              placeholder="you@example.com"
              required
              className="bg-transparent w-full outline-none text-white placeholder-gray-400"
            />
          </div>
        </div>

        {/* Message */}
        <div className="mb-6">
          <label className="text-sm text-gray-300 mb-1 block">
            Message
          </label>
          <textarea
            name="message"
            rows={4}
            placeholder="Tell me about your project..."
            required
            className="
              w-full
              bg-white/5
              border border-white/20
              rounded-lg
              px-4 py-3
              text-white
              placeholder-gray-400
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              resize-none
            "
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="
            w-full
            flex items-center justify-center gap-2
            bg-gradient-to-r from-blue-600 to-blue-500
            hover:scale-[1.02]
            transition-transform
            py-3
            rounded-lg
            font-semibold
            text-white
            disabled:opacity-50
          "
        >
          {loading ? "Sending..." : "Send Message"}
          <Send size={18} />
        </button>

        {/* Status Message */}
        {status.msg && (
          <p
            className={`mt-4 text-center font-medium ${
              status.type === "success"
                ? "text-blue-400"
                : "text-red-400"
            }`}
          >
            {status.msg}
          </p>
        )}

        {/* Social & Contact Icons */}
        <div className="mt-8 flex justify-center gap-6">
          
        

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/nikhil-namade-34b063281/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400 transition hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/NikhilNamade"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400 transition hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/Nikhil_Namade/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
            className="group hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
          >
            <svg
              className="w-4 h-4 fill-blue-500 group-hover:fill-blue-400 transition"
              viewBox="0 0 24 24"
            >
              <path d="M16.07 2.005c-.37.05-.74.23-1.03.53l-2.64 2.7a1.5 1.5 0 002.12 2.12l1.86-1.9 3.77 3.8a4.5 4.5 0 010 6.36l-4.94 5a4.5 4.5 0 01-6.36 0l-3.9-3.94a1.5 1.5 0 10-2.12 2.12l3.94 3.94a7.5 7.5 0 0010.6 0l4.94-5a7.5 7.5 0 000-10.6l-3.77-3.8 1.9-1.94a1.5 1.5 0 00-1.11-2.57z" />
            </svg>
          </a>

        </div>
      </motion.form>
    </section>
  );
};

export default ContactForm;
