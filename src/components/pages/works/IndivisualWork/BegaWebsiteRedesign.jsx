'use client';

import { motion } from 'framer-motion';

const BegaWebsiteRedesign = ({ title, overview, awards }) => {
  return (
    <div className="mx-auto px-4 md:px-20 py-10 grid md:grid-cols-3 gap-12">
      
      {/* Left Section */}
      <motion.div 
        className="md:col-span-2 space-y-10"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-5xl font-bold">{title}</h1>
        <h2 className="text-lg uppercase text-gray-500 mt-2">Overview</h2>
        <p className="text-gray-700 mt-4 leading-relaxed text-xl">{overview}</p>
      </motion.div>
      
      {/* Right Section - Awards */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-sm uppercase text-gray-500">Awards</h2>
        <ul className="mt-4 space-y-10">
          {awards.map((award, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-2xl">{award.name}</h3>
              <p className="text-gray-600 text-sm">
                <a href={award.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  {award.award}
                </a>
              </p>
            </motion.li>
          ))}
        </ul>
      </motion.div>

    </div>
  );
};

export default BegaWebsiteRedesign;
