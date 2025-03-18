import LearnSection from "../homepage/LearnSection";
import LogoCarousel from "../homepage/LogoCareousel";
import OurProcessSection from "../homepage/OurProcessSection"
import Jobs from "./Jobs";

export default function Careers() {
    const processStepsData =
    {
        title: "Planning & Research",
        description: "We start by understanding your goals and audience.",
    }
    const logos = [
        "/image-intro1.webp",
        "/image-intro1.webp",
        "/image-intro1.webp",
        "/image-intro1.webp",
        "/image-intro1.webp",
        "/image-intro1.webp",
        "/image-intro1.webp",
    ];
    const jobOpeningsData = [
        {
            type: "Job Opening",
            title: "Frontend Developer - React/Next.js",
            categories: ["React", "Next.js", "JavaScript", "UI/UX"],
            link: "/careers/frontend-developer"
        },
        {
            type: "Job Opening",
            title: "Backend Developer - Node.js & Express",
            categories: ["Node.js", "Express", "MongoDB", "API Development"],
            link: "/careers/backend-developer"
        },
        {
            type: "Job Opening",
            title: "Full Stack Developer - MERN Stack",
            categories: ["MERN Stack", "JavaScript", "MongoDB", "React", "Node.js"],
            link: "/careers/fullstack-developer"
        },
        {
            type: "Job Opening",
            title: "UI/UX Designer",
            categories: ["Figma", "Adobe XD", "User Research", "Wireframing"],
            link: "/careers/uiux-designer"
        },
        {
            type: "Job Opening",
            title: "DevOps Engineer",
            categories: ["AWS", "Docker", "Kubernetes", "CI/CD"],
            link: "/careers/devops-engineer"
        },
        {
            type: "Job Opening",
            title: "Data Scientist - AI/ML",
            categories: ["Python", "Machine Learning", "Data Analysis", "AI"],
            link: "/careers/data-scientist"
        }
    ];
    
    return (
        <main className="pt-36 bg-[#16171A] text-white">
            <OurProcessSection
                title="Our Process"
                subtitle="From Design to Launch"
                description="Our expert team handles the entire development process, guiding you from concept to a fully launched website."
                processSteps={processStepsData}
            />
            <LogoCarousel logos={logos} bgColor="white" direction="left" />
            <Jobs 
                title="Opportunities"
                data={jobOpeningsData}
                // linkTitle="View More Insights"
                // linkHref="/insights"
            />
        </main>
    )
}