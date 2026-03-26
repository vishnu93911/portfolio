import { motion } from "framer-motion";

const certifications = [
  {
    title: "Cisco Cybersecurity - virtual intership",
    link: "https://drive.google.com/file/d/1Mf9BidSsLFbDNCEt4vauSmUHahSjdFbB/view?usp=sharing",
  },
  {
    title: "Machine Learning and Data Science - NIT(Trichy)",
    link: "https://drive.google.com/file/d/13q_AcnH5z_8KRFAIpQChq48glLlgd9-2/view?usp=sharing",
  },
  {
    title: "Python Full Stack Developer - 10k coders Institute",
    link: "",
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-28 px-6 text-center">
      
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold mb-16"
      >
        Certifications
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {certifications.map((cert, i) => (
          <motion.a
            key={i}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass p-6 rounded-2xl text-lg font-semibold hover:text-indigo-400 hover:scale-105 transition shadow-lg"
          >
            📜 {cert.title}
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Certifications;