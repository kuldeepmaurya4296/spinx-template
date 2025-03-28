import SplitText from "@/components/animation/SplitText";
import InsightContent from "./Content";
import RelatedInsights from "./Related";
import FeaturedProject from "@/components/pages/homepage/FeaturedProject";
import { getAllProjects } from "@/utills/individualWork";
import { urlFor } from "@/sanity/lib/image";
import { Link } from "lucide-react";

export default async function IndivisualInsights() {
     const projects = await getAllProjects()
    return (
        <div>
           <InsightContent />
           <RelatedInsights/>
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
        </div>
    );
}
