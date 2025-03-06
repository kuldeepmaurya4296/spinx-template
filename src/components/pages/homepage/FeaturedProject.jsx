import Image from "next/image";
import Link from "next/link";

export default function FeaturedProject({ title, description, image, bgColor = '#10141c' }) {
    return (
        <Link href={'#'}>
            <div className={`px-6 sm:px-12 py-16 grid md:grid-cols-2 gap-10 bg-${bgColor} px-4 md:px-20`}>
                {/* Right Image Section (Shown first on mobile) */}
                <div className="relative order-1 md:order-2 ">
                    <div className="bg-[#10141c] p-12 shadow-lg ">
                        <Image
                            src={image} // Dynamic image path
                            alt="Project Image"
                            width={600}
                            height={400}
                            className=""
                        />
                    </div>
                </div>

                {/* Left Content (Sticky on Desktop) */}
                <div className="order-2 md:order-1 md:sticky top-40 self-start space-y-4">
                    <p className="text-gray-400 text-sm sm:text-base">{description}</p>
                    <h2 className={`text-2xl sm:text-4xl font-bold leading-tight text-${bgColor === '#10141c' ? 'white' : 'black'}`}>{title}</h2>
                </div>
            </div>
        </Link>
    );
}
