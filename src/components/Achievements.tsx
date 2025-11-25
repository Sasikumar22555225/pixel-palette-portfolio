import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Trophy, Medal, Award, Star } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Winner – BHEL Learning Week Competition 2024",
    description:
      "Secured 1st place in an activity-based competition themed “Align–Act–Achieve”, showcasing strong teamwork, strategic planning, and execution skills.",
    year: "2024",
    color: "text-yellow-500",
  },
  {
    icon: Medal,
    title: "Top 5 Finalist – National-Level Virtual Hackathon",
    description:
      "Achieved a top 5 position in a national hackathon organized by OneYes Technology for developing an innovative and scalable tech solution.",
    year: "2020",
    color: "text-blue-500",
  },
  {
    icon: Award,
    title: "Inspire Award",
    description:
      "Honored by my college for building a creative and impactful innovative project.",
    year: "2019",
    color: "text-purple-500",
  },
  {
    icon: Star,
    title: "Workshop Conductor – Network & Wireless Communication",
    description:
      "Conducted a hands-on workshop for 30+ peers, teaching fundamentals of networking, wireless communication, and practical troubleshooting.",
    year: "2021",
    color: "text-green-500",
  },
];

export const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-primary">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12 rounded-full" />

          {/* ✅ EXACTLY 2 CARDS PER ROW */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-glow transition-all duration-300 group border-border hover:border-primary h-full">
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:shadow-glow transition-all"
                    >
                      <achievement.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                    <p className="text-muted-foreground mb-3">{achievement.description}</p>

                    <span className="text-sm font-semibold text-primary">
                      {achievement.year}
                    </span>
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
