// src/pages/AboutMe.tsx
import { motion, useScroll, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, GraduationCap, Heart, Star, MapPin, Trophy } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import React, { useRef } from "react";
import xiane2 from "../assets/xiane2.JPG";
import me2 from "../assets/me2.jpg";
import xiane from "../assets/xiane.jpg";
import kid1 from "../assets/kid1.jpg";
import tipIcon from "../assets/tip.png";
import marsuLogo from "../assets/MARSU LOGO.png";
import bangbangLogo from "../assets/bangbang.png";
import tesLogo from "../assets/tes.png";
import readingImg from "../assets/reading.jpg";
import journalImg from "../assets/journal.jpg";
import musicImg from "../assets/music.avif";
import guitarImg from "../assets/guitar.jpg";
import cookingImg from "../assets/cooking.jpg";
import finliteracyImg from "../assets/finliteracy.jpg";

// =======================
// Animations & Variants
// =======================
const anim = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" as const }, 
  viewport: { once: true, amount: 0.2 },
};

const animWithDelay = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" as const, delay }, 
  viewport: { once: true, amount: 0.2 },
});

// For staggered lists (like Personal Interests)
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, y: 0, 
    transition: { duration: 0.5, ease: "easeOut" as const } 
  }
};

// =======================
// Divider
// =======================
const Divider = () => (
  <div className="h-24 relative flex items-center justify-center">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/10 to-background blur-3xl opacity-60" />
    <div className="w-px h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent relative z-10" />
  </div>
);

