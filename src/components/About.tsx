import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import aboutElectronics from "@/assets/about.png";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-gradient-subtle relative overflow-hidden" ref={ref}>
      {/* Animated circuit background */}
      <div className="absolute inset-0 circuit-pattern opacity-10 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About <span className="text-primary glow-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-neon mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            {/* LEFT - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card
                className="
                  overflow-hidden 
                  shadow-glow 
                  hover:shadow-neon 
                  transition-all 
                  duration-500 
                  group 
                  border-2 
                  border-primary/20 
                  hover:border-primary 
                  w-fit              /* ⭐ CARD MATCHES IMAGE WIDTH */
                  mx-auto
                "
              >
                {/* Image Container */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <img
                    src={aboutElectronics}
                    alt="Electronics and Networking"
                    className="w-full h-auto max-h-[45vh] md:max-h-[55vh] object-contain"
                  />

                  {/* Cyber scan effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 cyber-scan" />
                </motion.div>
              </Card>
            </motion.div>

            {/* RIGHT - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am <span className="text-primary font-semibold">Sasikumar R</span>, a System Engineer skilled in 
                <span className="text-secondary font-semibold"> Electronic systems, Networking, SAP, and AutoCAD</span>. 
                I have hands-on experience in managing IT systems, troubleshooting networks, creating technical documentation, 
                and supporting large-scale industrial projects.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I enjoy solving technical problems, improving system performance, and working in team-driven environments. 
                My experience spans across <span className="text-accent font-semibold">BHEL, power plants, and industrial environments</span>, 
                where I supported system operations, prepared engineering drawings, and managed material workflows using SAP.
              </p>

              <motion.div
                className="flex flex-wrap gap-3 mt-8"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {[
                  "C & C++",
                  "Network Security",
                  "Linux",
                  "AWS",
                  "Embedded Systems",
                  "AutoCAD",
                  "SAP",
                  "Circuit Design",
                ].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                    className="px-4 py-2 bg-gradient-circuit neon-border rounded-full text-sm font-medium text-primary hover:shadow-glow transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
