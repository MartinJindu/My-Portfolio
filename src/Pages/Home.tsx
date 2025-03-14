import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJs } from "react-icons/fa";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import heroImg from "../assets/my_img.jpg";
import { useEffect } from "react";
import { projects } from "../components/data";
import Contact from "./Contact";

const skills = [
  {
    name: "React.js",
    level: "90%",
    icon: <FaReact className="text-blue-400 text-3xl" />,
  },
  {
    name: "Next.js",
    level: "85%",
    icon: <SiNextdotjs className="text-gray-300 text-3xl" />,
  },
  {
    name: "TypeScript",
    level: "85%",
    icon: <SiTypescript className="text-blue-400 text-3xl" />,
  },
  {
    name: "JavaScript",
    level: "85%",
    icon: <FaJs className="text-yellow-400 text-3xl" />,
  },

  {
    name: "Node.js",
    level: "70%",
    icon: <FaNodeJs className="text-green-500 text-3xl" />,
  },
];

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { ref: skillsRef, inView: skillsInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const { ref: projectsRef, inView: projectsInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className=" bg-gradient-to-br from-gray-900 to-gray-800  text-white">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 space-y-6">
        <div>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            <span className="text-blue-500">Hi, I'm</span>{" "}
            <span className="text-amber-500">Okpalanweze Chijindu I.</span>
          </motion.h1>
          <p className="mt-6 font-semibold text-lg sm:text-xl text-gray-300">
            A passionate{" "}
            <span className="text-amber-400">Frontend Developer</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <Link to="/portfolio">
              <motion.button
                className="mt-4 px-4 sm:px-6 py-3 bg-amber-500 rounded-lg text-base sm:text-lg font-semibold hover:bg-amber-600 transition"
                whileHover={{ scale: 1.05 }}
              >
                View My Work
              </motion.button>
            </Link>
            <a
              href="/Okpalanweze_Chijindu.pdf"
              download="Okpalanweze_Chijindu.pdf"
            >
              <motion.button
                className="mt-4 px-4 sm:px-6 py-3 bg-blue-500 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-600 transition"
                whileHover={{ scale: 1.05 }}
              >
                View My Resume
              </motion.button>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={aboutRef}
        className="h-[700px] py-16 flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 bg-gray-900"
      >
        <motion.div
          className="w-full max-w-4xl flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12"
          initial={{ opacity: 0, y: 50 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="relative transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, x: -50 }}
            animate={aboutInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="relative p-1 bg-white bg-opacity-10 backdrop-blur-md shadow-xl rounded-lg">
              <img
                src={heroImg}
                alt="Profile"
                className="w-[250px] sm:w-[300px] h-auto object-cover rounded-lg shadow-lg border-4 border-gray-700"
              />
            </div>
          </motion.div>

          <motion.div
            className="text-center md:text-left w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={aboutInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 2, delay: 0.4 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              About Me
            </h2>
            <p className="mt-4 text-gray-300 text-base sm:text-lg leading-relaxed">
              I'm a passionate{" "}
              <strong className="text-amber-500">Frontend Developer </strong>{" "}
              specializing in building modern, scalable applications using the
              latest technologies. I love turning ideas into reality through
              clean and efficient code.
            </p>
            <p className="mt-2 text-gray-400">
              Technologies I use:{" "}
              <span className="font-bold text-amber-500">
                React, Next.js, TypeScript, Tailwind CSS
              </span>{" "}
              and more.
            </p>

            <motion.button
              className="mt-6 px-4 py-3 bg-amber-500 rounded-lg text-base sm:text-lg hover:bg-amber-600 transition"
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate("/about")}
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className=" py-32 px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center">My Skills</h2>
        <div className="mt-8 space-y-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -50 }}
              animate={skillsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.5, delay: index * 0.3 }}
            >
              {skill.icon}
              <div className="w-full">
                <p className="text-lg">{skill.name}</p>
                <div className="w-full bg-gray-800 rounded-full h-4">
                  <motion.div
                    className="bg-amber-500 h-4 rounded-full"
                    initial={{ width: "0%" }}
                    animate={skillsInView ? { width: skill.level } : {}}
                    transition={{ duration: 2 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="bg-gray-900 py-32 px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center">Projects</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-3 rounded-b-lg hover:shadow-lg transition"
              initial={{ opacity: 0, y: 50 }}
              animate={projectsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: index * 0.3 }}
              whileHover={{ scale: 1.1 }}
            >
              <img
                src={project.img}
                alt={project.name}
                className="w-full object-cover"
              />
              <h3 className="text-2xl font-semibold">{project.name}</h3>
              <Link
                to="/portfolio"
                className="text-amber-400 mt-2 inline-block"
              >
                View Project →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
