"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function HighlightSection() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Disable effect on mobile
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseMove = (e) => {
    if (isMobile) return;
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image (Visible Only on Hover with Smooth Scaling) */}
      {!isMobile && (
        <motion.div
          className="absolute w-[200px] h-[250px] bg-no-repeat bg-contain pointer-events-none"
          style={{
            backgroundImage: `url('/image-intro1.webp')`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            x: position.x - 200, // Centering horizontally
            y: position.y - 425, // Centering vertically
            scale: isHovered ? 1 : 0, // Appears only on hover
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        />
      )}

      {/* Content Section */}
      <div className="relative z-10 border-b border-gray-400 flex flex-col md:flex-row justify-between md:items-center py-20 pt-6">
        <h1 className="text-4xl md:text-7xl font-bold">Longevity</h1>
        <p className="text-gray-300 mt-4 max-w-2xl md:pr-60">
          Born and bred in Los Angeles since 2004, SPINX Digital is highly
          respected in the industry and is a step ahead amongst the top websites
          and mobile application development companies.
        </p>
      </div>
    </div>
  );
}
