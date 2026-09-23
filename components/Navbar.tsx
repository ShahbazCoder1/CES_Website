"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    "Home",
    "Events",
    "Members",
    "Achievements",
    "Vision",
    "Talks",
    "Alumni",
  ];

  return (
    // Increased max-w from 1300px to 1440px to extend the navbar's maximum length
    <nav className="fixed left-1/2 top-3 z-50 w-[calc(100%-24px)] max-w-[1440px] -translate-x-1/2">
      {/* Main Navbar: Increased height slightly to h-[56px] and horizontal padding from px-3 to px-6 */}
      <div className="flex h-[56px] items-center gap-3 overflow-hidden rounded-full border border-[rgba(89,97,128,0.3)] bg-[rgba(27,32,49,0.85)] px-6 shadow-lg backdrop-blur-md sm:top-4">

        {/* CES Logo */}
        <div className="relative h-[38px] w-[38px] shrink-0 sm:h-[42px] sm:w-[42px]">
          <Image
            src="/ces-logo-main.png"
            alt="CES"
            fill
            className="object-contain"
            sizes="42px"
          />
        </div>

        {/* Society Name - Desktop */}
        <div className="hidden shrink-0 whitespace-nowrap text-[15px] font-semibold tracking-wide text-[#f5f7ff] md:block lg:text-[16px]">
          Computer Engineers&apos; Society
        </div>

        {/* CES Name - Mobile */}
        <div className="block shrink-0 text-[14px] font-semibold tracking-wider text-[#f5f7ff] md:hidden">
          CES
        </div>

        {/* Spacer */}
        <div className="min-w-0 flex-1" />

        {/* Desktop Navigation: Increased gaps between items (gap-6 / xl:gap-9) and added right padding (pr-2) to pull buttons away from the extreme right edge */}
        <div className="hidden items-center gap-6 pr-2 lg:flex xl:gap-9">
          {links.map((link) => (
            <a
              key={link}
              href={`/${link.toLowerCase()}`}
              style={{ fontFamily: "'Open Sans', sans-serif" }}
              className="whitespace-nowrap text-[14px] font-medium tracking-normal text-[#d1d7e9] transition-colors hover:text-[#ffffff]"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Tablet Navigation: Increased gaps and added right padding */}
        <div className="hidden items-center gap-5 pr-1 md:flex lg:hidden">
          {links.slice(0, 4).map((link) => (
            <a
              key={link}
              href={`/${link.toLowerCase()}`}
              style={{ fontFamily: "'Open Sans', sans-serif" }}
              className="whitespace-nowrap text-[13px] font-medium tracking-normal text-[#d1d7e9] transition-colors hover:text-[#ffffff]"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-[#d8dcef] transition-colors hover:bg-white/[0.1] md:hidden"
        >
          <span className="flex flex-col gap-[4px]">
            <span
              className={`block h-[1.5px] w-4 bg-current transition-transform duration-200 ${
                menuOpen ? "translate-y-[5.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-4 bg-current transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-4 bg-current transition-transform duration-200 ${
                menuOpen ? "-translate-y-[5.5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="mt-2 overflow-hidden rounded-2xl border border-[rgba(89,97,128,0.3)] bg-[rgba(20,27,74,0.96)] p-2 shadow-xl backdrop-blur-md md:hidden">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{ fontFamily: "'Open Sans', sans-serif" }}
              className="block rounded-xl px-4 py-3 text-[14px] font-medium tracking-normal text-[#d1d7e9] transition-colors hover:bg-white/[0.06] hover:text-[#ffffff]"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
