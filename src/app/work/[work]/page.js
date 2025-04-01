import IndivisualWork from "@/components/pages/works/IndivisualWork/Index";
export const metadata = {
    title: "Our Work | Spinx - Crafting Innovative Digital Experiences",
    description: "Explore Spinx’s portfolio of innovative web solutions and digital experiences. See how we bring ideas to life with cutting-edge technology and seamless UI/UX.",
    openGraph: {
      title: "Our Work | Spinx",
      description: "Discover our latest projects, case studies, and success stories that showcase our expertise in building world-class digital solutions.",
      url: "https://www.your-spinx-app.com/work"
    }
  };
export default function WorkPage({params}) {
    
    return (
        <>
            <IndivisualWork />
        </>
    )
}