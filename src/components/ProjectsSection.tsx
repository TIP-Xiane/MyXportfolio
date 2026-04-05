import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Switched from Link to useNavigate

// Import project images
import hinyAppImg from "@/assets/HinyApp.png";
import kaslaImg from "@/assets/KASLA.png";
import guideuImg from "@/assets/GUIDEU.png";
import dauxImg from "@/assets/daux.jpg";
import adeiImg from "@/assets/adei.jpg";
import cryptoImg from "@/assets/crypto.jpg";
import switchlyImg from "@/assets/swtichly.jpg";

const projects = [
  {
    title: "HinyApp — Mental Health Platform",
    description: "Mobile based mental health platform — self-assessment, resources, and peer support for students in Marinduque State University.",
    tags: ["Bootstrap", "Html", "Css", "Javascript"],
    image: hinyAppImg,
    github: "https://github.com/TIP-Xiane",
    live: "/project/hinyapp",
  },
  {
    title: "KASLA- Kalusugan sa Isla App",
    description: "Web & mobile app connecting health workers with communities — appointment scheduling, health records, and teleconsultation features.",
    tags: ["Web App", "Website", "Startup Idea", "Team-Project"],
    image: kaslaImg,
    github: "https://github.com/TIP-Xiane",
    live: "/project/kasla", 
  },
  {
    title: "Guide U: MarSU Navigation App",
    description: "Rapid prototyping toolkit — boilerplate generator, component library, and deployment pipeline.",
    tags: ["QGIS Mapping", "React", "Docker", "MongoDB"],
    image: guideuImg,
    github: "https://github.com/TIP-Xiane",
    live: "/project/guide-u", 
  },
  {
    title: "DAUX: Detection Alarm Unit with Extension",
    description: "Custom Arduino-based sensor system for motion detection and security with alarm system.",
    tags: ["Arduino", "Hardware", "Designing", "Team-Project"],
    image: dauxImg,
    github: "https://github.com/TIP-Xiane",
    live: "https://drive.google.com/file/d/1hbKJFXT6M5-m-rrDf9KSXJXsiAGkAEUo/view?usp=sharing",
  },
  {
    title: "ADEI Student Portal System",
    description: "Simple and responsive student enrollment portal system - built with react for academic institutions.",
    tags: ["React", "Javascript", "Netlify", "Website"],
    image: adeiImg,
    github: "https://github.com/TIP-Xiane",
    live: "https://resplendent-pastelito-480fd4.netlify.app/",
  },
  {
    title: "CryptoPulse - Cryptocurrency Price Tracker",
    description: "Cryptocurrency price tracker website - real-time data, historical charts, with top 10 cryptocurrencies.",
    tags: ["React", "API", "Vercel", "Website"],
    image: cryptoImg,
    github: "https://github.com/TIP-Xiane",
    live: "https://crypto-pulse-qqj8jb7ce-tip-xianes-projects.vercel.app/",
  },
  {
    title: "Switchly - Smart Breaker",
    description: "Embedded IoT solution — for retrofitting homes with smart monitoring and control via mobile app through Blynk.",
    tags: ["ESP32", "Blynk", "IoT", "C++"],
    image: switchlyImg,
    github: "https://github.com/TIP-Xiane",
    live: "/project/switchly", 
  },
];

const CARD_W = 300;
const CARD_H = 400;
const CARD_GAP = 220;

const ProjectsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const routerNavigate = useNavigate(); // Initialize navigation

  const navigate = useCallback((dir: number) => {
    setDirection(dir);
    setActiveIndex((prev) => {
      const next = prev + dir;
      if (next < 0) return projects.length - 1;
      if (next >= projects.length) return 0;
      return next;
    });
  }, []);

  const handleDragEnd = useCallback(
    (_: any, info: { offset: { x: number }; velocity: { x: number } }) => {
      if (info.offset.x < -50 || info.velocity.x < -200) navigate(1);
      else if (info.offset.x > 50 || info.velocity.x > 200) navigate(-1);
    },
    [navigate]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigate]);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => navigate(1), 4000);
    return () => clearInterval(interval);
  }, [isHovered, navigate]);

  const getStyle = (index: number) => {
    let diff = index - activeIndex;
    if (diff > projects.length / 2) diff -= projects.length;
    if (diff < -projects.length / 2) diff += projects.length;
    const abs = Math.abs(diff);
    const isCenter = diff === 0;

    return {
      x: diff * CARD_GAP,
      scale: isCenter ? 1 : Math.max(0.7, 1 - abs * 0.12),
      rotateY: diff * -10,
      z: isCenter ? 0 : -abs * 120,
      zIndex: 10 - abs,
      opacity: abs > 2 ? 0 : isCenter ? 1 : Math.max(0.35, 1 - abs * 0.3),
      blur: isCenter ? 0 : Math.min(abs * 3, 8),
    };
  };

  return (
    <section id="projects" className="min-h-screen relative overflow-hidden overflow-x-hidden py-16 md:py-0 flex items-center" style={{ scrollMarginTop: "0px" }}>
      {/* Dynamic blurred bg */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.04 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-[1]"
          style={{
            backgroundImage: `url(${projects[activeIndex].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(80px) saturate(1.1)",
          }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 z-[2] pointer-events-none" style={{ background: "linear-gradient(135deg, hsl(220 20% 4% / 0.85) 0%, hsl(220 18% 8% / 0.82) 50%, hsl(220 20% 4% / 0.85) 100%)" }} />

      {/* Aurora accents */}
      <div
        className="absolute top-1/4 -right-[10%] w-[400px] h-[400px] pointer-events-none z-[3]"
        style={{
          background: "radial-gradient(ellipse at center, hsl(210 80% 55% / 0.12), hsl(195 85% 45% / 0.06), transparent 70%)",
          filter: "blur(90px)",
        }}
      />
      <div
        className="absolute bottom-1/4 -left-[5%] w-[350px] h-[350px] pointer-events-none z-[3]"
        style={{
          background: "radial-gradient(ellipse at center, hsl(220 65% 50% / 0.10), hsl(185 70% 45% / 0.05), transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="container relative z-10 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "tween" as const }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <p className="text-sm sm:text-base font-medium uppercase tracking-[0.08em] text-muted-foreground mb-3">Projects</p>
          <h2 className="text-foreground" style={{ fontSize: "clamp(2rem, 5vw, 2.8rem)", lineHeight: 1.2 }}>
            Things I've <span className="gradient-text">Built</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative"
          style={{ perspective: "1200px" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Center glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.08] blur-[100px] pointer-events-none"
            style={{
              width: CARD_W + 80,
              height: CARD_H + 40,
              background: "radial-gradient(ellipse at center, hsl(210 80% 55% / 0.5), hsl(195 85% 45% / 0.3), transparent 70%)",
            }}
          />

          <motion.div
            className="flex items-center justify-center relative"
            style={{ height: CARD_H + 60, touchAction: "pan-y", cursor: "grab" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
          >
            {projects.map((project, i) => {
              const s = getStyle(i);
              return (
                <motion.div
                  key={project.title}
                  className="absolute"
                  animate={{
                    x: s.x, scale: s.scale, rotateY: s.rotateY,
                    z: s.z, opacity: s.opacity, zIndex: s.zIndex,
                  }}
                  transition={{ type: "spring", stiffness: 240, damping: 28, mass: 0.8 }}
                  onClick={() => {
                    if (i !== activeIndex) {
                      setDirection(i > activeIndex ? 1 : -1);
                      setActiveIndex(i);
                    }
                  }}
                  style={{
                    filter: `blur(${s.blur}px)`,
                    transformStyle: "preserve-3d",
                    width: CARD_W,
                    height: CARD_H,
                  }}
                >
                  <div
                    className="relative w-full h-full rounded-[20px] overflow-hidden group"
                    style={{
                      boxShadow: s.zIndex === 10
                        ? "0 24px 64px -16px hsla(250, 60%, 35%, 0.3), 0 0 0 1px hsla(0,0%,100%,0.05)"
                        : "0 10px 32px -12px hsla(240, 10%, 2%, 0.6), 0 0 0 1px hsla(0,0%,100%,0.02)",
                    }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      draggable={false}
                    />

                    <div className="absolute inset-0"
                      style={{
                        background: "linear-gradient(to top, hsl(var(--background)) 0%, hsl(var(--background) / 0.85) 25%, hsl(var(--background) / 0.3) 55%, transparent 100%)",
                      }}
                    />

                    <div className="absolute bottom-0 left-0 right-0 p-5"
                      style={{ backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}>
                      <h3 className="text-sm font-bold text-foreground mb-1 leading-tight">{project.title}</h3>
                      <p className="text-[11px] text-muted-foreground leading-relaxed mb-3 line-clamp-2">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-[10px] font-medium px-2 py-0.5 rounded-full border border-border/50 text-muted-foreground bg-secondary/50">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground hover:text-foreground transition-colors"
                          onClick={(e) => e.stopPropagation()}>
                          <Github size={12} /> GitHub
                        </a>

                        {/* Completely rebuilt button to force strict navigation */}
                        <button 
                          onClick={(e) => {
                            e.stopPropagation(); // Stops the card from sliding
                            if (project.live.startsWith("http")) {
                              window.open(project.live, "_blank"); // Opens live sites in new tab
                            } else if (project.live.startsWith("/")) {
                              routerNavigate(project.live); // Routes to internal pages
                            }
                          }}
                          className="flex items-center gap-1.5 text-[11px] font-medium gradient-text hover:opacity-80 transition-opacity"
                        >
                          <ExternalLink size={12} className="text-primary" /> View Project
                        </button>

                      </div>
                    </div>

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[20px]"
                      style={{ boxShadow: "inset 0 0 40px hsl(var(--primary) / 0.08)" }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Arrows */}
          <button onClick={() => navigate(-1)}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-200 active:scale-95 bg-card/60"
            style={{ backdropFilter: "blur(8px)" }} aria-label="Previous project">
            <ChevronLeft size={18} />
          </button>
          <button onClick={() => navigate(1)}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-200 active:scale-95 bg-card/60"
            style={{ backdropFilter: "blur(8px)" }} aria-label="Next project">
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {projects.map((_, i) => (
            <button key={i} onClick={() => { setDirection(i > activeIndex ? 1 : -1); setActiveIndex(i); }}
              className="transition-all duration-300" aria-label={`Go to project ${i + 1}`}>
              <div className="rounded-full transition-all duration-300"
                style={{
                  width: i === activeIndex ? "24px" : "6px",
                  height: "6px",
                  background: i === activeIndex
                    ? "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))"
                    : "hsl(var(--muted))",
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;