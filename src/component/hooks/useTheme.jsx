import { useEffect, useState } from "react";

const useTheme = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("isDark");

    if (isDark === "true") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggle = () => {
    const isDark = document.documentElement.classList.toggle("dark");

    localStorage.setItem("isDark", isDark);
    setDark(isDark);
  };

  return { dark, toggle };
};

export { useTheme };
