import { useEffect, useState } from "react";

const useTheme = () => {
  useEffect(() => {
    const isDark = localStorage.getItem("isDark");
    if (isDark === "true") {
      document.documentElement.classList.add("dark");
    }
  },[]);

  const toggle = () => {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem(
      "isDark",
      document.documentElement.classList.contains("dark"),
    );
  };

  return { toggle };
};

export { useTheme };
