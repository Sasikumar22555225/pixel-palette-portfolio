import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Coursework", href: "#coursework" },
  { name: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    // ✅ GLOBAL NON-BREAKING FIX
    const nav = document.querySelector("nav") as HTMLElement | null;
    const root = document.querySelector("#root") as HTMLElement | null;

    if (nav && root) {
      const navHeight = nav.offsetHeight;
      const rootPaddingTop = parseFloat(
        getComputedStyle(root).paddingTop || "0"
      );

      // Compensate BOTH navbar + root padding
      document.documentElement.style.scrollPaddingTop = `${
        navHeight + rootPaddingTop
      }px`;
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.documentElement.style.scrollPaddingTop = "";
    };
  }, []);

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    requestAnimationFrame(() => {
      setTimeout(() => setIsOpen(false), 300);
    });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-lg shadow-lg"
          : "bg-background/80 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold text-gradient-primary"
          >
            Portfolio
          </motion.div>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50"
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div className="md:hidden mt-4 rounded-lg bg-card/95 backdrop-blur-xl border border-border shadow-xl">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-3 px-4 hover:bg-primary/10"
                >
                  {item.name}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
