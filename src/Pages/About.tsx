import { motion } from "framer-motion";
import aboutPic from "../assets/my_img.jpg";

import Particles from "react-tsparticles";
import { useEffect } from "react";
import Technologies from "../components/Technologies";
import Skills from "../components/Skills";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative flex flex-col items-center px-6 md:px-16 lg:px-32 bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
      {/* Background Animation */}
      <Particles
        className="absolute inset-0 -z-10"
        options={{
          particles: {
            number: { value: 50 },
            size: { value: 3 },
            move: { speed: 1 },
            opacity: { value: 0.1 },
          },
        }}
      />

      {/* About Me Section */}
      <motion.div
        className="flex flex-col md:-mt-20 min-h-screen md:flex-row items-center w-full max-w-5xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Left: About Text */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-blue-500">
            About <span className="text-amber-500">Me</span>
          </h1>
          <p className="text-lg text-gray-300">
            Hi! I'm a passionate{" "}
            <strong className="text-amber-500">Frontend developer</strong> who
            loves creating modern, scalable, and high-performance applications.
            I love turning ideas into reality through clean and efficient code.
            I specialize in React, Next.js, and backend technologies like
            Node.js.
          </p>
        </div>

        {/* Right: Profile Image */}
        <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
          <motion.div
            className="relative transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute inset-0 bg-blue-400 blur-3xl opacity-30"></div>
            <div className="relative p-1 bg-white bg-opacity-10 backdrop-blur-md shadow-xl">
              <img
                src={aboutPic}
                alt="Profile"
                className="w-72 h-72 object-cover shadow-lg border-4 border-gray-700"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Technologies I Work With Section */}
      <Technologies />

      {/* Skills Section */}
      <Skills />
    </div>
  );
};

export default About;
