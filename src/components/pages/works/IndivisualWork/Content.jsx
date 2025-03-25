"use client";
import { motion } from "framer-motion";

export default function Content({ data }) {
  // console.log('data', data)
  return (
    <section className="max-w-3xl mx-auto p-6">
      {/* Dynamic Discovery Label */}
      {data?.label && (
        <motion.p
          className="text-sm uppercase text-gray-500 font-semibold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {data?.label}
        </motion.p>
      )}

      {/* Title */}
      {data?.title && (
        <motion.h2
          className="text-2xl md:text-3xl font-bold mt-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {data?.title}
        </motion.h2>
      )}

      {/* Subtitle */}
      {data?.subtitle && (
        <motion.p
          className="mt-4 text-gray-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {data?.subtitle}
        </motion.p>
      )}

      {/* Content List */}
      {data?.content?.length > 0 && (
        <div className="mt-4 space-y-4 text-gray-600">
          {data?.content?.map(
            (paragraph, index) =>
              paragraph && (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {paragraph}
                </motion.p>
              )
          )}
        </div>
      )}

      {/* Links Section (Conditional) */}
      {(data?.viewSite || data?.downloadPDF) && (
        <div className="mt-6 flex gap-6">
          {/* View Site Link (if available) */}
          {data?.viewSite && (
            <a
              href={data?.viewSite}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden border border-gray-800 text-gray-800 px-6 py-2 font-semibold uppercase tracking-wide inline-block bg-white group transition-all duration-300"
            >
              <span className="absolute inset-0 h-0 bg-green-600 group-hover:h-full transition-all duration-300 ease-in-out"></span>
              <span className="relative group-hover:text-white">View Site</span>
            </a>
          )}

          {/* Download PDF Link (if available) */}
          {data?.downloadPDF && (
            <a
              href={data?.downloadPDF}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden border border-gray-800 text-gray-800 px-6 py-2 font-semibold uppercase tracking-wide inline-block bg-white group transition-all duration-300"
            >
              <span className="absolute inset-0 h-0 bg-green-600 group-hover:h-full transition-all duration-300 ease-in-out"></span>
              <span className="relative group-hover:text-white">Download PDF</span>
            </a>
          )}
        </div>
      )}
    </section>
  );
}
