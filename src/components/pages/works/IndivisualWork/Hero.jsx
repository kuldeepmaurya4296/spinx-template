'use client'
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero({ title, heroImage }) {
    console.log("imageSrc:", heroImage);

    return (
        <div className="pt-32 bg-[#16171A] text-white">
            <motion.h1 
                className="text-6xl py-20 self-end text-center flex justify-center items-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <span className="w-full md:w-[50%] font-bold">{title}</span>
            </motion.h1>

            <motion.div 
                className="flex justify-center w-full py-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <Image
                    src={heroImage}
                    alt="Hero Image"
                    width={500}
                    height={500}
                    className="w-full md:w-2/3 border-4 border-black"
                />
            </motion.div>
        </div>
    );
}
