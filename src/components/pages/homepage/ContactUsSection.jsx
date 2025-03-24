"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactUsSection({ data }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-12"
    >
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src={data.imageUrl} // Dynamic image URL
          alt="Contact Section Image"
          width={500}
          height={400}
          className="rounded-lg"
        />
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
        <h2 className="text-lg font-semibold text-gray-500">{data.title}</h2> {/* Dynamic title */}
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          {data.heading} <span className="bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text">{data.label}</span>
        </h1>
        <p className="text-gray-400">{data.description}</p> {/* Dynamic description */}
        <button className="bg-lime-400 text-black px-6 py-3 font-semibold rounded-lg hover:bg-lime-500 transition duration-300">
          {data.buttonText}
        </button>
      </div>
    </motion.div>
  );
}