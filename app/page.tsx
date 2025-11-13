"use client";
import Navbar from "./Navbar";
import Reveal from "./components/Reveal";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)] min-h-screen">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
    <Reveal delay={0.1}>
  <motion.section
    id="hero"
    className="relative flex flex-col justify-center px-8 md:px-24 h-screen overflow-hidden"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    {/* Subtle Zoom-Out Parallax Background */}
    <motion.div
      className="absolute inset-0 bg-[url('/drone.jpg')] bg-cover bg-center"
      style={{ zIndex: 0 }}
      initial={{ scale: 1.08, y: 0 }}
      whileInView={{ scale: 1, y: -5 }}
      transition={{ duration: 4, ease: "easeOut" }}
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/70" />

    {/* Hero Content */}
    <div className="relative z-10 max-w-3xl text-left space-y-6">
      <h1 className="text-5xl md:text-6xl font-bold leading-tight">
        <span className="text-white">Precision in Every Flight,</span>
        <br />
        <span className="text-[var(--color-accent)]">
          Power in Every Mission.
        </span>
      </h1>

      <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
        VyomGarud develops next-generation UAV systems engineered for unmatched
        reliability, autonomous intelligence, and defense-grade performance.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <a
          href="#contact"
          className="bg-[var(--color-accent)] text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-[var(--color-accent)] transition text-center"
        >
          Get in touch
        </a>
        <a
          href="#capabilities"
          className="border border-gray-400 text-white font-semibold px-8 py-3 rounded-full hover:bg-[var(--color-accent)] hover:border-transparent hover:text-black transition text-center"
        >
          Explore Technology
        </a>
      </div>
    </div>
  </motion.section>
</Reveal>

      {/* ABOUT SECTION */}
      <Reveal delay={0.2}>
        <section
          id="about"
          className="relative py-24 px-8 md:px-24 bg-[#0e0e0e] text-center md:text-left"
        >
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-4xl font-bold text-white">About VyomGarud</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              VyomGarud is an advanced UAV and drone systems company
              specializing in
              <span className="text-[var(--color-accent)] font-medium">
                {" "}
                autonomous flight, defense-grade reliability,{" "}
              </span>
              and
              <span className="text-[var(--color-accent)] font-medium">
                {" "}
                precision engineering.
              </span>{" "}
              Our mission is to empower aerial intelligence with systems that
              think, adapt, and perform flawlessly in the most critical
              environments.
            </p>
          </div>
        </section>
      </Reveal>

      {/* CAPABILITIES SECTION */}
      <Reveal delay={0.3}>
        <section
          id="capabilities"
          className="py-24 px-8 md:px-24 bg-[#141414] text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-12">
            Our Capabilities
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Autonomous Drones",
                desc: "AI-driven UAVs capable of adaptive navigation and real-time decision-making.",
              },
              {
                title: "Surveillance & Reconnaissance",
                desc: "Long-endurance drones with precision sensors for defense and border operations.",
              },
              {
                title: "Payload Integration",
                desc: "Custom payload systems designed for multi-mission flexibility and accuracy.",
              },
            ].map((cap) => (
              <div
                key={cap.title}
                className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-700 hover:bg-[#232323] transition-all"
              >
                <h3 className="text-xl font-semibold text-[var(--color-accent)] mb-3">
                  {cap.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* HIGHLIGHTS SECTION */}
      <Reveal delay={0.4}>
        <section
          id="highlights"
          className="py-24 px-8 md:px-24 bg-[#0e0e0e] text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-12">Why VyomGarud</h2>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              {
                image: "/reliability.jpg",
                title: "Military-Grade Reliability",
                text: "Engineered to perform under extreme conditions with zero compromise on safety.",
              },
              {
                image: "/intelligence.jpg",
                title: "Autonomous Intelligence",
                text: "Advanced AI systems enable real-time decision-making and mission autonomy.",
              },
              {
                image: "/engineering.jpg",
                title: "Precision Engineering",
                text: "Designed and built with meticulous attention to aerodynamic efficiency and control.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#141414] rounded-2xl border border-gray-700 overflow-hidden hover:bg-[#1b1b1b] transition-all duration-300 group"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover opacity-90 transform transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold text-[var(--color-accent)]">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* CONTACT SECTION */}
      <Reveal delay={0.4}>
        <section
          id="contact"
          className="py-24 px-8 md:px-24 bg-[#141414] text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let’s collaborate to redefine aerial systems for the future. Reach
            out for partnerships, demos, or project discussions.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="max-w-lg mx-auto flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg bg-[#1b1b1b] border border-gray-700 text-gray-300 focus:outline-none focus:border-[var(--color-accent)]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg bg-[#1b1b1b] border border-gray-700 text-gray-300 focus:outline-none focus:border-[var(--color-accent)]"
            />
            <textarea
              rows={4}
              placeholder="Your Message"
              className="p-3 rounded-lg bg-[#1b1b1b] border border-gray-700 text-gray-300 focus:outline-none focus:border-[var(--color-accent)]"
            />
            <button
              type="submit"
              className="bg-[var(--color-accent)] py-3 rounded-full text-white font-semibold hover:bg-white hover:text-[var(--color-accent)] transition"
            >
              Send Message
            </button>
          </form>
        </section>
      </Reveal>

      {/* FOOTER */}
      <Reveal delay={0.5}>
        <footer className="p-6 bg-[#111] text-center text-gray-400">
          <p>Contact us: info@vyomgarud.com</p>
          <p className="text-sm mt-2">
            © 2025 VyomGarud. All rights reserved.
          </p>
        </footer>
      </Reveal>
    </main>
  );
}
