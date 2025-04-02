import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
    const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
    const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

    if (!emailjsServiceId || !emailjsTemplateId || !emailjsPublicKey) {
      console.error("EmailJS environment variables are missing!");
      return;
    }

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      console.log(formData);

      await emailjs.sendForm(emailjsServiceId, emailjsTemplateId, form, {
        publicKey: emailjsPublicKey,
      });
      alert("Message sent successfully!");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error("Failed to send message:", error);
      alert("An error occurred while sending your message.");
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-16 pt-24 md:pt-0">
      {/* Header */}
      <motion.h1
        className="text-5xl md:text-6xl font-bold text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Get in <span className="text-amber-500">Touch</span>
      </motion.h1>
      <p className="mt-4 text-gray-300 text-center">
        Have a project or just want to say hi? Feel free to reach out.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col mt-3 items-center space-y-4 w-full max-w-md"
      >
        <div className="flex flex-col w-full">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="bg-white text-black rounded-sm border-2 border-amber-400 px-2 py-1"
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white text-black rounded-sm border-2 border-amber-400 px-2 py-1"
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className="bg-white text-black rounded-sm border-2 border-amber-400 px-2 py-1"
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="message">Message</label>
          <textarea
            rows={5}
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="bg-white text-black rounded-sm border-2 border-amber-400 px-2 py-1"
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          type="submit"
          className="px-6 py-3 bg-amber-500 rounded-lg font-semibold text-lg cursor-pointer hover:bg-amber-600 transition"
        >
          Submit
        </motion.button>
      </form>

      {/* Social Links */}
      <div className="mt-8 flex space-x-6">
        <motion.a
          href="https://github.com/MartinJindu/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          className="text-3xl text-gray-300 hover:text-white transition"
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/chijindu-okpalanweze/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          className="text-3xl text-gray-300 hover:text-white transition"
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="https://x.com/MartinJindu"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          className="text-3xl text-gray-300 hover:text-white transition"
        >
          <FaTwitter />
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
