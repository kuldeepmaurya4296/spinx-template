'use client';

import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function WeAreSection({ data }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [counts, setCounts] = useState({ years: 0, projects: 0, awards: 0 });

    useEffect(() => {
        if (!isInView) return;

        const duration = 1000; // 1 second
        const steps = 60; // 60 frames per second
        const incrementYears = data.years / steps;
        const incrementProjects = data.projects / steps;
        const incrementAwards = data.awards / steps;

        let frame = 0;
        const interval = setInterval(() => {
            frame++;
            setCounts({
                years: Math.min(data.years, Math.floor(frame * incrementYears)),
                projects: Math.min(data.projects, Math.floor(frame * incrementProjects)),
                awards: Math.min(data.awards, Math.floor(frame * incrementAwards)),
            });
            if (frame >= steps) clearInterval(interval);
        }, duration / steps);

        return () => clearInterval(interval);
    }, [isInView, data]);

    return (
        <section ref={ref} className="py-16 px-6 md:px-16">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center">
                {/* Left Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="md:w-3/5"
                >
                    <h1 className="text-5xl md:text-9xl font-bold">
                        <span className="bg-gradient-to-r from-blue-400 via-green-400 to-orange-400 text-transparent bg-clip-text">
                            We are
                        </span>
                    </h1>
                    <h2 className="text-4xl font-bold mt-4">
                        {data.title}
                    </h2>
                    <p className="text-gray-400 mt-6 text-lg">
                        {data.description}
                    </p>
                </motion.div>
                {/* Right Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="md:w-2/5 mt-8 md:mt-0 flex flex-col gap-8 md:gap-20 md:ml-16"
                >
                    <div>
                        <h3 className="text-3xl md:text-7xl font-bold">{counts.years}+</h3>
                        <p className="text-gray-400">Years in business</p>
                    </div>
                    <div>
                        <h3 className="text-3xl md:text-7xl font-bold">{counts.projects}+</h3>
                        <p className="text-gray-400">Websites & projects launched</p>
                    </div>
                    <div>
                        <h3 className="text-3xl md:text-7xl font-bold">{counts.awards}+</h3>
                        <p className="text-gray-400">Awards & recognition</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
