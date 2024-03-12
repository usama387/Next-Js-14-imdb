"use client";
import React, { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "next-themes";

const DarkModeSwitch = () => {
  // #1 determining current theme of the page also setting the theme
  const { theme, setTheme, systemTheme } = useTheme();

  // #4 Managing the state transition of dark and light mode
  const [mounted, setMounted] = useState(false);

  // #2 defining the current theme if it is equal to system theme use it otherwise change it
  const currentTheme = theme === "system" ? systemTheme : theme;

  // #5 When the page is loaded handle the useState
  useEffect(() => setMounted(true), []);

  return (
    <div>
      {/* #3 Here i will use a condition */}
      {mounted &&
        (currentTheme === "dark" ? (
          <MdLightMode
            onClick={() => setTheme("light")}
            className="text-xl cursor-pointer hover:text-amber-500"
          />
        ) : (
          <MdDarkMode
            onClick={() => setTheme("dark")}
            className="text-xl cursor-pointer hover:text-amber-500"
          />
        ))}
    </div>
  );
};

export default DarkModeSwitch;
