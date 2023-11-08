import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "About", href: "/about", current: false },
  { name: "Work", href: "/work", current: false },
  { name: "Contact", href: "/contact", current: false },
];

function Navbar() {
  const [hoveredPath, setHoveredPath] = useState("");
  const location = useLocation();

  return (
    <div className="flex justify-center sticky z-[100] top-5 bg-transparent">
      <nav className="navbar relative z-[100] px-2 py-3 bg-gray-600 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-[#ffffff2a]">
        {navigation.map((item) => (
          <Link
            key={item.href}
            className={`font-satoshi px-5 lg:px-6 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in ${
              item.href === location.pathname
                ? "text-white font-semibold"
                : "text-white font-normal"
            }`}
            to={item.href}
            onMouseEnter={() => setHoveredPath(item.href)}
            onMouseLeave={() => setHoveredPath("")}
          >
            <span>{item.name}</span>
            {item.href === hoveredPath && (
              <motion.div
                className="absolute bottom-0 left-0 h-full bg-transparent bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 border border-[#ffffff3a] rounded-lg -z-10"
                layoutId="navbar"
                aria-hidden="true"
                style={{
                  width: "100%",
                }}
                transition={{
                  type: "easeInOut",
                  bounce: 0.25,
                  stiffness: 130,
                  damping: 9,
                  duration: 0.2,
                }}
              />
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Navbar;
