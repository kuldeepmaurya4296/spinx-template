"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    logo: "/image-intro1.webp",
    category: "B2C ELECTRICAL PARTS ECOMMERCE WEBSITE",
    quote:
      "The team is highly responsive and eager to help. They show a commitment to excellence for both large and small projects.",
    name: "Dana Knight",
    position: "Senior Director Global Marketing & Customer Experience",
  },
  {
    logo: "/image-intro1.webp",
    category: "SAAS SOFTWARE COMPANY",
    quote:
      "Their expertise in design and development has helped us scale our product faster and enhance user engagement.",
    name: "Alex Johnson",
    position: "CTO, Tech Solutions Inc.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  const prevTestimonial = () => {
    setDirection(-1);
    setIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const nextTestimonial = () => {
    setDirection(1);
    setIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="py-16 px-4 md:px-20">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-green-500  md:text-8xl">Testimonials</h2>
      <p className="text-gray-400 mt-2 max-w-2xl">
      Take a deep dive into the tales of triumph from our web design agency. Our clients enthusiastically recount their journeys, showcasing how our cutting-edge web design solutions have revolutionized their online platforms.      </p>
      <div className="flex justify-end gap-4 mt-6 self-end">
        <button
          className="p-3 border border-lime-400 text-lime-400 hover:text-black rounded-full hover:bg-lime-400 transition cursor-pointer"
          onClick={prevTestimonial}
        >
          <ChevronLeft className=" " />
        </button>
        <button
          className="p-3 border border-lime-400 text-lime-400 hover:text-black rounded-full hover:bg-lime-400 transition cursor-pointer"
          onClick={nextTestimonial}
        >
          <ChevronRight className="" />
        </button>
      </div>
      {/* Testimonial Content */}
      <div className="relative flex flex-col md:flex-row items-center mt-12 overflow-hidden">
        {/* Animated Wrapper */}
        <motion.div
          key={index}
          initial={{ x: direction === 1 ? "100%" : "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction === 1 ? "-100%" : "100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex w-full md:w-auto flex-col md:flex-row"
        >
          {/* Logo Section */}
          <div className="w-full md:w-1/3 flex  justify-center">
            <Image
              src={testimonials[index].logo}
              alt="Company Logo"
              width={250}
              height={250}
              className="bg-white p-6 rounded-lg shadow-md"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-2/3 mt-6 md:mt-0 text-center md:text-left px-4">
            <h4 className="text-sm font-semibold text-lime-400">
              {testimonials[index].category}
            </h4>
            <p className="text-2xl italic mt-2">"{testimonials[index].quote}"</p>
            <h5 className="mt-4 font-semibold">{testimonials[index].name}</h5>
            <p className="text-gray-400 text-sm">{testimonials[index].position}</p>
          </div>
        </motion.div>
      </div>

      
    </section>
  );
}
