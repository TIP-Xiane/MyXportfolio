import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      {/* Background wrapper (ONLY this is clipped) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div
          className="absolute top-[10%] right-[10%] w-[700px] h-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, hsl(210 80% 55% / 0.18), hsl(195 85% 45% / 0.09), transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        <div
          className="absolute bottom-[10%] left-[5%] w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, hsl(185 70% 45% / 0.12), hsl(220 65% 50% / 0.06), transparent 70%)",
            filter: "blur(120px)",
          }}
        />
        <div
          className="absolute top-[40%] right-[5%] w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, hsl(210 80% 55% / 0.10), transparent 65%)",
            filter: "blur(90px)",
          }}
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "radial-gradient(circle, hsl(var(--muted-foreground)) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Accent lines */}
        <div className="absolute top-0 right-[22%] w-px h-[40%] opacity-[0.06] gradient-line" />
        <div className="absolute bottom-0 left-[18%] w-px h-[30%] opacity-[0.04] gradient-line" />
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "tween" }}
        >
          {/* Top label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xs sm:text-sm md:text-base font-medium uppercase tracking-[0.15em] text-muted-foreground mb-8 sm:mb-10"
          >
            Xiane — Computer Engineer & Startup Builder
          </motion.p>

          {/* Headline */}
          <h1
            className="text-foreground mx-auto mb-6 sm:mb-8"
            style={{
              fontSize: "clamp(2.25rem, 8vw, 5.5rem)",
              lineHeight: 1.15,
              maxWidth: "900px",
              letterSpacing: "-0.02em",
              fontWeight: 700,
              paddingBottom: "0.15em",
            }}
          >
            <span className="block">Ready to build</span>
            <span className="block mt-1 gradient-text">
              something that matters?
            </span>
          </h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-sm sm:text-base md:text-lg text-muted-foreground mx-auto mb-8 sm:mb-10 leading-relaxed font-light"
          >
            <strong>Building tech with impact</strong>
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5"
          >
            <a
              href="#projects"
              className="gradient-border rounded-lg sm:rounded-xl px-6 sm:px-7 py-2.5 sm:py-3.5 text-xs sm:text-sm font-medium text-foreground transition-all duration-200 active:scale-[0.97] hover:shadow-lg hover:shadow-primary/15 w-full sm:w-auto text-center"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Let's Connect →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;