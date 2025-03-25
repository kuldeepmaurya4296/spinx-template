
import { urlFor } from "@/sanity/lib/image";
import FeaturedProject from "../homepage/FeaturedProject";

export default async function Work({ projects }) {

  return (
    <>
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
    </>
  )
}