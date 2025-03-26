import SplitText from "@/components/animation/SplitText";
import CommonSection from "./CommonSection";
import HeroSection from "./HeroSection";
import FeaturedProject from "../homepage/FeaturedProject";
import Link from "next/link";
import { getAllProjects } from "@/utills/individualWork";
import { urlFor } from "@/sanity/lib/image";
import { getAllExperties, getHeroExperties } from "@/utills/experties";

export default async function Expertise() {
    const projects = await getAllProjects()
    const heroexpertise = await getHeroExperties()
    const expertiesData = await getAllExperties()
    // console.log('heroexpertise', heroexpertise)
    // console.log('expertiesData', expertiesData)
    

    return (
        <main className="bg-[#16171A] text-white pt-36">
            {/* Hero Section */}
            <HeroSection data={heroexpertise} />

            {/* Dynamic Sections (Our Expertise & Industries) */}
            {expertiesData?.map((data, index) => (
                <CommonSection key={index} title={data?.title} name={data?.name} description={data?.description} slug={data?.slug}/>
            ))}

            {/* Featured Projects */}
            <div className="py-4">
                <h1 className="md:text-end text-2xl md:text-6xl font-bold px-4 md:px-20">
                    <SplitText text="Featured Projects" />
                </h1>
                {projects.slice(0, 3).map((project, index) => (
                    <FeaturedProject
                        key={index}
                        title={project.title}
                        description={project.subtitle}
                        image={project.thumbnailImage ? urlFor(project.thumbnailImage).url() : "/default.webp"} // Fallback Image
                        bgColor={index % 2 === 0 ? "#10141c" : "white"}
                        slug={project.slug.current}
                    />
                ))}
                <div className="flex justify-end">
                    <Link href="/work" className="underline text-lg md:text-2xl text-end px-4 md:px-20">
                        See More Work
                    </Link>
                </div>
            </div>
        </main>
    );
}
