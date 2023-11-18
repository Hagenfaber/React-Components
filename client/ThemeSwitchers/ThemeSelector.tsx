"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import "./ThemeSelector.css";

export const ThemeSelector = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
    const currentTheme = theme === "system" ? systemTheme : theme;
    setTheme(currentTheme ?? "light");
  }, [setTheme, systemTheme, theme]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="selector-container">
      <label htmlFor="theme" className="selector-label">
        Theme
      </label>
      <select
        id="theme"
        name="theme"
        className="selector"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="system">System</option>
      </select>
    </div>
  );
};
