import {
  FaJava,
  FaReact,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap
} from "react-icons/fa";
import {
  SiSpringboot,
  SiMysql,
  SiCloudinary
} from "react-icons/si";

const skills = [
  { name: "Java", level: 90, icon: <FaJava />, top: true },
  { name: "Spring Boot", level: 85, icon: <SiSpringboot />, top: true },
  { name: "React", level: 80, icon: <FaReact />, top: true },

  { name: "HTML", level: 85, icon: <FaHtml5 /> },
  { name: "CSS", level: 80, icon: <FaCss3Alt /> },
  { name: "JavaScript", level: 80, icon: <FaJs /> },
  { name: "Bootstrap", level: 75, icon: <FaBootstrap /> },

  { name: "MySQL", level: 75, icon: <SiMysql /> },
  { name: "JWT Security", level: 80, icon: <FaDatabase /> },
  { name: "REST APIs", level: 85, icon: <FaDatabase /> },
  { name: "Cloudinary", level: 70, icon: <SiCloudinary /> },
  { name: "Google OAuth", level: 75, icon: <FaDatabase /> }
];

const Skills = () => {
  return (
    <section id="skills" className="py-28 text-center px-6">
      <h2 className="text-5xl font-bold mb-20">Tech Stack</h2>

      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, i) => (
          <div
            key={i}
            className={`glass p-6 rounded-xl text-left transition hover:scale-105 ${
              skill.top ? "border border-indigo-500" : ""
            }`}
          >
            {/* Icon + Title */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl text-indigo-400">
                {skill.icon}
              </span>

              <h3 className="text-lg font-semibold">
                {skill.name}
              </h3>

              {skill.top && (
                <span className="ml-auto text-xs bg-indigo-500 px-2 py-1 rounded">
                  ⭐ Top
                </span>
              )}
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="bg-indigo-500 h-2 rounded-full transition-all duration-1000"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>

            {/* Percentage */}
            <p className="text-sm text-gray-400 mt-2">
              {skill.level}%
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;