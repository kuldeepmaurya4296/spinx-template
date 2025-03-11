import SplitText from "@/components/animation/SplitText";
import CommonSection from "./CommonSection";
import HeroSection from "./HeroSection";
import FeaturedProject from "../homepage/FeaturedProject";
import Link from "next/link";

export default function Expertise() {
    const pageData = {
        hero: {
            label: "Expertise",
            title: {
                main: "Thinking Big",
                secondary: "& Crafting Solutions",
            },
            subtitle: "We are fearless about taking on challenges!",
            description:
                "With collaboration at our core, we are ready to work with you to craft winning solutions...",
            bgText: "Exper",
        },
        sections: [
            {
                title: "Our Expertise",
                items: [
                    {
                        name: "Discovery",
                        description: "A thorough discovery is at the core of every successful digital solution we craft...",
                        link: "/discovery",
                    },
                    {
                        name: "Strategy & Planning",
                        description: "Strategy & planning is everything. The needs of digital consumers are not the same today...",
                        link: "/strategy-planning",
                    },
                ],
            },
            {
                title: "Industries",
                items: [
                    {
                        name: "E-commerce",
                        description: "We create innovative solutions for e-commerce brands...",
                        link: "/ecommerce",
                    },
                    {
                        name: "Healthcare",
                        description: "We build digital solutions tailored for healthcare businesses...",
                        link: "/healthcare",
                    },
                ],
            },
        ],
        projects: [
            {
                title: "Medical Device Website Redesign Rejuvenates & Transforms Online Brand Image",
                description: "StemWave Medical Device Website Redesign & Development",
                image: "/image-intro1.webp",
                bgColor: "#10141c",
            },
            {
                title: "Medical Device Website Redesign Rejuvenates & Transforms Online Brand Image",
                description: "StemWave Medical Device Website Redesign & Development",
                image: "/image-intro1.webp",
                bgColor: "white",
            },
            {
                title: "Medical Device Website Redesign Rejuvenates & Transforms Online Brand Image",
                description: "StemWave Medical Device Website Redesign & Development",
                image: "/image-intro1.webp",
                bgColor: "#10141c",
            },
        ],
    };

    return (
        <main className="bg-[#16171A] text-white pt-36">
            {/* Hero Section */}
            <HeroSection data={pageData.hero} />

            {/* Dynamic Sections (Our Expertise & Industries) */}
            {pageData.sections.map((section, index) => (
                <CommonSection key={index} title={section.title} items={section.items} />
            ))}

            {/* Featured Projects */}
            <div className="py-4">
                <h1 className="md:text-end text-2xl md:text-6xl font-bold px-4 md:px-20">
                    <SplitText text="Featured Projects" />
                </h1>
                {pageData.projects.map((project, index) => (
                    <FeaturedProject
                        key={index}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        bgColor={project.bgColor}
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
