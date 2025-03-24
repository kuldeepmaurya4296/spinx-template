import Link from "next/link";
import Image from "next/image";

export default function AwardWinningAgency({ data }) {
    if (!data?.logos || data.logos.length === 0) return null; // Hide component if no data is provided
    return (
        <div className="px-6 sm:px-10 md:px-20 py-12 text-center md:py-40">
            {/* Section Heading */}
            {data?.heading && (
                <h2 className="text-3xl sm:text-4xl font-bold mb-10">
                    {data.heading}
                </h2>
            )}

            {/* Logo Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
                {data.logos.map((logo, index) => (
                    logo.src && logo.title && ( // Show only if logo has src and title
                        <Link key={index} href={logo.link || "/"} className="group flex flex-col items-center">
                            {/* Logo Image */}
                            <div className="w-20 h-20 md:w-24 md:h-24">
                                <Image
                                    src={logo.src}
                                    alt={logo.alt || "Award Logo"}
                                    width={100}
                                    height={100}
                                    className="object-contain"
                                />
                            </div>

                            {/* Heading with Hover Effect */}
                            <div className="relative mt-4 group inline-block">
                                {/* Background Effect (Hover) */}
                                <span className="absolute left-0 bottom-0 w-full h-0 group-hover:h-1/2 bg-blue-500 bg-opacity-50 transition-all duration-300 ease-in-out"></span>

                                {/* Text (Above Background) */}
                                <h3 className="relative text-sm md:text-lg font-semibold text-nowrap z-10">
                                    {logo.title}
                                </h3>

                                {/* Bottom Line Effect */}
                                <span className="block w-full h-[2px] bg-gray-300 group-hover:bg-blue-500 bg-opacity-50 transition-all duration-300"></span>
                            </div>

                        </Link>
                    )
                ))}
            </div>
        </div>
    );
}
