"use client";
import React, { useEffect, useState } from "react";
// import "../styles/header.css";
const categories = [
  { name: "home", link: "#" },
  { name: "trending", link: "#trending" },
  { name: "destination", link: "#destination" },
  { name: "testimonials", link: "#testimonials" },
];

export function Header() {
  const [visible, setVisible] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    // console.log("scroll", scrolled);
    if (scrolled > 0) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <header
      style={{
        background: visible ? "var(--bg-main)" : "transparent",
        boxShadow: visible ? "2px 20px 30px var(--shadow-color)" : "none",
      }}
    >
      <nav>
        <a href="#" className="logo">
          <i class="fa-solid fa-person-hiking"></i> Travel
        </a>
        <div
          className="menu_btn"
          onClick={() => setShowMenu((value) => !value)}
        >
          {showMenu ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </div>
        <ul style={{ height: showMenu ? 250 : 0 }}>
          {categories.map((caterogy) => (
            <li key={caterogy.name}>
              <a href={caterogy.link} className="">
                {caterogy.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
