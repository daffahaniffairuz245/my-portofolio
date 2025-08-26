import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const form = useRef();

  // Scroll-to-top logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Warna teks untuk Light & Dark Mode
  const textLight = "text-gray-700";
  const textDark = "text-gray-300";
  const bgLight = "bg-gray-50";
  const bgDark = "bg-gray-900";
  const cardBgLight = "bg-white";
  const cardBgDark = "bg-gray-800";

  // Fungsi kirim email
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_jsag9ij", // ganti dengan Service ID dari EmailJS
        "template_jsukvtq", // ganti dengan Template ID
        form.current,
        "9p7F_w5YZSln7TPR_" // Public Key Anda
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Oops! Something went wrong: " + error.text);
        }
      );
  };

  return (
    <div
      className={
        darkMode ? `dark ${bgDark} ${textDark}` : `${bgLight} ${textLight}`
      }
    >
      {/* Navbar */}
      <nav
        className={
          darkMode
            ? "fixed w-full bg-gray-800 shadow-md z-10"
            : "fixed w-full bg-white shadow-md z-10"
        }
      >
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1
            className={
              darkMode ? "text-gray-100 font-bold" : "text-gray-800 font-bold"
            }
          >
            Daffa Hanif Fairuz
          </h1>
          <div className="space-x-6 flex items-center">
            {["About", "Projects", "Skills", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={
                  darkMode
                    ? "hover:text-yellow-400 text-gray-300"
                    : "hover:text-blue-500 text-gray-700"
                }
              >
                {item}
              </a>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={
                darkMode
                  ? "ml-4 px-3 py-1 rounded-full bg-gray-700 text-gray-100"
                  : "ml-4 px-3 py-1 rounded-full bg-gray-200 text-gray-800"
              }
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className={
          darkMode
            ? "h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-gray-100"
            : "h-screen flex items-center justify-center bg-gray-200"
        }
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
          <div className="text-center md:text-left max-w-xl">
            <h1
              className={`text-5xl font-extrabold leading-tight ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Halo, Saya <span className="text-yellow-400">Daffa</span> 👋
            </h1>
            <p
              className={`mt-6 text-lg leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Seorang{" "}
              <span className="font-semibold text-yellow-500">
                Mobile & Web Developer
              </span>{" "}
              dengan keahlian di Flutter, Next.js, dan Express. Suka membangun
              aplikasi yang bersih, skalabel, dan ramah pengguna.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
              <a
                href="#projects"
                className="px-6 py-3 rounded-full bg-yellow-400 text-blue-900 font-semibold shadow hover:bg-yellow-300 transition"
              >
                🚀 Lihat Karya Saya
              </a>
              <a
                href="#contact"
                className={`px-6 py-3 rounded-full font-semibold transition ${
                  darkMode
                    ? "border-2 border-white text-white hover:bg-white hover:text-blue-800"
                    : "border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
                }`}
              >
                📩 Hubungi Saya
              </a>
            </div>
          </div>

          <motion.img
            src="/me.jpg"
            alt="Foto Daffa"
            className={`w-56 md:w-72 rounded-full shadow-2xl p-4 object-cover ${
              darkMode
                ? "border-4 border-white bg-gray-800"
                : "border-4 border-gray-300 bg-white"
            }`}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto py-20">
        <h2
          className={`text-3xl font-bold text-center mb-8 ${
            darkMode ? "text-gray-100" : "text-gray-800"
          }`}
        >
          About Me
        </h2>
        <p
          className={`text-center max-w-2xl mx-auto ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Saya Daffa, seorang developer yang fokus pada aplikasi mobile dan web.
          Berpengalaman menggunakan Flutter, Next.js, dan Express. Suka membuat
          aplikasi dengan desain clean dan user-friendly.
        </p>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={darkMode ? "bg-gray-900 py-20" : "bg-gray-100 py-20"}
      >
        <div className="container mx-auto">
          <h2
            className={`text-3xl font-bold text-center mb-12 ${
              darkMode ? "text-gray-100" : "text-gray-800"
            }`}
          >
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "PPDB App",
                desc: "Aplikasi PPDB dengan fitur pembayaran & pengumuman.",
                image: "/assets/img/ppdb.png",// path ke gambar
              },
              {
                title: "british propolis",
                desc: "Aplikasi CRUD dengan Firebase Authentication.",
                image: "/assets/img/ppq.png",// path ke gambar
              },
              {
                title: "Personal Portfolio",
                desc: "Website portofolio untuk menampilkan karya saya.",
                  image: "/assets/img/cv.png",// path ke gambar
              },
            ].map((project) => (
              <div
                key={project.title}
                className={`${
                  darkMode ? cardBgDark : cardBgLight
                } shadow-md rounded-lg p-6`}
              >
                {/* Image */}
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                )}

                {/* Title */}
                <h3
                  className={`font-bold text-xl mb-2 ${
                    darkMode ? "text-gray-100" : "text-gray-800"
                  }`}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                  {project.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto py-20">
        <h2
          className={`text-3xl font-bold text-center mb-12 ${
            darkMode ? "text-gray-100" : "text-gray-800"
          }`}
        >
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            {
              name: "Flutter",
              lightBg: "bg-blue-100",
              lightText: "text-blue-800",
              darkBg: "bg-blue-900",
              darkText: "text-blue-300",
            },
            {
              name: "Next.js",
              lightBg: "bg-green-100",
              lightText: "text-green-800",
              darkBg: "bg-green-900",
              darkText: "text-green-300",
            },
            {
              name: "Express",
              lightBg: "bg-yellow-100",
              lightText: "text-yellow-800",
              darkBg: "bg-yellow-900",
              darkText: "text-yellow-300",
            },
            {
              name: "Firebase",
              lightBg: "bg-purple-100",
              lightText: "text-purple-800",
              darkBg: "bg-purple-900",
              darkText: "text-purple-300",
            },
          ].map((skill) => (
            <span
              key={skill.name}
              className={`px-4 py-2 rounded-full ${
                darkMode
                  ? `${skill.darkBg} ${skill.darkText}`
                  : `${skill.lightBg} ${skill.lightText}`
              }`}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={darkMode ? "bg-gray-900 py-20" : "bg-gray-100 py-20"}
      >
        <h2
          className={`text-3xl font-bold text-center mb-12 ${
            darkMode ? "text-gray-100" : "text-gray-800"
          }`}
        >
          Contact Me
        </h2>

        <div
          className={`${
            darkMode ? cardBgDark : cardBgLight
          } max-w-lg mx-auto p-8 rounded-2xl shadow-lg`}
        >
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            {/* Name */}
            <div>
              <label
                htmlFor="from_name"
                className={`block mb-1 font-medium ${
                  darkMode ? "text-gray-200" : "text-gray-700"
                }`}
              >
                Your Name
              </label>
              <input
                type="text"
                name="from_name"
                id="from_name"
                placeholder="Enter your name"
                required
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                  darkMode
                    ? "bg-gray-900 text-gray-100 border-gray-700"
                    : "border-gray-300"
                }`}
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="from_email"
                className={`block mb-1 font-medium ${
                  darkMode ? "text-gray-200" : "text-gray-700"
                }`}
              >
                Your Email
              </label>
              <input
                type="email"
                name="from_email"
                id="from_email"
                placeholder="Enter your email"
                required
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                  darkMode
                    ? "bg-gray-900 text-gray-100 border-gray-700"
                    : "border-gray-300"
                }`}
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className={`block mb-1 font-medium ${
                  darkMode ? "text-gray-200" : "text-gray-700"
                }`}
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                placeholder="Write your message..."
                required
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                  darkMode
                    ? "bg-gray-900 text-gray-100 border-gray-700"
                    : "border-gray-300"
                }`}
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className={`w-full py-3 rounded-lg text-lg font-semibold shadow-md transition ${
                darkMode
                  ? "bg-blue-700 hover:bg-blue-800 text-white"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              📩 Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={
          darkMode
            ? "text-center py-6 bg-gray-800 shadow mt-10 text-gray-300"
            : "text-center py-6 bg-white shadow mt-10 text-gray-600"
        }
      >
        &copy; 2025 Daffa. All rights reserved.
      </footer>

      {/* Scroll to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full shadow-lg bg-yellow-400 hover:bg-yellow-300 transition"
        >
          ⬆️
        </button>
      )}
    </div>
  );
}
