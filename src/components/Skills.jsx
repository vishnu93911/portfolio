import {
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase
} from "react-icons/fa";

import { SiDjango } from "react-icons/si";

const skills = [
  { name: "Python", level: 90, icon: <FaPython />, top: true },
  { name: "Django", level: 85, icon: <SiDjango />, top: true },
  { name: "React JS", level: 80, icon: <FaReact />, top: true },

  { name: "HTML", level: 80, icon: <FaHtml5 /> },
  { name: "CSS", level: 80, icon: <FaCss3Alt /> },
  { name: "JavaScript", level: 80, icon: <FaJs /> },

  { name: "SQL", level: 95, icon: <FaDatabase /> }
];

const Skills = () => {
  return (
    <section id="skills" className="py-28 text-center px-6">
      <h2 className="text-5xl font-bold mb-20">Tech Stack</h2>

      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, i) => (
          <div
            key={i}
            className={`glass p-6 rounded-xl text-left transition hover:scale-105 ${skill.top ? "border border-indigo-500" : ""
              }`}>
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

            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="bg-indigo-500 h-2 rounded-full transition-all duration-1000"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>

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