"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AwardsRecognition() {
  return (
    <section className="px-4 md:px-20 py-20 md:pr-60 border-b border-gray-700">
      {/* Description Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="px-4 md:px-20 py-60"
      >
        <p className="text-lg md:text-2xl md:w-1/2">
          We've spent almost 2 decades in web design, and have crafted creative web design solutions using a wide variety of platforms.
        </p>
        <Link href="/your-target-page">
          <p className="mt-4 text-lg md:text-xl font-semibold underline underline-offset-4 cursor-pointer hover:text-gray-300">
            Which platform is right for you?
          </p>
        </Link>
      </motion.div>

      {/* Awards & Recognition Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 to-green-500 text-transparent bg-clip-text">
          Awards & Recognition
        </h2>
        <p className="mt-4 text-gray-300 md:text-4xl">
          Unveiling our achievements as a distinguished web design agency in Los Angeles. We've garnered attention for our exceptional work, solidifying our reputation as leaders in the field.
        </p>
      </motion.div>
    </section>
  );
}
