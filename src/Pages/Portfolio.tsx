import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../components/data";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div
      className="bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen px-6 md:px-12 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header */}
      <motion.h1
        className="text-5xl md:text-6xl font-bold text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="text-blue-500">My</span>{" "}
        <span className="text-amber-500">Portfolio</span>
      </motion.h1>
      <motion.p
        className="mt-4 text-gray-300 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        A collection of my latest projects showcasing my skills and expertise.
      </motion.p>

      {/* Projects Grid */}
      <motion.div
        className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
          },
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col bg-gray-800 rounded-b-lg overflow-hidden shadow-lg hover:shadow-xl transition"
            whileHover={{ scale: 1.05 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={project.img}
              alt={project.name}
              className="w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold">{project.name}</h3>
              <p className="mt-2 text-gray-400">{project.description}</p>
            </div>
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
              className="flex items-center h-10 px-6 pb-7 justify-between mt-auto"
            >
              <Link
                to={project.link}
                target="_blank"
                className="mt-4 text-amber-400 font-semibold hover:underline"
              >
                View Project →
              </Link>

              <Link
                to={project.github}
                target="_blank"
                className="inline-block h-5 w-5"
              >
                <FaGithub />
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;
