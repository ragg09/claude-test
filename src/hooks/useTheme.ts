import { useState, useEffect } from "react";

type Theme = "light" | "dark";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme && (savedTheme === "light" || savedTheme === "dark")) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const setThemePreference = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return {
    theme,
    toggleTheme,
    setThemePreference,
    isLight: theme === "light",
    isDark: theme === "dark",
  };
};
