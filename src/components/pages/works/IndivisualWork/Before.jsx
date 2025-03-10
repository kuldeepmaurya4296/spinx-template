"use client"; // Required for Next.js client-side components

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const BeforeUI = () => {
  // Carousel settings for mobile
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000, // Smooth transition
    slidesToShow: 1, // Show one at a time on mobile
    slidesToScroll: 1,
    autoplay: true, // Auto-slide enabled
    autoplaySpeed: 3000, // Change slide every 3 sec
    swipe: true, // Enable touch swipe
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 py-10 gap-10 w-full">
      {/* Desktop: Flex layout | Mobile: Carousel */}
      <div className="hidden sm:flex gap-8 flex-wrap justify-center px-4">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-white p-4 rounded-lg shadow-lg flex-shrink-0">
            <div className="w-72 h-48 relative max-w-full">
              <Image
                src="/default.webp" // Replace with actual image path
                alt="UI Screenshot"
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Mobile: Auto-sliding Carousel */}
      <div className="sm:hidden w-full px-4">
        <Slider {...settings}>
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white p-4 rounded-lg shadow-lg mx-auto">
              <div className="w-72 h-48 relative max-w-full mx-auto">
                <Image
                  src="/default.webp" // Replace with actual image path
                  alt="UI Screenshot"
                  layout="fill"
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
