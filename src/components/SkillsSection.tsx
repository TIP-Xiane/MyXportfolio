import { motion } from "framer-motion";
import { Code2, Cpu, Sparkles, Briefcase, Heart, Zap } from "lucide-react";

const techSkills = [
  { name: "Html", level: 85 },
  { name: "Css", level: 80 },
  { name: "JavaScript", level: 79 },
  { name: "Firebase", level: 85 },
  { name: "Git & Version Control", level: 90 },
];

const hardwareSkills = [
  { name: "ESP32", level: 85 },
  { name: "Arduino", level: 80 },
  { name: "Logic Circuits", level: 92 },
  { name: "PCB Designing", level: 82 },
  { name: "Blynk IoT", level: 79 },
  { name: "Optimization", level: 83 },
  { name: "3D Making", level: 65 },
];

const strengthsAbilities = [
  "Vibe Coding",
  "Strong Presentation Skills",
  "Microsoft Office",
  "Visionary Thinking",
];

const buildingSkills = [
  "Building Projects",
  "Rapid Prototyping",
  "MVP Development",
  "Problem Solving",
];

const experience = [
  { company: "Marinduque State University - ICPEP.se Organization", role: "Creative Director", period: "2023 – 2025", highlight: "Led creative initiatives & branding" },
  { company: "HinyApp", role: "Co-Founder & Lead Engineer", period: "2022 – 2023", highlight: "Built MVP & tested PMF" },
  { company: "KASLA", role: "Organizational Leadership", period: "2021 – 2022", highlight: "Founded & scaled organization" },
];

const hobbies = [
  "Reading (self-development)",
  "Cooking",
  "Financial Literacy",
  "Trying new things",
  "Building projects",
  "Journalling",
];

const anim = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, type: "tween" as const },
  viewport: { once: true, amount: 0.15 },
};

const animWithDelay = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, type: "tween" as const, delay },
  viewport: { once: true, amount: 0.15 },
});

