
import { getInsights } from "@/utills/homepage";
import { getAllProjects } from "@/utills/individualWork";
import LearnSection from "../../homepage/LearnSection";
import Newsletter from "../Newsletter";
import SplitText from "@/components/animation/SplitText";
import FeaturedProject from "../../homepage/FeaturedProject";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import InsightsGrid from "./InsightsGrid";


export default async function Insights() {
    const insightsData = await getInsights()
    const projects = await getAllProjects()
   
    return (
        <main className="pt-36 bg-[#16171A] text-white">
            <LearnSection
            
            title="What’s On Our Mind"
            data={insightsData}
            // linkTitle="View More Insights"
            // linkHref="/insights"
            />
           <Newsletter />
           <InsightsGrid insightsData={insightsData}/>
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