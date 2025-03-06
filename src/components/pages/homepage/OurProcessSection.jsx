'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const OurProcessSection = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const videoRef = useRef(null);

  const toggleFullScreen = () => {
    if (!isFullScreen) {
      videoRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setIsFullScreen(!isFullScreen);
  };

  return (
    <section className="relative flex flex-col items-start justify-center w-full min-h-screen px-4 md:px-20 py-20 space-y-6">
      <h1 className="text-6xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500">
        Our Process
      </h1>
      <h2 className="text-3xl md:text-6xl md:pr-60 font-semibold">Guiding you from design to launch</h2>
      <p className="md:max-w-2xl text-2xl text-gray-400">
        Our team of website experts will handle the entire development lifecycle of your project,
        from your website idea to the web development services needed to publishing.
      </p>

      {/* Video Circle for Large Screens */}
      <motion.div
        className="hidden md:flex absolute top-10 right-20 items-center justify-center w-32 h-32 border-2 border-lime-400 rounded-full cursor-pointer"
        whileHover={{ scale: 1.1 }}
        onClick={toggleFullScreen}
      >
        {!isFullScreen && <p className="text-sm">PLAY VIDEO</p>}
        <video
          ref={videoRef}
          className={`absolute top-0 left-0 w-full h-full object-cover ${isFullScreen ? 'fixed inset-0 w-full h-full' : 'hidden'}`}
          src="/sample-video.mp4"
          autoPlay
          loop
          muted
        ></video>
      </motion.div>

      {/* Video Circle for Mobile (Placed at the End) */}
      <motion.div
        className="md:hidden flex items-center justify-center w-24 h-24 border-2 border-lime-400 rounded-full cursor-pointer self-center mt-10"
        whileHover={{ scale: 1.1 }}
        onClick={toggleFullScreen}
      >
        {!isFullScreen && <p className="text-xs">PLAY VIDEO</p>}
        <video
          ref={videoRef}
          className={`absolute top-0 left-0 w-full h-full object-cover ${isFullScreen ? 'fixed inset-0 w-full h-full' : 'hidden'}`}
          src="/sample-video.mp4"
          autoPlay
          loop
          muted
        ></video>
      </motion.div>
    </section>
  );
};

export default OurProcessSection;
