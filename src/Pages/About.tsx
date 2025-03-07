import { motion } from "framer-motion";
import aboutPic from "../assets/my_img.jpg";
import { FaReact, FaNodeJs, FaJs } from "react-icons/fa";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import { useInView } from "react-intersection-observer";
import Particles from "react-tsparticles";
import { useEffect } from "react";

// Technologies Section
const technologies = [
  { name: "React.js", icon: <FaReact className="text-blue-400 text-4xl" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white text-4xl" /> },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-500 text-4xl" />,
  },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-4xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
];

// Skills Section
const skills = [
  { name: "React", level: 90, icon: <FaReact className="text-blue-400" /> },
  { name: "Next.js", level: 80, icon: <SiNextdotjs className="text-white" /> },
  {
    name: "TypeScript",
    level: 80,
    icon: <SiTypescript className="text-blue-500" />,
  },
  { name: "JavaScript", level: 80, icon: <FaJs className="text-yellow-400" /> },

  { name: "Node.js", level: 70, icon: <FaNodeJs className="text-green-500" /> },
];

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { ref: techRef, inView: techInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: skillsRef, inView: skillsInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

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
      <section
        ref={techRef}
        className="flex flex-col items-center min-h-96 mt-16 w-full max-w-4xl text-center"
      >
        <motion.h2
          className="text-3xl font-semibold text-gray-200 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={techInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          Technologies I Work With
        </motion.h2>
        <motion.div
          className="flex justify-center gap-6 flex-wrap"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={techInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 3 }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="p-4 bg-gray-800 rounded-lg shadow-md flex flex-col items-center"
              whileHover={{ scale: 1.1 }}
            >
              {tech.icon}
              <p className="mt-2 text-gray-300">{tech.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="mt-16 w-full max-w-4xl">
        <motion.h2
          className="text-3xl font-semibold text-gray-200 text-center mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={skillsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          My Skills
        </motion.h2>
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={skillsInView ? { opacity: 1 } : {}}
          transition={{ duration: 2 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="w-full"
              initial={{ opacity: 0, x: -50 }}
              animate={skillsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.4 }}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  {skill.icon}
                  <span className="text-gray-300">{skill.name}</span>
                </div>
                <span className="text-gray-300">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 h-3 rounded-full mt-1">
                <motion.div
                  className="bg-amber-500 h-3 rounded-full"
                  initial={{ width: "0%" }}
                  animate={skillsInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1.5 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default About;
