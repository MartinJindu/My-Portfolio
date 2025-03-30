import { motion } from "framer-motion";
import { FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import { useInView } from "react-intersection-observer";

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

const Technologies = () => {
  const { ref: techRef, inView: techInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      ref={techRef}
      className="flex flex-col mx-auto items-center min-h-96 mt-16 w-full max-w-4xl text-center"
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
  );
};
export default Technologies;
