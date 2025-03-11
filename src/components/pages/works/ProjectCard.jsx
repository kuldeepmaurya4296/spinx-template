'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ProjectCard = ({ image, category, title, imageBg = 'gray' }) => {
  return (
    <motion.div
      whileHover="hover" // When hovering, apply the animation to all child elements
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="bg-[#10141c] p-4 rounded-lg shadow-md w-full mx-auto"
    >
      <Link href={`/work/${title}`}>
        
      <motion.div
        variants={{
          hover: { scale: 0.9 } // Shrinks on hover
        }}
        className="p-16 rounded-md flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: imageBg }}
      >
        {/* Image */}
        <motion.div
          variants={{
            hover: { scale: 1.05 } // Enlarges on hover
          }}
        >
          <Image 
            src={image} 
            alt={title} 
            width={500} 
            height={300} 
            className="rounded-md"
          />
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="p-4 text-white">
        <p className="text-gray-400 text-sm">{category}</p>
        <h3 className="text-lg md:text-xl font-bold mt-2">{title}</h3>
      </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
