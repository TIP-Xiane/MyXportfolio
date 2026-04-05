import React, { useState, useEffect } from "react";
import { Home, User, Wrench, FolderOpen, MessageSquare, Menu, X, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";


const links = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Skills", href: "#skills", icon: Wrench },
  { label: "Projects", href: "#projects", icon: FolderOpen },
  { label: "Contact", href: "#contact", icon: MessageSquare },
];
// TODO: Update Landing URL when the landing page is deployed (currently placeholder)
const portfolioLink = { label: "Landing", href: "https://emtech-landing-fawn.vercel.app/", icon: ArrowUp, isHighlighted: true };

const Navbar = () => {
  const [hovered, setHovered] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  const location = useLocation();
  const navigate = useNavigate();

  const normalizeHash = (href: string) => {
    const hashIndex = href.indexOf("#");
    if (hashIndex === -1) return "";
    return href.slice(hashIndex);
  };

  const scrollToSection = (hash: string) => {
    const section = document.querySelector(hash) as HTMLElement | null;
    if (!section) return;

    // close mobile menu before scrolling to keep the layout from jumping
    setMobileOpen(false);

    // small timing guard to avoid layout race with fixed top bar transition
    setTimeout(() => {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", hash);
      setActiveHash(hash);
    }, 0);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    // Short-circuit to allow navigating to root route or out-of-page links.
    if (href.startsWith("/")) {
      setMobileOpen(false);
      navigate(href);
      return;
    }

    const hash = normalizeHash(href);
    if (!hash) return;

    // always close mobile menu when a nav link is clicked
    setMobileOpen(false);

    if (location.pathname !== "/") {
      navigate(`/${hash}`);
      return;
    }

    scrollToSection(hash);
  };

  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      // if we hit /#about from outside, scroll to it after route mount
      scrollToSection(location.hash);
      return;
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (location.pathname !== "/") return;

    const onScroll = () => {
      const sections = links
        .map((l) => document.querySelector(normalizeHash(l.href)))
        .filter(Boolean);
      const scrollY = window.scrollY + window.innerHeight / 3;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i] as HTMLElement | null;
        if (el && el.offsetTop <= scrollY) {
          setActiveHash(links[i].href);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  return (
    <>
      {/* Desktop — bottom floating island */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <motion.nav
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.8 }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="relative"
        >
          <motion.div
            layout
            className="flex items-center gap-1 rounded-full border border-border/40 px-2 py-2"
            style={{
              background: "hsl(var(--background) / 0.7)",
              backdropFilter: "blur(24px) saturate(1.4)",
              WebkitBackdropFilter: "blur(24px) saturate(1.4)",
              boxShadow:
                "0 8px 40px hsla(220, 20%, 2%, 0.5), 0 0 0 1px hsla(0,0%,100%,0.04), 0 0 80px hsl(var(--primary) / 0.06)",
            }}
            transition={{ layout: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] } }}
          >
            {links.map((l) => {
              const isActive = activeHash === l.href;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => handleNavClick(e, l.href)}
                  className={`relative flex items-center gap-2 rounded-full px-3 py-2 text-[12px] font-medium transition-all duration-300 ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {/* Active pill background */}
                  {isActive && l.label !== "Contact" && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: "linear-gradient(135deg, hsl(var(--primary) / 0.15), hsl(var(--accent) / 0.1))",
                        border: "1px solid hsl(var(--primary) / 0.2)",
                      }}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <l.icon size={15} strokeWidth={1.5} className="relative z-10" />
                  <AnimatePresence>
                    {hovered && (
                      <motion.span
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="relative z-10 overflow-hidden whitespace-nowrap"
                      >
                        {l.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </a>
              );
            })}

            {/* Divider */}
            <div className="h-5 w-px bg-border/40"></div>

            {/* Portfolio Link - Highlighted */}
            <a
              href={portfolioLink.href}
              onClick={(e) => handleNavClick(e, portfolioLink.href)}
              className="relative flex items-center gap-2 rounded-full px-3 py-2 text-[12px] font-medium transition-all duration-300 text-foreground hover:text-foreground"
            >
              {/* Highlighted background */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--primary) / 0.25), hsl(var(--accent) / 0.15))",
                  border: "1px solid hsl(var(--primary) / 0.4)",
                }}
              />
              <portfolioLink.icon size={15} strokeWidth={1.5} className="relative z-10" />
              <AnimatePresence>
                {hovered && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="relative z-10 overflow-hidden whitespace-nowrap"
                  >
                    {portfolioLink.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </a>
          </motion.div>
        </motion.nav>
      </div>

      {/* Mobile — top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 md:hidden">
        <div
          className="flex items-center justify-between h-14 px-5"
          style={{
            background: "hsl(var(--background) / 0.8)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderBottom: "1px solid hsl(var(--border) / 0.3)",
          }}
        >
          <a href="#home" className="text-sm font-bold tracking-tight gradient-text">
            xiane.dev
          </a>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-foreground" aria-label="Toggle menu">
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden"
              style={{
                background: "hsl(var(--background) / 0.95)",
                backdropFilter: "blur(20px)",
                borderBottom: "1px solid hsl(var(--border) / 0.3)",
              }}
            >
              <ul className="px-5 py-4 flex flex-col gap-3">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={(e) => handleNavClick(e, l.href)}
                      className={`flex items-center gap-3 text-sm font-medium transition-colors ${
                        activeHash === l.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <l.icon size={16} strokeWidth={1.5} />
                      {l.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={portfolioLink.href}
                    onClick={(e) => handleNavClick(e, portfolioLink.href)}
                    className="flex items-center gap-3 text-sm font-semibold text-foreground transition-colors"
                  >
                    <portfolioLink.icon size={16} strokeWidth={1.5} />
                    {portfolioLink.label}
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
