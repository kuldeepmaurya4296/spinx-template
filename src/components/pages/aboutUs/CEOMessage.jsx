'use client'
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const CEOMessage = () => {
  const [expanded, setExpanded] = useState(false);
  const text =
    "As the CEO of SPINX Digital, I am honored to lead a company driven by a relentless pursuit of excellence in the digital space. Over the past two decades, I’ve dedicated myself to transforming the digital presence of global brands, and today, our mission is clearer than ever: to build world-class digital solutions that empower businesses to thrive in the digital age. Our journey has been marked by innovation, commitment, and a deep understanding of our client’s needs. By embracing the latest technological advancements, we strive to deliver unparalleled solutions that drive success in the digital era.";

  return (
    <section className=" py-16 px-4 md:px-20 flex flex-col md:flex-row items-center gap-8">
      <div className="md:w-2/3">
        <h2 className="text-4xl font-bold mb-4">Message from the CEO</h2>
        <motion.div 
          className="text-lg mb-4 overflow-hidden"
          initial={{ height: "auto" }}
          animate={{ height: expanded ? "auto" : 100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {text}
        </motion.div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-white underline hover:text-gray-300 mt-2"
        >
          {expanded ? "SHOW LESS" : "READ MORE"}
        </button>
        <div className="mt-6">
          <a
            href="#"
            className="bg-lime-400 text-black font-semibold py-3 px-6 rounded-md hover:bg-lime-500"
          >
            VIEW SUKESH'S PROFILE
          </a>
        </div>
      </div>
      <div className="md:w-1/3">
        <Image
          src="/default.webp"
          alt="CEO talking to an employee"
          width={400}
          height={300}
          className="rounded-md"
        />
      </div>
    </section>
  );
};

export default CEOMessage;
