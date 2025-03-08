"use client";

import Image from "next/image";
import { motion } from "framer-motion";
export default function ContactUsSection() {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }} className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-12">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/image-intro1.webp" // Replace with your actual image path
          alt="3D design"
          width={500}
          height={400}
          className="rounded-lg"
        />
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Are you looking for a website with a{" "}
          <span className="bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text">
            fresh and modern user experience?
          </span>
        </h1>
        <p className="text-gray-400">
          Our Los Angeles website design agency is here to transform your digital space into an immersive journey. Reach out today and let's craft an online platform that leaves a lasting impression.
        </p>
        <button className="bg-lime-400 text-black px-6 py-3 font-semibold rounded-lg hover:bg-lime-500 transition duration-300">
          CONTACT US
        </button>
      </div>
    </motion.div>
  );
}