// =======================
// Main Component
// =======================
const AboutMe = () => {
  const ref = useRef(null);
  
  // Smooth scroll progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main ref={ref} className="relative min-h-screen bg-[#030303] overflow-x-hidden font-sans text-foreground">
      
      {/* Top Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary origin-left z-[100]" 
        style={{ scaleX }} 
      />

      {/* Cinematic Aurora Background Animations */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.15, 0.3, 0.15] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] min-w-[600px] min-h-[600px] bg-primary/30 blur-[120px] rounded-full mix-blend-screen" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.1, 0.25, 0.1] 
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] min-w-[500px] min-h-[500px] bg-accent/30 blur-[150px] rounded-full mix-blend-screen" 
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, -90, 0],
            opacity: [0.08, 0.2, 0.08]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] min-w-[700px] min-h-[700px] bg-primary/20 blur-[100px] rounded-full mix-blend-screen"
        />
        {/* Pulsating background layer */}
        <motion.div
          animate={{
            opacity: [0.03, 0.08, 0.03]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 mix-blend-screen"
        />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 p-6 backdrop-blur-md bg-black/20 border-b border-white/5">
        <Link to="/" className="group inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> 
          BACK TO PORTFOLIO
        </Link>
      </nav>

      {/* Hero Quote */}
      <section className="pt-20 pb-24 text-center px-6">
        <motion.div {...anim}>
            <span className="text-primary text-sm font-bold tracking-[0.3em] uppercase mb-4 block">Principle</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black italic tracking-tighter leading-tight">
                “In a world full of <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)' }}>squares</span>,<br /> 
                Let's choose to be a <span className="text-primary">circle</span>.”
            </h1>
        </motion.div>
      </section>

      {/* My Journey Section */}
      <SectionWrapper className="relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-16 xl:gap-20 px-6 items-center">
          
          {/* Biography Text */}
          <motion.div {...anim} className="space-y-6 text-slate-300 leading-relaxed">
            <div className="space-y-4 mb-8">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white flex items-center gap-4">
                    <Star className="text-primary" size={40} />
                    My Journey
                </h2>
                <div className="h-1 w-20 bg-primary rounded-full" />
                <p className="text-sm text-primary uppercase tracking-widest font-semibold">
                    Growth, Curiosity & Persistence
                </p>
            </div>
            
            <div className="space-y-5 text-base md:text-lg">
                <p>
                    <strong>Xiane Heins M. Guevara</strong>, born on August 2, 2005 in Tiguion, Gasan, Marinduque, is a second-year Bachelor of Science in Computer Engineering student driven by curiosity, creativity, and the desire to make a meaningful impact through technology. He is the son of Chenita M. Guevara and Dixand V. Guevara. Growing up with his siblings in a family that instilled values of perseverance, resourcefulness, and service, he now resides in General Trias, Cavite, pursuing growth beyond his hometown.
                </p>
                <p>
                    His journey began with a strong interest in science, competitions, leadership, and exploration. During early high school ICT classes, he discovered his passion for technology—from building HTML websites to digital design projects. Technology quickly became a tool to solve real problems and tell meaningful stories.
                </p>
                <p>
                    Xiane began his college studies at Marinduque State University, actively engaging in academics and volunteer work. Seeking new challenges far from his comfort zone, he transferred to the <strong>Technological Institute of the Philippines</strong>, finding the environment that matched his aspirations.
                </p>
                <p>
                    A major turning point came when he developed <strong>HinyApp</strong>—a mental health platform inspired by the struggles of students during the pandemic. This experience allowed him to collaborate, lead, and connect with mentors beyond his province. Beyond academics, he commits to community service, coastal cleanups, and enjoys cooking, biking, and playing badminton.
                </p>
                <p>
                    While not every opportunity turned into success, each shaped his growth. Realizing that failure is part of the process, he envisions a career bridging technology and community service, continuing to uplift others.
                </p>
            </div>

            <div className="flex items-start gap-4 p-5 mt-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl">
              <MapPin className="text-primary shrink-0 mt-1" />
              <p className="text-sm text-slate-300">
                <strong className="text-white">Current Focus:</strong> Bridging the gap between scalable technology and meaningful community impact, right from General Trias, Cavite.
              </p>
            </div>
          </motion.div>

          {/* Clean, Uniform Grid Layout for Images */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 h-full mt-10 xl:mt-0 content-center">
            {[
              { src: xiane2, alt: "HinyApp Dev" },
              { src: me2, alt: "Startup Pitch" },
              { src: xiane, alt: "Growth" },
              { src: kid1, alt: "Early Recognition" }
            ].map((img, idx) => (
              <motion.div 
                key={idx}
                {...animWithDelay(0.1 * (idx + 1))} 
                className="relative rounded-2xl overflow-hidden group aspect-square md:aspect-[4/5] border border-white/10 shadow-2xl bg-black/50"
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <Divider />

      {/* Academic Background & Achievements */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
            
            {/* Timeline */}
            <motion.div {...anim} className="lg:col-span-7 p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl">
                <div className="flex items-center gap-4 mb-10">
                    <GraduationCap className="text-primary" size={36} />
                    <h3 className="text-3xl font-bold text-white">Academic Background</h3>
                </div>
                
                <div className="relative border-l-2 border-primary/30 ml-6 space-y-12">
                    {[
                        { school: "Technological Institute of the Philippines", years: "2025 – Present", icon: tipIcon, details: "BS Computer Engineering" },
                        { school: "Marinduque State University – College of Engineering", years: "2023 – 2024", icon: marsuLogo, details: "BS Computer Engineering" },
                        { school: "Marinduque State University – Integrated Highschool", years: "2021 – 2023", icon: marsuLogo, details: "Science Technology Engineering and Mathematics - Academic Strand" },
                        { school: "Bangbang National High School – Special Science Class", years: "2017 – 2020", icon: bangbangLogo, details: "Class Salutatorian" },
                        { school: "Tiguion Elementary School", years: "2011 – 2016", icon: tesLogo, details: "Class Valedictorian" },
                    ].map((item, i) => (
                        <div key={i} className="relative pl-12 md:pl-16">
                            {/* Icon Node */}
                            <div className="absolute -left-[2.25rem] md:-left-[2.75rem] top-0 w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-primary/50 bg-[#0a0a0a] flex items-center justify-center p-2 shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]">
                                <img src={item.icon} alt={item.school} className="w-full h-full object-contain" />
                            </div>
                            <div className="pt-2">
                                <h4 className="font-bold text-lg md:text-xl text-white">{item.school}</h4>
                                <p className="text-primary font-medium mt-1">{item.years}</p>
                                <p className="text-sm text-slate-400 mt-2">{item.details}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Achievements Sidebar (Sticky) */}
            <motion.div {...anim} className="lg:col-span-5 space-y-8 sticky top-32 h-fit">
                <div className="p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 backdrop-blur-md shadow-2xl">
                    <div className="flex items-center gap-4 mb-8">
                        <Trophy className="text-primary" size={32} />
                        <h3 className="text-2xl font-bold text-white">Key Achievements</h3>
                    </div>
                    <ul className="space-y-6">
                        {[
                            "Champion – Philippine Startup Challenge Season 7 (Bicol & MIMAROPA)",
                            "Champion – Regional CpE Challenge (Robothon Pitching)",
                            "4th Place – National CpE Challenge ",
                            "International Participant – BrightCHAMPS (Top 25/2500)"
                        ].map((achievement, idx) => (
                            <li key={idx} className="flex gap-4 items-start">
                                <Star className="text-primary shrink-0 mt-1" size={16} fill="currentColor" />
                                <span className="text-slate-300 leading-snug">{achievement}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </div>
      </SectionWrapper>

      <Divider />

      {/* Personal Interests Grid */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-6 mb-32">
          <motion.div {...anim} className="text-center mb-16">
            <Heart className="text-primary mx-auto mb-4" size={40} />
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">Personal Interests</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Activities that shape my creativity, discipline, and personal growth beyond academics.</p>
          </motion.div>

          {/* Staggered Grid Animation */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { title: "Reading", img: readingImg, desc: "Exploring ideas, stories, and personal growth through books." },
              { title: "Journaling", img: journalImg, desc: "Reflecting, planning, and documenting experiences for growth." },
              { title: "Listening to Music", img: musicImg, desc: "Enjoying music that blends jazz, old, and modern styles." },
              { title: "Playing Guitar", img: guitarImg, desc: "Expressing creativity and emotion through instruments." },
              { title: "Cooking", img: cookingImg, desc: "Valuing creativity in the kitchen and the art of preparation." },
              { title: "Financial Literacy", img: finliteracyImg, desc: "Managing finances wisely and building sustainable habits." },
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden group shadow-xl"
              >
                <div className="h-48 overflow-hidden relative">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030303] to-transparent opacity-90" />
                </div>
                <div className="p-6 relative -mt-12">
                  <h3 className="font-bold text-xl mb-2 text-white">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </SectionWrapper>

    </main>
  );
};

export default AboutMe;