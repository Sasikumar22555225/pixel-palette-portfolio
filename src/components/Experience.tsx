import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Briefcase, Network } from "lucide-react";
import experienceNetwork from "@/assets/experience-network.jpg";

const experiences = [
  {
    title: "Graduate Apprenticeship (System Engineer)",
    company: "Bharat Heavy Electricals Limited (BHEL)",
    period: "2024 - 2025",
    description: "Strengthening enterprise network reliability through system troubleshooting and infrastructure documentation using AutoCAD and SAP MM.",
    skills: ["Cisco", "Network Security", "AutoCAD","SAP"],
  },
  {
    title: "Network System Engineer",
    company: "Satvat Infosol Private Limited",
    period: "2021 - 2022",
    description: "Maintaining high-performance networks through LAN/WAN configuration, firewall and routing management, traffic monitoring, and protocol-level troubleshooting (TCP/IP, DNS, DHCP).",
    skills: ["Routers & Switches", "TCP/IP", "DNS", "DHCP", "IP Addressing & Subnetting", "Network Monitoring", "Connectivity Troubleshooting", "Network Security"],
  },
];

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 bg-gradient-subtle relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 circuit-pattern opacity-10 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-primary glow-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-neon mx-auto mb-12 rounded-full" />

          <div className="max-w-6xl mx-auto">
            {/* Network Infrastructure Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <Card className="overflow-hidden shadow-cyber border-2 border-secondary/30 group">
                <div className="relative">
                  <img
                    src={experienceNetwork}
                    alt="Network Infrastructure"
                    className="w-full h-64 md:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  <motion.div
                    className="absolute bottom-6 left-6 right-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Network className="w-8 h-8 text-secondary" />
                      <h3 className="text-2xl font-bold text-secondary">Network Engineer Trainee</h3>
                    </div>
                    <p className="text-muted-foreground">Building scalable and secure network infrastructures</p>
                  </motion.div>
                </div>
              </Card>
            </motion.div>

            {/* Experience Timeline */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                >
                  <Card className="p-8 hover:shadow-glow transition-all duration-500 group neon-border bg-card/50 backdrop-blur-sm relative overflow-hidden">
                    {/* Animated connection line */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-primary group-hover:shadow-neon transition-all" />
                    
                    <div className="flex flex-col md:flex-row gap-6">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 group-hover:shadow-neon transition-all"
                      >
                        <Briefcase className="w-8 h-8 text-white" />
                      </motion.div>

                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                          <h3 className="text-2xl font-bold text-primary">{exp.title}</h3>
                          <span className="text-sm text-muted-foreground font-semibold bg-muted px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-lg font-semibold text-secondary mb-3">{exp.company}</p>
                        <p className="text-muted-foreground mb-4">{exp.description}</p>
                        
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <motion.span
                              key={skillIndex}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={isInView ? { opacity: 1, scale: 1 } : {}}
                              transition={{ duration: 0.3, delay: 0.6 + index * 0.2 + skillIndex * 0.1 }}
                              className="px-3 py-1 bg-gradient-circuit neon-border rounded-full text-xs font-medium text-accent hover:shadow-cyber transition-all duration-300 cursor-default"
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
