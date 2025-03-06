import Image from "next/image";

export default function HeroSection() {
    return (
        <main className="bg-[#16171A] text-white">
            <div className="flex flex-col md:px-10 lg:px-20 py-10  mt-32 mx-4">
                <h1 className="text-6xl sm:text-9xl md:text-9xl lg:text-[200px] xl:text-[300px] text-start md:text-center font-bold leading-none bg-clip-text text-transparent"
                    style={{
                        backgroundImage: "url('/image-intro1.webp')", // Replace with your image path
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    Crafting
                </h1>
                <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold mt-4 text-start w-full">
                    Immersive Digital Stories <br className="hidden md:block" />
                    Through Technology
                </h2>
            </div>
            <div className="md:px-20 flex mx-4">
                <div className="w-60 h-96 hidden md:block">
                    <Image
                        src="/image-intro1.webp"
                        alt="Hero Image"
                        layout="responsive"
                        width={20}
                        height={80}
                    />
                </div>
                <div className="w-full md:w-1/2  md:mt-20 md:-ml-20">
                    <h2 className="text-xl  md:text-5xl  font-bold mt-4 text-start w-full">

                        We are a web design company in Los Angeles
                    </h2>
                    <p className="text-xl  md:text-3xl text-start w-full mt-10">
                        At SPINX Digital, our team of innovators and digital marketers in tech and design bring skills above and beyond the ordinary to every project.
                    </p>
                </div>
            </div>
        </main>
    );
}
