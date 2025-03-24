'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FeaturedProject({ title, description, image, bgColor = '#10141c' }) {
    // console.log("Featured Project:", image);
    return (
        <Link href={`/work/${title}`}>
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className={`px-6 sm:px-12 py-16 grid md:grid-cols-2 gap-10 bg-${bgColor} px-4 md:px-20`}
            >
                {/* Right Image Section (Shown first on mobile) */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="relative order-1 md:order-2"
                >
                    <div className="bg-[#10141c] p-12 shadow-lg">
                        <Image
                            src={image} // Dynamic image path
                            alt="Project Image"
                            width={600}
                            height={400}
                            className=""
                        />
                    </div>
                </motion.div>

                {/* Left Content (Sticky on Desktop) */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="order-2 md:order-1 md:sticky top-40 self-start space-y-4"
                >
                    <p className="text-gray-400 text-sm sm:text-base">{description}</p>
                    <h2 className={`text-2xl sm:text-4xl font-bold leading-tight text-${bgColor === '#10141c' ? 'white' : 'black'}`}>{title}</h2>
                </motion.div>
            </motion.div>
        </Link>
    );
}
