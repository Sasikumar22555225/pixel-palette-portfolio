import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Cpu } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";
import project5 from "@/assets/project5.jpg";


const projects = [
  {
    title: "Ukai Thermal Power Station – Unit 3 & 5",
    description:
      "Supported engineering, documentation, and network operations, including AutoCAD drawings, instrument verification, SAP workflows, and cable layout validation.",
    image: project1,
    tech: ["AutoCAD", "SAP", "Networking", "Instrumentation"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Wanakbori Thermal Power Station",
    description:
      "Handled engineering and network support, prepared AutoCAD drawings, verified instruments, managed SAP workflows, and provided system troubleshooting across departments.",
    image: project2,
    tech: ["AutoCAD", "SAP", "Networking", "Technical Documentation"],
    github: "https://github.com",
    demo: "https://demo.com",
  },

  // ----- Splitting Project 3 into 3 separate projects -----

  {
    title: "Akruti Project – System Engineering Support",
    description:
      "Provided end-to-end system engineering support by monitoring IT systems, assisting users, and resolving software/system issues to ensure smooth operations.",
    image: project3,
    tech: ["System Support", "IT Troubleshooting", "Monitoring", "Maintenance"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Garuda Project – Network Troubleshooting & Infrastructure",
    description:
      "Handled network troubleshooting, performance monitoring, and assisted in creating and maintaining network infrastructure including routers, switches, and cabling.",
    image: project4,
    tech: ["Networking", "Troubleshooting", "Infrastructure", "Cabling"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Amithys Project – Hardware & IT Infrastructure Maintenance",
    description:
      "Performed hardware troubleshooting, server/desktop maintenance, and provided continuous technical assistance to keep IT infrastructure reliable and operational.",
    image: project5,
    tech: ["Hardware Support", "Server Maintenance", "IT Infrastructure"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 bg-background relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 tech-gradient opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-primary glow-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-neon mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-glow transition-all duration-500 group neon-border bg-card/50 backdrop-blur-sm h-full flex flex-col">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    {/* Circuit overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                    <motion.div
                      className="absolute top-4 right-4 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Cpu className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold mb-3 text-primary group-hover:glow-text transition-all">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gradient-circuit neon-border rounded text-xs font-medium text-accent"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
