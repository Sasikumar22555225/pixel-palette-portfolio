import { Moon, Sun } from "lucide-react";
import { useThemeStore } from "@/store/themeStore";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useThemeStore();

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="relative"
      >
        <motion.div
          initial={{ rotate: 0, opacity: 0 }}
          animate={{ rotate: isDark ? 180 : 0, opacity: isDark ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="absolute"
        >
          <Sun className="h-5 w-5" />
        </motion.div>
        <motion.div
          initial={{ rotate: 0, opacity: 0 }}
          animate={{ rotate: isDark ? 0 : -180, opacity: isDark ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute"
        >
          <Moon className="h-5 w-5" />
        </motion.div>
      </Button>
    </motion.div>
  );
};
