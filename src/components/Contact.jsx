import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";

const Contact = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); // success | error
  const [lastSent, setLastSent] = useState(0);

  const sendEmail = (e) => {
    e.preventDefault();

    // ⛔ Rate limiting (10 seconds)
    const now = Date.now();
    if (now - lastSent < 10000) {
      setStatus("error");
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        "service_5p2p47e",
        "template_vy06wyl",
        form.current,
        "jW3g5DXUsS7_iBFfi"
      )
      .then(() => {
        setStatus("success");
        setLastSent(Date.now());
        form.current.reset();
      })
      .catch(() => {
        setStatus("error");
      })
      .finally(() => {
        setLoading(false);

        // auto hide message after 3 sec
        setTimeout(() => setStatus(""), 3000);
      });
  };

  return (
    <section id="contact" className="py-28 text-center px-6">
      <h2 className="text-5xl font-bold mb-16">Contact Me</h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="glass max-w-xl mx-auto p-10 rounded-2xl relative"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full mb-4 p-3 rounded-lg bg-transparent border"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full mb-4 p-3 rounded-lg bg-transparent border"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          className="w-full mb-4 p-3 rounded-lg bg-transparent border"
          required
        ></textarea>

        {/* BUTTON */}
        <button
          disabled={loading}
          className="bg-indigo-500 px-6 py-3 rounded-xl hover:scale-105 transition flex items-center justify-center gap-2 w-full"
        >
          {loading ? (
            <>
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>

        {/* POPUP */}
        {status === "success" && (
          <div className="absolute top-[-60px] left-1/2 -translate-x-1/2 bg-green-500 px-6 py-2 rounded-lg text-white shadow-lg">
            ✅ Message sent!
          </div>
        )}

        {status === "error" && (
          <div className="absolute top-[-60px] left-1/2 -translate-x-1/2 bg-red-500 px-6 py-2 rounded-lg text-white shadow-lg">
            ❌ Try again after a few seconds
          </div>
        )}
      </form>

      <div className="flex justify-center gap-6 text-2xl mt-10">
        <a href="https://github.com/vishnu93911" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/vishnuvardhan-donthula-421a99382" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
};

export default Contact;