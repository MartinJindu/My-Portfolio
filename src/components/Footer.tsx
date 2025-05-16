import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-900  text-gray-300 py-10 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} Okpalanweze Chijindu I.
      </p>
      <div className="flex justify-center space-x-4 mt-2">
        <motion.a
          href="https://github.com/MartinJindu/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          className="text-xl text-gray-400 hover:text-white transition"
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/chijindu-okpalanweze/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          className="text-xl text-gray-400 hover:text-white transition"
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="https://x.com/MartinJindu"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          className="text-xl text-gray-400 hover:text-white transition"
        >
          <FaXTwitter />
        </motion.a>
        <motion.a
          href="mailto:martinchijindu@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          className="text-xl text-gray-400 hover:text-white transition"
        >
          <FaEnvelope />
        </motion.a>
      </div>
    </footer>
  );
};

export default Footer;