// Skill bar component
const SkillBar = ({ name, level }: { name: string, level: number }) => (
  <div className="space-y-1">
    <div className="flex justify-between items-center">
      <span className="text-[11px] font-semibold text-foreground">{name}</span>
      <span className="text-[10px] text-primary font-bold">{level}%</span>
    </div>
    <div className="w-full h-1.5 rounded-full bg-background border border-border/50 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1, type: "tween" as const }}
        viewport={{ once: true }}
        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
      />
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="min-h-screen relative overflow-hidden py-24 md:py-32 flex items-center">
      {/* Gradient accents */}
      <div
        className="absolute top-0 -right-[10%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, hsl(210 80% 55% / 0.16), hsl(185 70% 45% / 0.08), transparent 70%)",
          filter: "blur(100px)",
          zIndex: 1,
        }}
      />
      <div
        className="absolute bottom-0 -left-[20%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, hsl(220 65% 50% / 0.12), hsl(195 85% 45% / 0.06), transparent 70%)",
          filter: "blur(90px)",
          zIndex: 1,
        }}
      />

      <div className="container relative z-10 px-4 mx-auto w-full h-full flex items-start pt- md:pt-6 pb-16 md:pb-20">
        <div className="w-full">
          {/* Header */}
          <motion.div {...anim} className="mb-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.08em] text-muted-foreground mb-1">Resume</p>
            <h2 style={{ fontSize: "clamp(1.4rem, 3.5vw, 2rem)", lineHeight: 1.1 }} className="text-foreground font-bold">
              Skills & <span className="gradient-text">Experience</span>
            </h2>
          </motion.div>

          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            {/* Left Column — 2 Stacked Cards that stretch to match right column */}
            <div className="lg:col-span-1 flex flex-col gap-3">
              {/* Tech & Development Card */}
              <motion.div
                {...animWithDelay(0.1)}
                className="flex-1"
              >
                <div className="card-surface rounded-2xl p-6
                 md:p-8 h-full hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:ring-1 hover:ring-primary/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                      <Code2 size={16} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-foreground">Tech & Development</h3>
                      <p className="text-[9px] text-muted-foreground">Modern web & mobile</p>
                    </div>
                  </div>
                  <div className="space-y-2.5">
                    {techSkills.map((skill) => (
                      <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Hardware & Embedded Systems Card */}
              <motion.div
                {...animWithDelay(0.15)}
                className="flex-1"
              >
                <div className="card-surface rounded-2xl p-4 md:p-5 h-full hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:ring-1 hover:ring-primary/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                      <Cpu size={16} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-foreground">Hardware & Embedded</h3>
                      <p className="text-[9px] text-muted-foreground">IoT & circuit design</p>
                    </div>
                  </div>
                  <div className="space-y-2.5">
                    {hardwareSkills.slice(0, 6).map((skill) => (
                      <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column — 3 Stacked Smaller Cards */}
            <div className="lg:col-span-2 flex flex-col gap-3">
              {/* Strengths Card */}
              <motion.div
                {...animWithDelay(0.2)}
                className="flex-1"
              >
                <div className="card-surface rounded-2xl p-4 md:p-5 h-full hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:ring-1 hover:ring-primary/20">
                  <h3 className="text-xs font-bold text-foreground mb-2.5 flex items-center gap-2">
                    <Sparkles size={14} className="text-primary" /> Key Strengths
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {strengthsAbilities.map((ability, idx) => (
                      <motion.div
                        key={ability}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, type: "tween" as const, delay: idx * 0.08 }}
                        viewport={{ once: true }}
                        className="rounded-lg p-2.5 flex items-center gap-2 transition-all duration-300 h-full bg-background/50 border border-border/30"
                      >
                        <Zap size={12} className="text-primary shrink-0" />
                        <span className="text-[11px] font-semibold text-foreground">{ability}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Hobbies Card */}
              <motion.div
                {...animWithDelay(0.25)}
                className="flex-1"
              >
                <div className="card-surface rounded-2xl p-4 md:p-5 h-full hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:ring-1 hover:ring-primary/20">
                  <h3 className="text-xs font-bold text-foreground mb-2.5 flex items-center gap-2">
                    <Heart size={14} className="text-primary" /> Interests & Hobbies
                  </h3>
                  <div className="grid grid-cols-3 gap-2">
                    {hobbies.map((hobby, idx) => (
                      <motion.div
                        key={hobby}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, type: "tween" as const, delay: idx * 0.07 }}
                        viewport={{ once: true }}
                        className="rounded-lg p-2 text-center group transition-all duration-300 hover:translate-y-[-2px] bg-background/50 border border-border/30"
                      >
                        <p className="text-[10px] font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">{hobby}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Professional Experience Card */}
              <motion.div
                {...animWithDelay(0.3)}
                className="flex-1"
              >
                <div className="card-surface rounded-2xl p-4 md:p-5 h-full hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:ring-1 hover:ring-primary/20">
                  <h3 className="text-xs font-bold text-foreground mb-2.5 flex items-center gap-2">
                    <Briefcase size={14} className="text-primary" /> Professional Experience
                  </h3>
                  <div className="grid grid-cols-1 gap-2">
                    {experience.map((exp, idx) => (
                      <motion.div
                        key={`${exp.company}-${exp.period}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, type: "tween" as const, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="rounded-lg p-2.5 transition-all duration-300 border-l-4 border-primary/60 hover:border-primary bg-background/50 border-y border-r border-border/30"
                      >
                        <div className="flex items-baseline justify-between gap-2">
                          <h4 className="text-[11px] font-bold text-foreground">{exp.company}</h4>
                          <p className="text-[9px] text-muted-foreground whitespace-nowrap">{exp.period}</p>
                        </div>
                        <p className="text-[10px] text-primary font-semibold">{exp.role}</p>
                        <p className="text-[9px] text-foreground/80 italic">{exp.highlight}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
