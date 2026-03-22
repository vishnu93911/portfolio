import { Link } from "react-scroll";

const Navbar = ({ contrastMode, setContrastMode }) => {
  return (
    <nav className="fixed w-full top-0 z-40 glass p-4 flex justify-between items-center">
      
      <h1 className="text-xl font-bold text-indigo-400">
        Portfolio
      </h1>

      <div className="hidden md:flex gap-8 items-center">
        {["about","skills","projects","experience","contact","certifications"].map((item) => (
          <Link
            key={item}
            to={item}
            smooth
            duration={500}
            className="cursor-pointer hover:text-indigo-400 capitalize"
          >
            {item}
          </Link>
        ))}

        {/* ✅ High Contrast Mode Toggle */}
        <button
          onClick={() => setContrastMode(!contrastMode)}
          className="border px-4 py-1 rounded-lg hover:bg-indigo-500 transition"
        >
          {contrastMode ? "🌙 Normal" : "🔆 High Contrast"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;