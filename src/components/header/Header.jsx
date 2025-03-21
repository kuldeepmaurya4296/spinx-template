'use client';
import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { usePathname } from 'next/navigation';
import CursorFollower from '../common/CursorFollower';

const navItems = [
  { name: 'Work', href: '/work' },
  {
    name: 'Expertise',
    href: '/expertise',
    dropdown: [
      { title: 'Web Development', link: '/expertise/web-dev', description: 'Building high-performance websites and applications.' },
      { title: 'Mobile Apps', link: '/expertise/mobile-apps', description: 'Creating seamless mobile experiences for iOS and Android.' },
      { title: 'UI/UX Design', link: '/expertise/ui-ux', description: 'Designing intuitive and engaging user experiences.' }
    ]
  },
  {
    name: 'About',
    href: '/about-us',
    dropdown: [
      { title: 'Who We Are', link: '/about-us', description: 'Learn about our journey and team.' },
      { title: 'Our Process', link: '/our-process', description: 'Discover how we bring ideas to life.' },
      { title: 'Careers', link: '/careers', description: 'Join our team and grow with us.' }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    dropdown: [
      { title: 'Insights', link: '/resources/blog', description: 'Stay updated with industry trends and insights.' },
      { title: 'E-Book', link: '/resources/case-studies', description: 'Download our in-depth guides and case studies.' },
      { title: 'RFP Templates', link: '/resources/whitepapers', description: 'Access ready-to-use proposal templates.' }
    ]
  }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [hovered, setHovered] = useState(null);
  const controls = useAnimation();
  const sizeControls = useAnimation();
  const pathname = usePathname();
  if(pathname.includes('studio') ){return null}

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    controls.start({ backgroundColor: scrolling ? 'white' : '#16171A', color: scrolling ? 'black' : 'white' });
    sizeControls.start({ height: scrolling ? '70px' : '100px', padding: scrolling ? '40px 40px' : '60px 60px' });
  }, [scrolling, controls, sizeControls]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <motion.nav className="w-full fixed top-0 z-50 text-white" animate={controls}>
       {pathname.includes('studio')&&<CursorFollower />}
      <div className="py-2 text-sm border-b shadow flex items-center justify-between px-6 md:px-20">
        <Link href="tel:+1234567890" className="hover:text-gray-200">+1 234 567 890</Link>
        <Link href="#" className="hover:text-gray-200">#</Link>
      </div>
      <motion.div animate={sizeControls} className="container mx-auto flex items-center justify-between px-6 md:px-20">
        <Link href="/" className="font-bold text-3xl md:text-5xl">SPINX</Link>
        <div className="hidden md:flex space-x-16 text-lg relative items-center">
          {navItems.map((item) => (
            <div key={item.name} className="relative group" onMouseEnter={() => setHovered(item.name)} onMouseLeave={() => setHovered(null)}>
              <Link href={item.href} className={`relative hover:text-gray-300 transition-all pb-1 flex items-center gap-3 ${pathname === item.href ? 'border-b-2 border-green-500' : ''}`}>
                {item.name} {item.dropdown && <span>{hovered ? <ChevronUp size={16} /> : <ChevronDown size={16} />}</span>}
              </Link>
              {item.dropdown && hovered === item.name && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="absolute left-0 top-full mt-2 w-60 bg-white text-black shadow-lg rounded-lg p-2">
                  {item.dropdown.map((subItem) => (
                    <div key={subItem.title} className="px-4 py-2 hover:bg-gray-200 rounded">
                      <Link href={subItem.link} className={`block font-medium relative pb-1 ${pathname === subItem.link ? 'border-b-2 border-green-500' : ''}`}>{subItem.title}</Link>
                      <p className="text-sm text-gray-500">{subItem.description}</p>
                    </div>
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
  <div className="md:hidden border-t py-4 px-4 pb-40 bg-white text-black max-h-screen overflow-y-scroll">
    {navItems.map((item) => (
      <div key={item.name} className="py-2">
        <Link href={item.href} className="block text-gray-700 hover:text-black pb-1" onClick={() => setIsOpen(false)}>{item.name}</Link>
        {item.dropdown && (
          <div className="ml-4 mt-2">
            {item.dropdown.map((subItem) => (
              <div key={subItem.title} className="py-1">
                <Link href={subItem.link} className="block text-gray-600 hover:text-black font-medium pb-1" onClick={() => setIsOpen(false)}>{subItem.title}</Link>
                <p className="text-xs text-gray-500">{subItem.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    ))}
    <Link href="/contact" className="block bg-blue-600 text-white px-4 py-2 rounded mt-4 text-center hover:bg-blue-700" onClick={() => setIsOpen(false)}>Let's Talk</Link>
  </div>
)}
    </motion.nav>
  );
}
