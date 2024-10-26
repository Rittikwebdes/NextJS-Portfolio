"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu after navigating to a link
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="navbar backdrop-blur-2xl fixed top-0 left-0 right-0 z-50 md:px-9 px-2 md:py-5 py-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              onClick={toggleMenu}
              className="btn btn-ghost text-white lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <div  className={`flex-none lg:flex ${isOpen ? "block" : "hidden"}`}>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content text-white bg-green-600 space-y-3 rounded-box z-[1] mt-3 w-52 p-3 shadow"
              >
                <Link
                onClick={closeMenu}
                  href="/home"
                  className="underline text-2xl"
                  prefetch={true}
                >
                  HOME
                </Link>
                <Link
                onClick={closeMenu}
                  href="/about"
                  className="underline text-2xl"
                  prefetch={true}
                >
                  ABOUT
                </Link>
                <Link
                onClick={closeMenu}
                  href="/skills"
                  className="underline text-2xl"
                  prefetch={true}
                >
                  SKILLS
                </Link>
                <Link
                onClick={closeMenu}
                  href="/projects"
                  className="underline text-2xl"
                  prefetch={true}
                >
                  PROJECTS
                </Link>
                <Link
                onClick={closeMenu}
                  href="/contact"
                  className="underline text-2xl"
                  prefetch={true}
                >
                  CONTACT
                </Link>
              </ul>
            </div>
          </div>
          <a className="btn btn-ghost text-xl text-white">
          <Image src={require("../../public/logo.png")}
          width={40}
          alt="Logo"
          
          ></Image>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-5 text-white">
            <Link
              href="/home"
              prefetch={true}
              className="hover:text-blue-800 hover:scale-105 duration-300"
            >
              HOME
            </Link>
            <Link
              href="/about"
              prefetch={true}
              className="hover:text-blue-800 hover:scale-105 duration-300"
            >
              ABOUT
            </Link>
            <Link
              href="/skills"
              prefetch={true}
              className="hover:text-blue-800 hover:scale-105 duration-300"
            >
              SKILLS
            </Link>
            <Link
              href="/projects"
              prefetch={true}
              className="hover:text-blue-800 hover:scale-105 duration-300"
            >
              PROJECTS
            </Link>
            <Link
              href="/contact"
              prefetch={true}
              className="hover:text-blue-800 hover:scale-105 duration-300"
            >
              CONTACT
            </Link>
          </ul>
        </div>
        <div className="navbar-end text-white">
      <a href="/Rittik.pdf" download="Rittik">
      <button className="bg-red-600 px-2 rounded-full py-1 hover:bg-red-800 shadow-sm shadow-red-600">Download CV</button>{" "}
      </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
