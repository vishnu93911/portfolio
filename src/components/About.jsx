import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-28 px-6 text-center">
      
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold mb-16"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto glass p-10 rounded-2xl shadow-xl"
      >
        <p className="text-lg leading-8 text-gray-300">
          I am a <span className="text-indigo-400 font-semibold">Python Full Stack Developer </span> 
          with a strong foundation in building web applications using modern technologies.
        </p>

        <p className="mt-6 text-lg leading-8 text-gray-300">
          I develop scalable and user-friendly applications using{" "}
          <span className="text-indigo-400">Django</span>,{" "}
          <span className="text-indigo-400">React</span>, and{" "}
          <span className="text-indigo-400">MySQL</span>, focusing on clean code, performance, and maintainability.
        </p>

        <p className="mt-6 text-lg leading-8 text-gray-300">
          I have hands-on experience building real-world projects like{" "}
          <span className="text-indigo-400">Job Finder Platform</span> and{" "}
          <span className="text-indigo-400">Expense Management System</span>, implementing{" "}
          <span className="text-indigo-400">authentication</span>,{" "}
          <span className="text-indigo-400">REST APIs</span>, and dynamic user interfaces.
        </p>

        <p className="mt-6 text-lg leading-8 text-gray-300">
          Additionally, I have knowledge in{" "}
          <span className="text-indigo-400">AI/ML</span> and{" "}
          <span className="text-indigo-400">Software Testing</span>, and I continuously
          improve my skills to build efficient and reliable applications.
        </p>
      </motion.div>

    </section>
  );
};

export default About;