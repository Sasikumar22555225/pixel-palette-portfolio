import { useEffect } from "react";
import { useThemeStore } from "@/store/themeStore";
import { Navigation } from "@/components/Navigation";
import {Hero} from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Achievements } from "@/components/Achievements";
import { Coursework } from "@/components/Coursework";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  const { isDark, setTheme } = useThemeStore();

  useEffect(() => {
    // Apply theme on mount
    setTheme(isDark);
  }, [isDark, setTheme]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Achievements />
      <Coursework />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
