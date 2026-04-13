import { motion } from "framer-motion";
import { Mail, Github, Facebook, Instagram, Send, Linkedin } from "lucide-react";
import { useState, FormEvent } from "react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="min-h-screen relative overflow-hidden overflow-x-hidden py-16 md:py-0 flex items-center" style={{ scrollMarginTop: "0px" }}>
      {/* Gradient accents */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, hsl(210 80% 55% / 0.12), hsl(185 70% 45% / 0.06), transparent 70%)",
          filter: "blur(100px)",
          zIndex: 1,
        }}
      />
      <div
        className="absolute top-1/4 -right-[10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, hsl(195 85% 45% / 0.10), transparent 65%)",
          filter: "blur(90px)",
          zIndex: 1,
        }}
      />

      <div className="absolute top-0 left-0 w-full h-px opacity-[0.06] gradient-line z-[1]" />

      <div className="container max-w-2xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "tween" as const }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.08em] text-muted-foreground mb-3">Contact</p>
          <h2 className="text-foreground mb-4" style={{ fontSize: "clamp(1.75rem, 5vw, 2.25rem)", lineHeight: 1.2 }}>
            Let's build something{" "}
            <span className="gradient-text">impactful together.</span>
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Have a project, life-altering idea, or problem to solve? Let's talk.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "tween" as const, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-4 mb-12"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <input
              type="text"
              placeholder="Name"
              required
              pattern="^[A-Za-zÀ-ÿ\s]+$"
              title="Name can only include letters and spaces"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-card text-foreground text-xs sm:text-sm placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-1 focus:ring-ring transition-shadow"
            />
            <input
              type="email"
              placeholder="Email"
              required
              pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
              title="Enter a valid email address containing @"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-card text-foreground text-xs sm:text-sm placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-1 focus:ring-ring transition-shadow"
            />
          </div>
          <textarea placeholder="Your message..." rows={4} required
            className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-card text-foreground text-xs sm:text-sm placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-1 focus:ring-ring transition-shadow resize-none" />
          <div className="flex justify-center">
            <button type="submit"
              className="gradient-border rounded-lg sm:rounded-xl px-5 sm:px-7 py-2.5 sm:py-3.5 text-xs sm:text-sm font-medium text-foreground transition-all duration-200 active:scale-[0.97] hover:shadow-lg hover:shadow-primary/10 flex items-center gap-2">
              <Send size={14} className="sm:size-4" />
              {submitted ? "Sent!" : "Start the Conversation"}
            </button>
          </div>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "tween" as const, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-6"
        >
          {[
            { icon: Github, label: "GitHub", href: "https://github.com/TIP-Xiane" },
            { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/xiane-heins-guevara-b292393b9" },
            { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/xianeheins.guevaraxhmg/" },
            { icon: Instagram, label: "Instagram", href: "https://instagram.com/xx.archieves" },
            { icon: Mail, label: "Email", href: "mailto:mxhguevara@tip.edu.ph" },
          ].map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
              <link.icon size={14} className="sm:size-4" /> <span className="hidden sm:inline">{link.label}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
