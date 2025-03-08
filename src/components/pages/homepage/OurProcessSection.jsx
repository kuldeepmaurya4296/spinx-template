"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const OurProcessSection = ({ title, subtitle, description, processSteps }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section className="relative flex flex-col items-start justify-center w-full min-h-screen px-4 md:px-20 py-20 space-y-6">
      {title && (
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-6xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500"
        >
          {title}
        </motion.h1>
      )}

      {subtitle && (
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-6xl md:pr-60 font-semibold"
        >
          {subtitle}
        </motion.h2>
      )}

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:max-w-2xl text-2xl text-gray-400"
        >
          {description}
        </motion.p>
      )}

      {/* Video Circle for Large Screens */}
      {processSteps?.videoUrl && (
        <>
          <motion.div
            className="hidden md:flex absolute top-10 right-20 items-center justify-center w-32 h-32 border-2 border-lime-400 rounded-full cursor-pointer"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            onClick={toggleModal}
          >
            <p className="text-sm">PLAY VIDEO</p>
          </motion.div>

          {/* Video Circle for Mobile */}
          <motion.div
            className="md:hidden flex items-center justify-center w-24 h-24 border-2 border-lime-400 rounded-full cursor-pointer self-center mt-10"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            onClick={toggleModal}
          >
            <p className="text-xs">PLAY VIDEO</p>
          </motion.div>
        </>
      )}

      {/* Video Popup Modal */}
      {isModalOpen && processSteps?.videoUrl && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-11/12 md:w-3/4 lg:w-1/2 bg-white rounded-lg overflow-hidden"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="absolute top-2 right-2 text-white bg-red-500 rounded-full p-2 px-4"
              onClick={toggleModal}
            >
              ✕
            </button>
            <video className="w-full h-auto" src={processSteps.videoUrl} autoPlay loop controls muted></video>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default OurProcessSection;
