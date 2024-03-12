import React from "react";
import MenuItem from "./MenuItem";
import Link from "next/link";

const Header = () => {
  return (
    //1 Main Parent div
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      {/* #2 left side styling for menuitem*/}
      <div className="flex gap-4">
        {/* passing props into child component */}
        <MenuItem title="home" address="/" />
        <MenuItem title="about" address="/about" />
      </div>

      {/* #3 Right Side */}
      <Link href={'/'} className="flex gap-1 items-center ">
        <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">IMDb</span>
        <span className="text-xl hidden sm:inline ">CLONE</span>
      </Link>
    </div>
  );
};

export default Header;
