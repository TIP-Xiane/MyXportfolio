import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroPortrait from "@/assets/hero-portrait.png";

const socials = [
  { icon: Github, href: "https://github.com/TIP-Xiane", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/xiane-heins-guevara-b292393b9", label: "LinkedIn" },
  { icon: Mail, href: "mailto:mxhguevara@tip.edu.ph", label: "Email" },
];

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen relative overflow-hidden py-16 md:py-0 flex items-center">
      {/* Gradient accents */}
      <div
        className="absolute top-1/2 -left-[20%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, hsl(210 80% 55% / 0.18), hsl(185 70% 45% / 0.09), transparent 70%)",
          filter: "blur(100px)",
          zIndex: 1,
        }}
      />
      <div
        className="absolute top-1/2 right-[5%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, hsl(195 85% 45% / 0.12), hsl(220 65% 50% / 0.06), transparent 70%)",
          filter: "blur(90px)",
          zIndex: 1,
        }}
      />

      <div className="container relative z-10 px-4 mx-auto h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center w-full">
          {/* Left Column — Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, type: "tween" as const }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col justify-center"
          >
            <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.08em] text-muted-foreground mb-3 sm:mb-4">About</p>

            <h2
              className="text-foreground mb-2"
              style={{ fontSize: "clamp(1.75rem, 6vw, 3rem)", lineHeight: 1.1 }}
            >
              Hi, I'm <span className="gradient-text">Xiane</span>
            </h2>
            <p className="text-foreground text-base sm:text-lg mb-4 sm:mb-6" style={{ fontWeight: 500 }}>
              Computer Engineer | Builder | Lifelong Learner
            </p>

            <div className="w-16 sm:w-20 h-[2px] mb-5 sm:mb-7 gradient-glow rounded-full" />

            <p className="text-xs sm:text-sm text-foreground leading-relaxed mb-4 sm:mb-6">
              I'm driven by one thing. <strong>I am deeply passionate about building projects rather than startups</strong>. Whether it's scaling a mental health app, designing IoT systems, or creating tools that solve real problems—I'm all in for making an impact.
            </p>

            <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed mb-4 sm:mb-6">
              I'm deeply passionate about the <strong>scrappy, build-fast-iterate kind of projects</strong>. I prototype ideas quickly, learn from failures, and believe the best solutions come from understanding the people you're building for.
            </p>

            <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed mb-6 sm:mb-8">
              I'm still on the quest of finding what I truly want to pursue, but one thing's constant—a growth mindset and obsession with creating something meaningful.
            </p>

            {/* Know more button - no highlight on text */}
            <Link
              to="/about#my-journey"
              className="inline-flex items-center gap-2 gradient-border rounded-lg sm:rounded-xl px-5 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium text-foreground transition-all duration-200 hover:shadow-lg hover:shadow-primary/10 active:scale-[0.97] group w-fit"
              style={{ userSelect: "none" }}
            >
              <span style={{ userSelect: "none" }}>Know more about me</span>
              <ArrowRight size={14} className="sm:size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right Column — Profile Image with Glow */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, type: "tween" as const, delay: 0.15 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative flex items-center justify-center h-full"
          >
            {/* Multi-layer soft glow effect behind portrait */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              style={{
                zIndex: 1,
              }}
            >
              {/* Outer glow layer */}
              <div
                className="absolute w-[140%] h-[140%] rounded-full"
                style={{
                  background: "radial-gradient(ellipse at center, hsl(210 80% 55% / 0.2), hsl(185 70% 45% / 0.1), transparent 65%)",
                  filter: "blur(80px)",
                }}
              />
              {/* Inner glow layer */}
              <div
                className="absolute w-[110%] h-[110%] rounded-full"
                style={{
                  background: "radial-gradient(ellipse at center, hsl(195 85% 45% / 0.15), transparent 60%)",
                  filter: "blur(60px)",
                }}
              />
            </div>

            {/* Portrait container */}
            <div className="relative w-full max-w-lg sm:max-w-xl md:max-w-2xl flex flex-col items-center justify-center" style={{ zIndex: 2 }}>
              <img
                src={heroPortrait}
                alt="Xiane Heins Guevara — Computer Engineer"
                className="w-full h-auto object-contain drop-shadow-2xl"
                style={{
                  maskImage: "linear-gradient(to bottom, black 75%, transparent 98%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 75%, transparent 98%)",
                  userSelect: "none",
                }}
              />
              {/* Soft bottom shadow */}
              <div
                className="absolute -bottom-8 left-[10%] right-[10%] h-12 rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse at center, hsl(210 80% 55% / 0.12), transparent 70%)",
                  filter: "blur(20px)",
                  zIndex: 1,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
