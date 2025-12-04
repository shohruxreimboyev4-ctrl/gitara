import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiSearch, FiHeart, FiMenu, FiX } from "react-icons/fi";
import { CgBox } from "react-icons/cg";

import {
  FaInstagram,
  FaYoutube,
  FaTelegramPlane,
  FaWhatsapp,
  FaVk,
  FaViber,
} from "react-icons/fa";

import logo from "../assets/svg/logo.svg";

const navLinks = [
  { to: "/catalog", label: "КАТАЛОГ" },
  { to: "/services", label: "УСЛУГИ" },
  { to: "/about", label: "О НАС" },
  { to: "/delivery", label: "ДОСТАВКА" },
  { to: "/reviews", label: "ОТЗЫВЫ" },
  { to: "/training", label: "ОБУЧЕНИЕ" },
  { to: "/contacts", label: "КОНТАКТЫ" },
  { to: "/wholesale", label: "ОПТ" },
];

const navClass = ({ isActive }) =>
  isActive
    ? "text-white font-semibold border-b-2 border-orange-400 pb-1"
    : "text-gray-300 hover:text-white";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="bg-[#0f0f13] text-white">

      {/* TOP HEADER */}
      <div className="container mx-auto max-w-[1350px] px-4 py-2 flex items-center justify-between text-sm">
        <div className="flex items-center gap-1 text-gray-300">
          <span>Ваш город:</span>
          <span className="font-semibold">Самара</span>
        </div>

        <div className="hidden md:flex items-center gap-4 text-gray-300">
          <FaWhatsapp className="text-xl cursor-pointer hover:text-white" />
          <FaTelegramPlane className="text-xl cursor-pointer hover:text-white" />
          <FaVk className="text-xl cursor-pointer hover:text-white" />
          <FaViber className="text-xl cursor-pointer hover:text-white" />
          <FaYoutube className="text-xl cursor-pointer hover:text-white" />
          <FaInstagram className="text-xl cursor-pointer hover:text-white" />
        </div>

        <div className="flex items-center gap-6 text-gray-300">
          <span>8 (800) 100 26 80</span>
          <span>ЕЖЕДНЕВНО 10:00–20:00</span>
        </div>
      </div>

      {/* FULL-WIDTH LINE */}
      <div className="border-b border-gray-700 w-full" />

      {/* MOBILE HEADER */}
      <div className="container mx-auto max-w-[1350px] px-4 py-4 flex items-center justify-between md:hidden bg-[#0f0f13]">
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-20 w-auto object-contain" />
        </NavLink>

        <div className="flex items-center gap-4">
          <FiSearch className="text-xl text-gray-300 hover:text-white cursor-pointer" />
          <CgBox className="text-xl text-gray-300 hover:text-white cursor-pointer" />
          <FiHeart className="text-xl text-gray-300 hover:text-white cursor-pointer" />
          <button
            onClick={() => setOpenMenu(true)}
            className="text-gray-300 hover:text-white"
          >
            <FiMenu className="text-2xl" />
          </button>
        </div>
      </div>

      {/* DESKTOP HEADER */}
      <div className="container mx-auto max-w-[1350px] px-4 py-4 hidden md:flex items-center justify-between bg-[#0f0f13]">
        <div className="flex items-center gap-2 text-gray-300 hover:text-white cursor-pointer">
          <FiSearch className="text-xl" />
          <span className="text-sm">поиск</span>
        </div>

        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-32 w-auto object-contain" />
        </NavLink>

        <div className="flex items-center gap-5">
          <FiHeart className="text-xl text-gray-300 hover:text-white cursor-pointer" />
          <CgBox className="text-xl text-gray-300 hover:text-white cursor-pointer" />
        </div>
      </div>

      {/* NAV LINKS */}
      <nav className="bg-[#0f0f13] hidden md:block">
        <div className="container mx-auto max-w-[1350px] px-4">
          <ul className="flex items-center justify-center gap-6 py-3 text-sm uppercase tracking-wide">
            {navLinks.map((item) => (
              <NavLink key={item.to} to={item.to} className={navClass}>
                {item.label}
              </NavLink>
            ))}
          </ul>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[999] flex transition-opacity duration-300 ${
          openMenu
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`w-[70%] max-w-[280px] bg-[#111] h-full p-5 transform transition-transform duration-300 ease-in-out 
          ${openMenu ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex justify-between items-start mb-6 pt-2">
            <div className="flex flex-col">
              <NavLink
                to="/"
                className="flex items-center mb-2"
                onClick={() => setOpenMenu(false)}
              >
                <img
                  src={logo}
                  alt="Logo"
                  className="h-20 w-auto object-contain"
                />
              </NavLink>
              <span className="text-xs text-gray-400">Главная / Меню</span>
            </div>
            <FiX
              className="text-2xl cursor-pointer text-white"
              onClick={() => setOpenMenu(false)}
            />
          </div>

          <nav className="flex flex-col gap-4 text-base">
            {navLinks.map((item, idx) => (
              <NavLink
                key={idx}
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-400 font-bold"
                    : "text-gray-300 hover:text-white"
                }
                onClick={() => setOpenMenu(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div
          className="flex-1 bg-black bg-opacity-50"
          onClick={() => setOpenMenu(false)}
        />
      </div>
    </header>
  );
}
