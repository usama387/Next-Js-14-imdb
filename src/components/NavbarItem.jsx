"use client";
import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const NavbarItem = ({ title, param }) => {
  //   A hook from ext.js that allows you to access the URL
  const searchPrams = useSearchParams();

  //   A variable to store our current page name
  const genre = searchPrams.get("genre");

  return (
    <div>
      {/* The link renders a dynamic url from tmdb and i also have dynamic styling on hovering the links */}
      <Link
        href={`/?genre=${param}`}
        className={`hover:text-amber-600 font-semibold ${
          genre === param
            ? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
            : ""
        } `}
      >
        {title}
      </Link>
    </div>
  );
};

export default NavbarItem;
