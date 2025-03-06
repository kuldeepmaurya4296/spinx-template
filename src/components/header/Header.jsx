'use client'
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 z-50  text-white bg-[#16171A]">
      {/* Top Header */}
      <div className=" py-2 text-sm  border-b shadow flex items-center justify-between px-20">
        <Link href="tel:+1234567890" className="mx-4  hover:text-black text-start ">
          +1 234 567 890
        </Link>
        <Link href="#" className=" hover:text-black text-end">
          #
        </Link>
      </div>

      {/* Header */}
      <div className="container mx-auto flex items-center justify-between py-8 px-10 md:px-20">
        {/* Logo */}
        <Link href="/" className="font-bold text-5xl">
          SPINX
        </Link>
        
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          {[
            { name: "Work", href: "/work" },
            { name: "Expertise", href: "/expertise" },
            { name: "About", href: "/about" },
            { name: "Resources", href: "/resources" },
            { name: "Let's Talk", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-gray-700"
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t py-4 px-4">
          {[
            { name: "Work", href: "/work" },
            { name: "Expertise", href: "/expertise" },
            { name: "About", href: "/about" },
            { name: "Resources", href: "/resources" },
            { name: "Let's Talk", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block py-2 text-gray-700 hover:text-black"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}