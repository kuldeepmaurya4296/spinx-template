'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection({ data }) {
    return (
        <main className="bg-[#16171A] text-white">
            <div className="flex flex-col md:px-10 lg:px-20 py-10 mt-32 mx-4">
                {data?.mainTitle  && (
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="text-7xl sm:text-9xl md:text-9xl lg:text-[200px] xl:text-[300px] text-start md:text-center font-bold leading-none bg-clip-text text-transparent"
                        style={{
                            backgroundImage: `url('${data.mainTitleImage || "/image-intro1.webp"}')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        {data.mainTitle}
                    </motion.h1>
                )}

                {data?.subTitle && (
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold mt-4 text-start w-full"
                    >
                        {data.subTitle}
                    </motion.h2>
                )}
            </div>

            {(data?.companyTitle || data?.companyDescription) && (
                <div className="md:px-20 flex mx-4">
                    {data?.sideImage && (
                        <div className="w-60 h-96 hidden md:block">
                            <Image
                                src={data.sideImage || '/image-intro1.webp'}
                                alt="Hero Image"
                                layout="responsive"
                                width={20}
                                height={80}
                            />
                        </div>
                    )}

                    {(data?.companyTitle || data?.companyDescription) && (
                        <div className="w-full md:w-1/2 md:mt-20 md:-ml-20">
                            {data?.companyTitle && (
                                <motion.h2
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.6 }}
                                    viewport={{ once: true }}
                                    className="text-xl md:text-5xl font-bold mt-4 text-start w-full"
                                >
                                    {data.companyTitle}
                                </motion.h2>
                            )}

                            {data?.companyDescription && (
                                <motion.p
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.9 }}
                                    viewport={{ once: true }}
                                    className="text-xl md:text-3xl text-start w-full mt-10"
                                >
                                    {data.companyDescription}
                                </motion.p>
                            )}
                        </div>
                    )}
                </div>
            )}
        </main>
    );
}
