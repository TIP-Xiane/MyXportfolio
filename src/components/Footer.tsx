import { Github, Facebook, Instagram, Mail, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative z-10 py-8 border-t border-border/20">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Xiane Heins Guevara — Building technology with impact.
        </p>
        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: "https://github.com/TIP-Xiane", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/xiane-heins-guevara-b292393b9", label: "LinkedIn" },
            { icon: Facebook, href: "https://facebook.com/xiane.heins.guevara", label: "Facebook" },
            { icon: Instagram, href: "https://instagram.com/xx.archieves", label: "Instagram" },
            { icon: Mail, href: "mailto:mxhguevara@tip.edu.ph", label: "Email" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <link.icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
