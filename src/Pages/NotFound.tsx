import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-6">
      {/* Animated 404 Text */}
      <motion.h1
        className="text-8xl font-bold text-blue-500"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        404
      </motion.h1>

      {/* Animated Subtitle */}
      <motion.p
        className="text-xl text-gray-400 mt-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Oops! The page you’re looking for doesn’t exist. 🚀
      </motion.p>

      {/* Go Home Button */}
      <motion.div
        className="mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <Link
          to="/"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300"
        >
          Go Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
