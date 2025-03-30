import { motion } from "framer-motion";
import { FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import { useInView } from "react-intersection-observer";

// Skills Section
const skills = [
  {
    name: "React",
    level: 90,
    icon: <FaReact className="text-blue-400 text-3xl" />,
  },
  {
    name: "Next.js",
    level: 80,
    icon: <SiNextdotjs className="text-white text-3xl" />,
  },
  {
    name: "TypeScript",
    level: 80,
    icon: <SiTypescript className="text-blue-500 text-3xl" />,
  },
  {
    name: "JavaScript",
    level: 80,
    icon: <FaJs className="text-yellow-400 text-3xl" />,
  },

  {
    name: "Node.js",
    level: 70,
    icon: <FaNodeJs className="text-green-500 text-3xl" />,
  },
];

const Skills = () => {
  const { ref: skillsRef, inView: skillsInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section ref={skillsRef} className="mx-auto mt-16 w-full max-w-4xl">
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
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: -50 }}
            animate={skillsInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.4 }}
          >
            {skill.icon}
            <div className="w-full">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
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
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
export default Skills;
