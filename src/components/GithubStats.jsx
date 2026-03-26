import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const GithubStats = () => {
  const [profile, setProfile] = useState(null);

  const githubUrl = "https://github.com/vishnu93911";

  useEffect(() => {
    fetch("https://api.github.com/users/vishnu93911")
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, []);

  return (
    <section className="py-24 text-center px-6">
      <h2 className="text-5xl font-bold mb-16">GitHub Stats</h2>

      {/* PROFILE CARD (Clickable) */}
      {profile && (
        <motion.a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.05 }}
          className="block glass max-w-xl mx-auto p-8 rounded-2xl mb-12 shadow-xl cursor-pointer"
        >
          <img
            src={profile.avatar_url}
            alt="avatar"
            className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-indigo-500"
          />

          <h3 className="text-2xl font-bold">{profile.name}</h3>
          <p className="text-gray-400">@{profile.login}</p>

          <div className="flex justify-center gap-8 mt-6 text-sm">
            <div>
              <p className="text-xl font-bold">{profile.public_repos}</p>
              <p className="text-gray-400">Repos</p>
            </div>

            <div>
              <p className="text-xl font-bold">{profile.followers}</p>
              <p className="text-gray-400">Followers</p>
            </div>

            <div>
              <p className="text-xl font-bold">{profile.following}</p>
              <p className="text-gray-400">Following</p>
            </div>
          </div>
        </motion.a>
      )}

      {/* STATS */}
      <div className="flex flex-col md:flex-row justify-center gap-10 mb-12">
        <a href={githubUrl} target="_blank" rel="noreferrer">
          <img
            src={`https://github-readme-stats.vercel.app/api?username=vishnu93911&show_icons=true&theme=tokyonight&cache_seconds=0`}
            alt="github stats"
            className="rounded-xl shadow-lg hover:scale-105 transition"
          />
        </a>

        <a href={githubUrl} target="_blank" rel="noreferrer">
          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=vishnu93911&theme=tokyonight`}
            alt="github streak"
            className="rounded-xl shadow-lg hover:scale-105 transition"
          />
        </a>
      </div>

      {/* GRAPH */}
      <div className="mb-12">
        <a href={githubUrl} target="_blank" rel="noreferrer">
          <img
            src={`https://github-readme-activity-graph.vercel.app/graph?username=vishnu93911&theme=tokyo-night`}
            alt="activity graph"
            className="rounded-xl shadow-lg mx-auto hover:scale-105 transition"
          />
        </a>
      </div>

      
    </section>
  );
};

export default GithubStats;