import Tilt from "react-parallax-tilt";

const projects = [
  {
    title: "Expense Tracker",
    desc: "Frontend-based expense management system built using HTML, CSS, and JavaScript with JSON for data handling. Supports adding, updating, and deleting expenses with a clean UI.",
    url: "https://github.com/vishnu93911/Expense-Management-System"
  },
  {
    title: "Job Recruiter and Job Seeker role based authentication system",
    desc: "Full-stack blog app with user authentication, CRUD operations, and REST APIs.",
    url: "https://github.com/vishnu93911/django-job-portal"
  },
  {
    title: "Crime Prediction Using AI and ML",
    desc: "Developed a crime prediction system using AI and machine learning techniques to analyze historical data and predict future crime trends, enabling data-driven decision making.",
    url: "https://github.com/vishnu93911/Crime-Prediction-using-ml-and-dl"
  },
  {
    title: "Hostel Management System",
    desc: "Django-based system to manage hostel records with full CRUD functionality and database integration.",
    url: "https://github.com/vishnu93911/Hostel-Management-System"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-28 px-6">
      <h2 className="text-5xl font-bold text-center mb-20">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <Tilt key={i} tiltMaxAngleX={10} tiltMaxAngleY={10}>
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-3xl font-bold text-indigo-400 mb-4">
                {p.title}
              </h3>

              <p className="text-gray-300 leading-7 mb-6">
                {p.desc}
              </p>

              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-lg text-white transition"
                >
                  View Code
                </a>
              )}
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Projects;