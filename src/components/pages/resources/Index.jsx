import SplitText from "@/components/animation/SplitText";
import FeaturedProject from "../homepage/FeaturedProject";
import LearnSection from "../homepage/LearnSection";
import Newsletter from "./Newsletter";
import Link from "next/link";
import { getInsights } from "@/utills/homepage";
import { getAllProjects } from "@/utills/individualWork";
import { urlFor } from "@/sanity/lib/image";


export default async function Resources() {
    const insightsData = await getInsights()
    const projects = await getAllProjects()
    // const insightsData = [
    //     {
    //         type: "Insight",
    //         title: "48 Award-Winning Best Website Designs in 2025",
    //         categories: ["UX", "Web Development", "Website Redesign"],
    //     },
    //     {
    //         type: "Insight",
    //         title: "25 Web Design Tutorials and Courses for Beginners to Expert Developers in 2024",
    //         categories: ["Web Development"],
    //     },
    //     {
    //         type: "Guide",
    //         title: "Top Website Design Companies in 2025",
    //         categories: ["Website Redesign"],
    //     },
    // ];
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
        <main className="pt-36 bg-[#16171A] text-white">
            <LearnSection
            
            title="What’s On Our Mind"
            data={insightsData}
            linkTitle="View More Insights"
            linkHref="/resources/insights"
            />
           <Newsletter />
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
    )
}