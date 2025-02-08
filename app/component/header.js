"use client";
import { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Footer } from "./footer";

export default function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const pathname = usePathname();

  const toggleNav = () => setIsNavVisible(!isNavVisible);

  const isActive = (path) =>
    pathname === path
      ? "border-2 border-gray-600 text-gray-600" // Active link: gray border and text
      : "border border-white text-white"; // Inactive link: white border and text

  return (
    <header className="bg-black fixed top-0 left-0 w-full z-50 p-2 shadow-lg lg:px-48 md:px-48">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/iq1.png"
              alt="IIEC Logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Footer for larger screens only */}
        <h2 className="text-md text-center mr-10 font-extrabold uppercase tracking-wide blink text-yellow-300">
            September Intake!
          </h2>
        <div className="hidden lg:block">
          <Footer />
        </div>
        {/* <h1 className="text-center text-xs md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 py-1">
          "Your success is our only mission"
        </h1> */}

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          <Link
            href="/"
            className={`px-6 py-2 rounded-md border-2 ${isActive("/")}`}
          >
            Home
          </Link>
          <Link
            href="/service"
            className={`px-6 py-2 rounded-md border-2 ${isActive("/service")}`}
          >
            Service
          </Link>
          <Link
            href="/studyabroad"
            className={`px-6 py-2 rounded-md border-2 ${isActive("/studyabroad")}`}
          >
            Study Abroad
          </Link>
          <Link
            href="/contact"
            className={`px-6 py-2 rounded-md border-2 ${isActive("/contact")}`}
          >
            Contact
          </Link>
          {/* Visit Abroad Link */}
          <Link
            href="/visit"
            className={`px-6 py-2 rounded-md border-2 ${isActive("/visit")}`}
          >
            Visit Abroad
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleNav} className="text-white">
            <GiHamburgerMenu size={30} />
          </button>
        </div>
      </div>

      {/* Drawer Navigation for Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-7/3 bg-black text-white shadow-lg transform transition-transform duration-300 ${
          isNavVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center">
          <button onClick={toggleNav}>
            <IoClose size={30} />
          </button>
        </div>
        <nav className="mt-4 space-y-4 mx-4">
          <Link
            href="/"
            className={`block px-10 py-2 rounded-md border-2 ${isActive("/")}`}
            onClick={toggleNav}
          >
            Home
          </Link>
          <Link
            href="/service"
            className={`block px-10 py-2 rounded-md border-2 ${isActive("/service")}`}
            onClick={toggleNav}
          >
            Service
          </Link>
          <Link
            href="/studyabroad"
            className={`block px-10 py-2 rounded-md border-2 ${isActive("/studyabroad")}`}
            onClick={toggleNav}
          >
            Study Abroad
          </Link>
          {/* Visit Abroad Link in Mobile */}
          <Link
            href="/visit"
            className={`block px-10 py-2 rounded-md border-2 ${isActive("/visit")}`}
            onClick={toggleNav}
          >
            Visit Abroad
          </Link>
          <Link
            href="/contact"
            className={`block px-10 py-2 rounded-md border-2 ${isActive("/contact")}`}
            onClick={toggleNav}
          >
            Contact
          </Link>
          <div className="ml-4 pt-10">
          <Footer />
          </div>
        </nav>
      </div>
    </header>
  );
}
