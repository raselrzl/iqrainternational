"use client";
import { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const pathname = usePathname();

  const toggleNav = () => setIsNavVisible(!isNavVisible);

  const isActive = (path) =>
    pathname === path ? "text-white bg-primary" : "text-gray-400";

  return (
    <header className="bg-black fixed top-0 left-0 w-full z-50 p-4 shadow-lg  lg:px-48 md:px-48">
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-2">
          <Link href="/" className={`px-4 py-2 rounded ${isActive("/")}`}>
          Home
          </Link>
          <Link href="/service" className={`px-4 py-2 rounded ${isActive("/service")}`}>
            Service
          </Link>
          <Link href="/studyabroad" className={`px-4 py-2 rounded ${isActive("/studyabroad")}`}>
          study Abroad
          </Link>
          <Link
            href="/contact"
            className={`px-4 py-2 rounded ${isActive("/contact")}`}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleNav} className="text-white">
            <GiHamburgerMenu size={30} />
          </button>
        </div>
      </div>

      {/* Drawer Navigation */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-black text-white shadow-lg transform transition-transform duration-300 ${
          isNavVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center">
          <button onClick={toggleNav}>
            <IoClose size={30} />
          </button>
        </div>
        <nav className="mt-4 space-y-4">
          <Link
            href="/"
            className={`block px-4 py-2 rounded ${isActive("/")}`}
            onClick={toggleNav}
          >
            Home
          </Link>
          <Link
            href="/service"
            className={`block px-4 py-2 rounded ${isActive("/service")}`}
            onClick={toggleNav}
          >
            Service
          </Link>
          <Link
            href="/about"
            className={`block px-4 py-2 rounded ${isActive("/studyabroad")}`}
            onClick={toggleNav}
          >
            Study Abroad
          </Link>
          <Link
            href="/contact"
            className={`block px-4 py-2 rounded ${isActive("/contact")}`}
            onClick={toggleNav}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
