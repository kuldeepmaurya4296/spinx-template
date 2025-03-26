"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import SplitText from "@/components/animation/SplitText";
import HighlightSection from "../../homepage/HighlightSection";
import HeroSection from "./HeroSection";
import FeaturedProject from "../../homepage/FeaturedProject";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { getAllProjects } from "@/utills/individualWork";
import { getExpertiesBySlug } from "@/utills/experties";

export default function IndivisualExpertise() {
    const param = useParams() // Get slug from the URL
    const slug = param.expertise;
    const [projects, setProjects] = useState([]);
    const [expertiesData, setExpertiesData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const projectsData = await getAllProjects();
                const expertise = await getExpertiesBySlug(slug);
                setProjects(projectsData);
                setExpertiesData(expertise);
                console.log("Expertise Data:", expertise);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        if (slug) {
            fetchData();
        }
    }, [slug]);

    return (
        <main className="bg-[#16171A] text-white pt-36">
            {/* Hero Section */}
            {expertiesData && <HeroSection data={expertiesData} />}

            {/* Dynamic Sections (Our Expertise & Industries) */}
            <div className="bg-white text-black px-4 md:px-20 py-20">
                {expertiesData?.speciality?.map((item, index) => (
                    <HighlightSection
                        key={index}
                        title={item.name}
                        description={item.description}
                        imageUrl={item.bgImageUrl}
                    />
                ))}
            </div>

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
                <div className="flex justify-end py-4">
                    <Link href="/work" className="underline text-lg md:text-2xl text-end px-4 md:px-20">
                        See More Work
                    </Link>
                </div>
            </div>
        </main>
    );
}
