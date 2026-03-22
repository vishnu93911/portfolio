import { motion } from "framer-motion";
import companyLogo from "../assets/atenas.png"; // 👉 place your image here

const Experience = () => {
  return (
    <section id="experience" className="py-28 px-6">
      <h2 className="text-5xl font-bold text-center mb-20">
        Experience
      </h2>

      <div className="relative max-w-5xl mx-auto">
        
        {/* Timeline Line */}
        <div className="absolute left-5 top-0 h-full w-1 bg-indigo-500"></div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="ml-16 glass p-10 rounded-2xl shadow-xl relative"
        >
          {/* Timeline Dot */}
          <div className="absolute -left-11 top-10 w-6 h-6 bg-indigo-500 rounded-full border-4 border-white"></div>

          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <img
              src={companyLogo}
              alt="Atenas Code"
              className="w-14 h-14 rounded-full border-2 border-indigo-500"
            />

            <div>
              <h3 className="text-3xl font-bold text-indigo-400">
                Associate Software Engineer
              </h3>

              <a
                href="https://atenascode.com/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-indigo-400 transition"
              >
                Atenas Code Pvt Ltd ↗
              </a>
            </div>
          </div>

          {/* Duration */}
          <p className="text-gray-400 mb-4">
            Sep 2025 – Present (6+ Months)
          </p>

          {/* Role */}
          <p className="text-lg font-semibold text-gray-200 mb-6">
            Java Full Stack Developer
          </p>

          {/* Points */}
          <ul className="text-gray-300 leading-8 list-disc pl-6 space-y-3">
            <li>
              Developed and maintained full-stack web applications using Java,
              Spring Boot, JDBC, HTML, CSS, Bootstrap, JavaScript, and MySQL.
            </li>

            <li>
              Designed and implemented RESTful APIs integrating front-end and
              back-end systems for seamless data flow and improved user experience.
            </li>

            <li>
              Built responsive and user-friendly UI components and optimized SQL
              queries to enhance application performance.
            </li>

            <li>
              Collaborated in an Agile development environment, contributing to
              coding, debugging, testing, and deployment using Git for version control.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;