import Image from "next/image";

export default function Hero() {
    return (
        <div className="pt-32 ">

            <h1 className="text-6xl py-20 self-end text-center flex justify-center items-center">
                <span className="w-full md:w-[50%] font-bold">Lighting Up an Internet Presence for BEGA</span>
            </h1>
            <div className="flex justify-center w-full py-10">
                <Image
                    src={'/demo-site.webp'}
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    className="w-full md:w-2/3 border-4 border-black"
                />
            </div>

        </div>
    )
}