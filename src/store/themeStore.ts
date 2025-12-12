import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ThemeStore {
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (isDark: boolean) => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      isDark: true, // Always dark mode
      toggleTheme: () => {
        // Do nothing - dark mode only
        document.documentElement.classList.add('dark');
      },
      setTheme: (isDark) => {
        // Always force dark mode
        document.documentElement.classList.add('dark');
        set({ isDark: true });
      },
    }),
    {
      name: 'theme-storage',
    }
  )
);
