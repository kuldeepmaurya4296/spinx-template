"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [outerPosition, setOuterPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect if the user is on a mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const moveCursor = (e) => {
      let x, y;

      if (e.touches) {
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
      } else {
        x = e.clientX;
        y = e.clientY;
      }

      setPosition({ x, y });

      const target = e.target;
      setIsPointer(target.closest("a, button, [role='button'], .cursor-pointer") !== null);
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("touchmove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("touchmove", moveCursor);
    };
  }, []);

  // Outer circle follows with a delay
  useEffect(() => {
    const timeout = setTimeout(() => {
      setOuterPosition(position);
    }, 10);

    return () => clearTimeout(timeout);
  }, [position]);

  if (isMobile) return null; // Hide cursor follower on mobile

  return (
    <div className="fixed top-0 left-0 pointer-events-none z-50">
      <motion.div
        className="absolute"
        animate={{ x: outerPosition.x - 20, y: outerPosition.y - 20 }}
        transition={{ type: "tween", ease: "linear", duration: 0.05 }}
      >
        {!isPointer && (
          <motion.div
            className="absolute w-10 h-10 border border-lime-400 rounded-full"
            animate={{ scale: 1.1 }}
          />
        )}
      </motion.div>

      {/* Inner Cursor */}
      <motion.div
        className="absolute"
        animate={{ x: position.x - 10, y: position.y - 10 }}
        transition={{ type: "tween", ease: "linear", duration: 0.05 }}
      >
        <div
          className={`w-4 h-4 rounded-full flex items-center justify-center transition-all duration-300 ${
            isPointer ? "bg-lime-400 scale-150 w-10 h-10" : "bg-lime-400"
          }`}
        >
          {isPointer && <Eye className="w-4 h-4 text-black" />}
        </div>
      </motion.div>
    </div>
  );
};

export default CursorFollower;
