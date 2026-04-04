// src/pages/NotFound.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Hammer } from "lucide-react";

const NotFound = () => {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0f16] font-sans">
      
      {/* Background Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0ea5e9]/10 via-transparent to-transparent opacity-60 blur-2xl rounded-full pointer-events-none" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto"
      >
        {/* Eyebrow */}
        <p className="text-slate-400 text-xs md:text-sm tracking-[0.3em] uppercase mb-8 font-medium">
          Xiane — Computer Engineer & Startup Builder
        </p>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-8">
          Currently building this <br className="hidden md:block" />
          <span className="text-[#0ea5e9]">behind the scenes.</span>
        </h1>

        {/* Subtitle */}
        <div className="flex items-center gap-2 text-slate-400 text-base md:text-lg mb-12">
          <Hammer size={18} className="text-[#0ea5e9]" />
          <p>Cooking up something that matters. Check back soon.</p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <Link 
            to="/" 
            className="px-8 py-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 text-white font-medium shadow-lg backdrop-blur-sm"
          >
            Back to Home
          </Link>
          

        </div>
      </motion.div>

    </main>
  );
};

export default NotFound;