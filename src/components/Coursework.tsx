import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { BookOpen, Cpu, Radio, Network, Zap, Waves } from "lucide-react";
import courseworkEquipment from "@/assets/coursework-equipment.jpg";

const courses = [
  {
    icon: Cpu,
    title: "Cloud Computing Training – Besant Technologies",
    description: "Gained hands-on experience with cloud infrastructure, service models, and deployment workflows through structured cloud computing training.",
  },
  {
    icon: Network,
    title: "Networking Fundamentals – Workspot",
    description: "Completed a practical networking course covering LAN/WAN setup, routing, switching, and core network troubleshooting concepts.",
  },
  {
    icon: Radio,
    title: "Industrial Electrical & Control Systems – Sakthi Electrical Control",
    description: "Worked on electrical control panels, wiring, and industrial control systems, gaining foundational experience in power circuits and automation support.",
  },
];

export const Coursework = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="coursework" className="py-20 bg-background relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 tech-gradient opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-primary glow-text">Coursework</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-neon mx-auto mb-12 rounded-full" />

          <div className="max-w-6xl mx-auto">
            {/* Lab Equipment Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >

            </motion.div>

            {/* Course Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <Card className="p-6 hover:shadow-glow transition-all duration-500 group neon-border bg-card/50 backdrop-blur-sm h-full relative overflow-hidden">
                    {/* Circuit pattern overlay */}
                    <div className="absolute inset-0 circuit-pattern opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 neon-pulse"
                      >
                        <course.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-bold mb-2 text-primary group-hover:glow-text transition-all">
                        {course.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">{course.description}</p>
                    </div>

                    {/* Animated corner accents */}
                    <motion.div
                      className="absolute top-0 right-0 w-16 h-16 bg-gradient-primary opacity-10 rounded-bl-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
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
