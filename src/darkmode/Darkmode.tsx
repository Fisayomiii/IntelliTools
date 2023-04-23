import { useState, useEffect } from "react";

type Theme = "light" | "dark";

const DarkModeToggle = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    return (savedTheme ?? "light");
  });

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      return newTheme;
    });
  };

  return (
    <>
      <div className="block text-slate-400 transition-all hover:text-slate-500 dark:hover:text-slate-300" title={theme === "dark" ? "Light Mode" : "Dark Mode"} onClick={toggleTheme} >
        <i className={theme === "dark" ? "bx bxs-sun bx-sm transition duration-300 ease-in-out transform" : "bx bxs-moon bx-sm transition duration-300 ease-in-out transform"}></i>
      </div>
    </>
  );
};

export default DarkModeToggle;
