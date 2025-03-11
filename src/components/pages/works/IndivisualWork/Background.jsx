"use client";
import { motion } from "framer-motion";

export default function RotatedBgComponent({ text }) {
  return (
    <div className="py-10">
      <div className="relative bg-gray-900 text-white overflow-hidden flex justify-center items-center h-48 md:h-64 lg:h-80 px-4 text-center">
        {/* Background rotated elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-gray-800 rotate-45 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-gray-800 rotate-45 translate-y-1/2 -translate-x-1/2"></div>

        {/* Centered Animated Text */}
        <motion.p
          className="text-lg md:text-xl lg:text-4xl font-bold w-full px-4 md:max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {text}
        </motion.p>
      </div>
    </div>
  );
}
