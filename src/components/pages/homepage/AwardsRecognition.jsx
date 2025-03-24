"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AwardsRecognition({ data }) {
  // Don't render if there's no data
  if (!data) return null;

  return (
    <section className="px-4 md:px-20 py-20 md:pr-60 border-b border-gray-700">
      {/* Description Section */}
      {data.description && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="px-4 md:px-20 py-60"
        >
          <p className="text-lg md:text-2xl md:w-1/2">{data.description}</p>

          {data.link && data.link.url && (
            <Link href={data.link.url}>
              <p className="mt-4 text-lg md:text-xl font-semibold underline underline-offset-4 cursor-pointer hover:text-gray-300">
                {data.link.text || "Learn More"}
              </p>
            </Link>
          )}
        </motion.div>
      )}

      {/* Awards & Recognition Section */}
      {(data.heading || data.subheading) && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {data.heading && (
            <h2 className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 to-green-500 text-transparent bg-clip-text">
              {data.heading}
            </h2>
          )}
          
          {data.subheading && (
            <p className="mt-4 text-gray-300 md:text-4xl">{data.subheading}</p>
          )}
        </motion.div>
      )}
    </section>
  );
}
