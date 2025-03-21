"use client"; 

import Image from "next/image";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const BeforeUI = ({ images }) => {
  // Carousel settings for mobile
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000, 
    slidesToShow: 1, 
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000, 
    swipe: true, 
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 py-10 gap-10 w-full">
      {/* Desktop: Flex layout | Mobile: Carousel */}
      <div className="hidden sm:flex gap-8 flex-wrap justify-center px-4">
        {images?.map((img, index) => (
          <motion.div 
            key={index} 
            className="bg-white p-4 rounded-lg shadow-lg flex-shrink-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-72 h-48 relative max-w-full">
              <Image
                src={img.src} 
                alt={img.alt || "UI Screenshot"}
                fill
                objectFit="cover"
                className="rounded"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile: Auto-sliding Carousel */}
      <div className="sm:hidden w-full px-4">
        <Slider {...settings}>
          {images?.map((img, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg mx-auto">
              <div className="w-72 h-48 relative max-w-full mx-auto">
                <Image
                  src={img.src} 
                  alt={img.alt || "UI Screenshot"}
                  fill
                  objectFit="cover"
                  className="rounded"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <p className="text-2xl font-bold text-gray-600">Before</p>
    </div>
  );
};

export default BeforeUI;
