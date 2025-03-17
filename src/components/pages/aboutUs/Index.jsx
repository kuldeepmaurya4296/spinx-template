import DiveIn from "../homepage/DiveIn";
import HighlightSection from "../homepage/HighlightSection";
import StepNavigation from "../homepage/StepNavigation";
import WeAreSection from "../homepage/WeAre";
import DemoImage from "../works/IndivisualWork/DemoImage";
import CEOMessage from "./CEOMessage";

export default function AboutUS() {
    const parentData = {
        heading: "We Are",
        title: "Creative Designers, Insightful Strategists, and Exceptional Engineers",
        description: "We are SPINX Digital in Los Angeles and as innovators in creative website design & digital marketing, we build awesome digital masterpieces!",
        years: 18,
        projects: 250,
        awards: 30
    };
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
            <WeAreSection data={parentData} />
            <DemoImage images={demoImages} />
            <div className="px-4 md:px-20 py-4">
                <h2 className="text-gray-400 text-lg text-center md:text-left w-full border-b py-4">
                    What makes us one of the top-rated web design companies?
                </h2>
                {highlightData.map((item, index) => (
                    <HighlightSection
                        key={index}
                        title={item.title}
                        description={item.description}
                        imageUrl={item.imageUrl}
                        positionOffset={item.positionOffset}
                    />
                ))}
            </div>
            <StepNavigation />
            <CEOMessage />
            <DiveIn />
        </main>
    )
}