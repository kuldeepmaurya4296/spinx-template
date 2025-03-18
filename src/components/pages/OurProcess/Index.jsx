import DiveIn from "../homepage/DiveIn";
import HighlightSection from "../homepage/HighlightSection";
import OurProcessSection from "../homepage/OurProcessSection";
import StepNavigation from "../homepage/StepNavigation";
import DemoImage from "../works/IndivisualWork/DemoImage";

export default function OurProcess() {
    const processStepsData =
    {
        title: "Planning & Research",
        description: "We start by understanding your goals and audience.",
        videoUrl: "https://www.youtube.com/watch?v=zUtTpuqV55U",
    }
    const demoImages = ["/default.webp", "/default.webp", "/default.webp", "/default.webp", "/default.webp", "/default.webp", "/default.webp", "/default.webp", "/default.webp", "/default.webp"]
    const highlightData = [
        {
            title: "Longevity",
            description: "We have been delivering top-notch web solutions since 2004, earning a reputation as a trusted industry leader.",
            imageUrl: "/image-intro1.webp",
            positionOffset: { x: -200, y: -425 }
        },
        {
            title: "Innovation",
            description: "We use cutting-edge technologies to create stunning and functional digital experiences.",
            imageUrl: "/image-intro1.webp",
            positionOffset: { x: -150, y: -400 }
        },
        {
            title: "Client Satisfaction",
            description: "Our client-first approach ensures tailored solutions that drive results and growth.",
            imageUrl: "/image-intro1.webp",
            positionOffset: { x: -100, y: -375 }
        },
        {
            title: "Expert Team",
            description: "Our team of designers, developers, and strategists bring expertise and creativity to every project.",
            imageUrl: "/image-intro1.webp",
            positionOffset: { x: -50, y: -350 }
        },
        {
            title: "Global Reach",
            description: "We have successfully served clients from various industries across the globe.",
            imageUrl: "/image-intro1.webp",
            positionOffset: { x: 0, y: -325 }
        },
        {
            title: "Proven Results",
            description: "We focus on delivering measurable success with data-driven strategies and innovative solutions.",
            imageUrl: "/image-intro1.webp",
            positionOffset: { x: 50, y: -300 }
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
            <StepNavigation />
            <DiveIn />
        </main>
    )
}