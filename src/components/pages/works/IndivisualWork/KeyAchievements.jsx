"use client";
import { motion } from "framer-motion";

export default function KeyAchievements({achievements}) {
  return (
    <section className="py-10 px-4 md:px-20 bg-white">
      <h2 className="text-gray-600 text-2xl py-10 uppercase tracking-wide mb-4 border-b ">Key Achievements</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <p className="text-2xl md:text-5xl font-bold text-black pb-3">{item.value}</p>
            <p className="text-gray-500 text-xl">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
