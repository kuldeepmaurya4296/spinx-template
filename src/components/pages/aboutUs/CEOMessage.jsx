'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

const CEOMessage = ({ data }) => {
  // console.log('data:', data);
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="py-16 px-4 md:px-20 flex flex-col md:flex-row items-center gap-8">
      <div className="md:w-2/3">
        <h2 className="text-4xl font-bold mb-4">Message from {data?.name}</h2>
        <motion.div
          className="text-lg mb-4 overflow-hidden"
          initial={{ height: 'auto' }}
          animate={{ height: expanded ? 'auto' : 100 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {data?.message}
        </motion.div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-white underline hover:text-gray-300 mt-2"
        >
          {expanded ? 'SHOW LESS' : 'READ MORE'}
        </button>
        <div className="mt-6">
          <p className="text-lg font-semibold">Email: {data?.email}</p>
          {/* <p className="text-md mt-2">{about}</p> */}
          <a
            href={`/profile/${data?.slug}`}
            className="bg-lime-400 text-black font-semibold py-3 px-6 rounded-md hover:bg-lime-500 mt-4 inline-block"
          >
            VIEW {name.toUpperCase()}'S PROFILE
          </a>
        </div>
      </div>
      <div className="md:w-1/3">
        <Image
          src={data.imageUrl}
          alt={'profile image'}
          width={400}
          height={300}
          className="rounded-md"
        />
      </div>
    </section>
  );
};

export default CEOMessage;
