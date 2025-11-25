import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCircuitBg from "@/assets/hero-circuit-bg.jpg";
import NetworkAnimation from "@/components/NetworkAnimation";
import { ReactTyped } from "react-typed";   // ✅ Correct import

export const Hero = () => {
  const globeRef = useRef<any>(null);

  useEffect(() => {
    if (globeRef.current) {
      const controls = globeRef.current.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 1.2;
    }
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="
        relative
        min-h-[100svh]
        overflow-hidden
        flex
        flex-col
        justify-center
        pt-24
        md:pt-0
      "
      style={{
        backgroundImage: `url(${heroCircuitBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

      {/* Circuit Overlay */}
      <div className="absolute inset-0 circuit-pattern opacity-20 pointer-events-none" />

      {/* Layout Grid */}
      <div className="relative z-10 container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT — Network Animation */}
        <div className="flex justify-center md:justify-start order-1 md:order-none">
          <div className="relative w-[80vw] h-[80vw] max-w-[450px] max-h-[450px]">
            <NetworkAnimation />
          </div>
        </div>

        {/* RIGHT — Text Section */}
        <div className="text-center md:text-right md:pr-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Hello I'm */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Hello I’m
            </motion.h1>

            {/* Sasikumar R */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 glow-text text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-neon bg-clip-text text-transparent">
                Sasikumar R
              </span>
            </motion.h1>

            {/* Typing Effect */}
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-secondary font-semibold mb-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Electronics Engineer |{" "}
              <span className="text-primary">
                <ReactTyped
                  strings={["Network Enthusiast", "Embedded Engineer", "Tech Explorer"]}
                  typeSpeed={70}
                  backSpeed={40}
                  loop
                />
              </span>
            </motion.p>

            <motion.p
              className="text-base sm:text-lg text-muted-foreground mb-12 max-w-xl mx-auto text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Building the future with cutting-edge electronics and network technologies
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                size="lg"
                onClick={() => {
                  window.open("/resume.pdf", "_blank");
                  const link = document.createElement("a");
                  link.href = "/resume.pdf";
                  link.download = "Sasikumar_Resume.pdf";
                  link.click();
                }}
                className="bg-primary hover:bg-primary/90 shadow-glow neon-pulse text-primary-foreground"
              >
                Download Resume
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={scrollToContact}
                className="neon-border bg-background/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Contact Me
              </Button>
            </motion.div>

            {/* SOCIAL ICONS */}
            <motion.div
              className="flex gap-6 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.a
                href="https://github.com/Sasikumar22555225"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-foreground hover:text-primary transition-colors p-3 rounded-full neon-border"
              >
                <Github size={28} />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/sasikumar-r-10a7581a9"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-foreground hover:text-primary transition-colors p-3 rounded-full neon-border"
              >
                <Linkedin size={28} />
              </motion.a>

              <motion.a
                href="mailto:rsasikbeece1702@gmail.com"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-foreground hover:text-primary transition-colors p-3 rounded-full neon-border"
              >
                <Mail size={28} />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* DOWN ARROW */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="text-primary neon-pulse" size={32} />
      </motion.div>
    </section>
  );
};
