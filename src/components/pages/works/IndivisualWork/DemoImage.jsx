"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";



const DemoImage = ({images}) => {
  console.log("images", images);
  const controls = useAnimation();
  const [direction, setDirection] = useState(0); // 1 = right, -1 = left, 0 = stop
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const handleMouseMove = (e) => {
        const screenWidth = window.innerWidth;
        const leftBoundary = screenWidth * 0.2;
        const rightBoundary = screenWidth * 0.8;

        if (e.clientX < leftBoundary) {
          setDirection(1); // Move right
        } else if (e.clientX > rightBoundary) {
          setDirection(-1); // Move left
        } else {
          setDirection(0); // Stop moving
        }
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile && direction !== 0) {
      controls.start({
        x: direction === 1 ? "0%" : "-50%",
        transition: { ease: "linear", duration: 2, repeat: Infinity },
      });
    } else {
      controls.stop();
    }
  }, [direction, controls, isMobile]);

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    swipe: true,
  };

  return (
    <div className="relative overflow-hidden w-full flex items-center py-20">
      {/* Desktop Infinite Scroll */}
      {!isMobile ? (
        <motion.div
          className="flex gap-6 md:w-[500px] md:h-[600px]"
          animate={controls}
          style={{ display: "flex", whiteSpace: "nowrap" }}
        >
          {[...images, ...images].map((src, index) => (
            <Image
              key={index}
              src={src?urlFor(src).url():src}
              alt={`Image ${index}`}
              className="w-full h-full object-cover rounded-lg shadow-lg"
              width={500}
              height={600}
            />
          ))}
        </motion.div>
      ) : (
        // Mobile Carousel
        <Slider {...carouselSettings} className="w-full">
          {[...images, ...images].map((src, index) => (
            <div key={index} className="flex justify-center gap-4">
              <Image
                src={urlFor(src).url()}
                width={500}
                height={400}
                alt={`Image ${index}`}
                className="w-full h-[400px] object-cover rounded-lg shadow-lg p-2"
              />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default DemoImage;
