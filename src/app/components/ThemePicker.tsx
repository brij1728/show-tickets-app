"use client";

import React, { useEffect, useState } from "react";

type ThemeOption = "light" | "dark" | "system";

const applyTheme = (theme: ThemeOption) => {
  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (theme === "system") {
    document.documentElement.classList.toggle("dark", isDarkMode);
  } else {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }
};

export const ThemePicker: React.FC = () => {
  const [theme, setTheme] = useState<ThemeOption>("system");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as ThemeOption | null;
    console.log(savedTheme);
    const initialTheme = savedTheme ? savedTheme : "system";
    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const onThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newTheme = e.target.value as ThemeOption;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  };

  return (
    <div>
      <label htmlFor="theme-select">Choose a theme: </label>
      <select id="theme-select" value={theme} onChange={onThemeChange}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="system">System</option>
      </select>
    </div>
  );
};
