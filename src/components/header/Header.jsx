'use client';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';

// Navigation Data
const navItems = [
  { name: 'Work', href: '/work' },
  { 
    name: 'Expertise', 
    href: '/expertise', 
    dropdown: [
      { title: 'Web Development', link: '/expertise/web-dev' },
      { title: 'Mobile Apps', link: '/expertise/mobile-apps' },
      { title: 'UI/UX Design', link: '/expertise/ui-ux' }
    ]
  },
  { name: 'About', href: '/about' },
  { 
    name: 'Resources', 
    href: '/resources', 
    dropdown: [
      { title: 'Blog', link: '/resources/blog' },
      { title: 'Case Studies', link: '/resources/case-studies' },
      { title: 'Whitepapers', link: '/resources/whitepapers' }
    ]
  }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [hovered, setHovered] = useState(null);
  const controls = useAnimation();
  const sizeControls = useAnimation();

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    controls.start({ backgroundColor: scrolling ? 'white' : '#16171A', color: scrolling ? 'black' : 'white' });
    sizeControls.start({ height: scrolling ? '70px' : '100px', padding: scrolling ? '10px 20px' : '20px 40px' });
  }, [scrolling, controls, sizeControls]);

  return (
    <motion.nav className="w-full fixed top-0 z-50 text-white" animate={controls}>
      <div className="py-2 text-sm border-b shadow flex items-center justify-between px-6 md:px-20">
        <Link href="tel:+1234567890" className="hover:text-black">+1 234 567 890</Link>
        <Link href="#" className="hover:text-black">#</Link>
      </div>
      <motion.div animate={sizeControls} className="container mx-auto flex items-center justify-between px-6 md:px-20">
        <Link href="/" className="font-bold text-3xl md:text-5xl">SPINX</Link>
        <div className="hidden md:flex space-x-16 text-lg relative items-center">
          {navItems.map((item) => (
            <div key={item.name} className="relative" onMouseEnter={() => setHovered(item.name)} onMouseLeave={() => setHovered(null)}>
              <Link href={item.href} className="hover:text-gray-700">{item.name}</Link>
              {item.dropdown && hovered === item.name && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="absolute left-0 top-full mt-2 w-48 bg-white text-black shadow-lg rounded-lg p-2">
                  {item.dropdown.map((subItem) => (
                    <Link key={subItem.title} href={subItem.link} className="block px-4 py-2 hover:bg-gray-200 rounded">{subItem.title}</Link>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
          <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Let's Talk</Link>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
      </motion.div>
      {isOpen && (
        <div className="md:hidden border-t py-4 px-4 bg-white text-black">
          {navItems.map((item) => (
            <div key={item.name} className="py-2">
              <Link href={item.href} className="text-gray-700 hover:text-black block">{item.name}</Link>
              {item.dropdown && (
                <div className="ml-4 mt-2">
                  {item.dropdown.map((subItem) => (
                    <Link key={subItem.title} href={subItem.link} className="block text-gray-600 hover:text-black py-1">{subItem.title}</Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/contact" className="block bg-blue-600 text-white px-4 py-2 rounded mt-4 text-center hover:bg-blue-700">Let's Talk</Link>
        </div>
      )}
    </motion.nav>
  );
}