"use client";

import { motion } from "framer-motion";

export default function BrandsSection({ data }) {
  if (!data?.heading && !data?.description) return null; // Hide component if no data is provided

  return (
    <section className="relative flex flex-col md:flex-row items-start md:items-center justify-between px-6 md:px-20 py-20 pt-40">
      {/* Left Side - Heading */}
      {data?.heading && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text text-start">
            {data.heading}
          </h2>
        </motion.div>
      )}

      {/* Right Side - Paragraph */}
      {data?.description && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full md:w-auto max-w-md text-gray-300 mt-4 md:mt-0"
        >
          <p>{data.description}</p>
        </motion.div>
      )}
    </section>
  );
}
