import { motion } from "framer-motion";
import { useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800  text-white min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-16">
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

      {/* Email Button */}
      <motion.a
        href="mailto:martinchijindu@gmail.com"
        className="flex gap-2 items-center mt-6 px-6 py-3 bg-amber-500 rounded-lg text-lg font-semibold hover:bg-amber-600 transition"
        whileHover={{ scale: 1.05 }}
      >
        Send an Email <FaEnvelope />
      </motion.a>

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
