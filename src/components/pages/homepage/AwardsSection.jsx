"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AwardsSection = ({ awardsData }) => {
  return (
    <div className="border-b border-gray-700 py-12 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-10 mx-auto">
        {awardsData.map((award, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full "
          >
            {/* Logo Image */}
            <div className="border border-yellow-500 p-6 md:p-10 inline-block mb-4 text-xl font-semibold">
              <Image
                src={award.logo}
                alt={`${award.title} Logo`}
                width={120}
                height={50}
                className="border-b-2 border-cyan-500"
              />
            </div>
            <p className="mb-4">{award.description}</p>
            <ul className="list-disc pl-5 space-y-2">
              {award.awards.map((item, idx) => (
                <li key={idx}>
                  <strong>{item.organization}</strong> – {item.award}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AwardsSection;
