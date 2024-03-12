import React from "react";
import Link from "next/link";

// #1.1 Accessing props from parent Header
const MenuItem = ({ title, address }) => {
  return (
    <div>
      {/* #2.1 Using Link for navigation and and using the props to show in header */}
      <Link href={address} className="hover:text-amber-500 ">
        <p className="uppercase text-sm ">{title}</p>
      </Link>
    </div>
  );
};

export default MenuItem;
