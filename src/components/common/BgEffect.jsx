'use client'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const BgEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      {/* Moving Glow Effect */}
      <motion.div
        className="absolute w-40 h-40 bg-green-500 rounded-full blur-3xl opacity-30"
        animate={{
          x: mousePosition.x - 80,
          y: mousePosition.y - 80,
        }}
        transition={{ type: "tween", stiffness: 100, damping: 20 }}
      />

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-3xl"></div>
    </div>
  );
};

export default BgEffect;
