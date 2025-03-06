import Link from "next/link";
import Image from "next/image";

export default function AwardWinningAgency() {
    const logos = [
        { id: 1, src: "/image-intro1.webp", alt: "Logo 1", title: "Best UI/UX Design" },
        { id: 2, src: "/image-intro1.webp", alt: "Logo 2", title: "Top Web Development" },
        { id: 3, src: "/image-intro1.webp", alt: "Logo 3", title: "Best Innovation Award" },
        { id: 4, src: "/image-intro1.webp", alt: "Logo 4", title: "Leading Tech Company" },
    ];

    return (
        <div className="px-6 sm:px-10 md:px-20 py-12 text-center  md:py-40">
            {/* Section Heading */}
            <h2 className="text-3xl sm:text-4xl font-bold mb-10">
                Award Winning Digital Agency
            </h2>

            {/* Logo Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
                {logos.map((logo) => (
                    <Link key={logo.id} href="/" className="group flex flex-col items-center">
                        {/* Logo Image */}
                        <div className="w-20 h-20 md:w-24 md:h-24 ">
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={100}
                                height={100}
                                className="object-contain"
                            />
                        </div>

                        {/* Heading with Hover Effect */}
                        <div className="relative mt-4">
                            <h3 className="text-sm md:text-lg font-semibold relative pb-1 transition-all duration-300 text-nowrap">
                                {logo.title}
                                <span className="absolute left-0 bottom-0 w-full h-0 group-hover:h-1/2 bg-blue-500 transition-all duration-300 ease-in-out"></span>
                            </h3>
                            <span className="block w-full h-[2px] bg-gray-300 group-hover:bg-blue-500 transition-all duration-300"></span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
