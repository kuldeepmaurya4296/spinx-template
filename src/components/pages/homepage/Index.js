import Link from "next/link";
import AwardWinningAgency from "./Awards";
import FeaturedProject from "./FeaturedProject";
import HeroSection from "./HeroSection";
import WeAreSection from "./WeAre";
import HighlightSection from "./HighlightSection";
import BrandsSection from "./BrandsSection";
import LogoCarousel from "./LogoCareousel";
import ExpertiseSection from "./ExpertiesSection";
import AwardsRecognition from "./AwardsRecognition";
import AwardsSection from "./AwardsSection";
import OurProcessSection from "./OurProcessSection";
import StepNavigation from "./StepNavigation";
import ContactUsSection from "./ContactUsSection";
import Testimonials from "./Testimonials";
import LearnSection from "./LearnSection";
import DiveIn from "./DiveIn";
import SplitText from "@/components/animation/SplitText";

export default function HomePage() {
    const projects = [
        {
            title: 'Medical Device Website Redesign Rejuvenates & Transforms Online Brand Image',
            description: 'StemWave Medical Device Website Redesign & Development',
            image: '/image-intro1.webp', // Image path
            bgColor: '#10141c', // Background color
        },
        {
            title: 'Medical Device Website Redesign Rejuvenates & Transforms Online Brand Image',
            description: 'StemWave Medical Device Website Redesign & Development',
            image: '/image-intro1.webp',
            bgColor: 'white',
        },
        {
            title: 'Medical Device Website Redesign Rejuvenates & Transforms Online Brand Image',
            description: 'StemWave Medical Device Website Redesign & Development',
            image: '/image-intro1.webp',
            bgColor: '#10141c',
        },
    ];
    const logos = [
        "/image-intro1.webp",
        "/image-intro1.webp",
        "/image-intro1.webp",
        "/image-intro1.webp",
        "/image-intro1.webp",
        "/image-intro1.webp",
        "/image-intro1.webp",
    ];
    const awardsData = [
        {
            logo: '/image-intro1.webp',  // Path to BEGA logo
            title: 'BEGA',
            description: 'We enhanced BEGA’s website with an exquisite design and robust functionality that perfectly complements their innovative architectural lighting.',
            awards: [
                { organization: 'Awwwards.com', award: 'Honorable Mention' },
                { organization: 'W3 Awards', award: 'Gold Award Winner' },
                { organization: 'Web Marketing Association', award: 'Outstanding Website' },
                { organization: 'Davey Awards', award: 'Gold Award Winner' },
            ],
        },
        {
            logo: '/image-intro1.webp',
            title: 'SPINX',
            description: 'We embarked on a journey to rethink our own website and better position our web design agency. It was a fun project where we were able to let our creative juices flow unhindered and are extremely proud of the final results.',
            awards: [
                { organization: 'W3 Awards', award: 'Silver Award in Websites for Website Redesign' },
                { organization: 'Awwwards.com', award: 'Honorable Mention' },
            ],
        },
    ];
    const processStepsData =
    {
        title: "Planning & Research",
        description: "We start by understanding your goals and audience.",
        videoUrl: "https://www.youtube.com/watch?v=zUtTpuqV55U",
    }
    const testimonialData = [
        {
            logo: "/image-intro1.webp",
            category: "B2C ELECTRICAL PARTS ECOMMERCE WEBSITE",
            quote:
                "The team is highly responsive and eager to help. They show a commitment to excellence for both large and small projects.",
            name: "Dana Knight",
            position: "Senior Director Global Marketing & Customer Experience",
        },
        {
            logo: "/image-intro1.webp",
            category: "SAAS SOFTWARE COMPANY",
            quote:
                "Their expertise in design and development has helped us scale our product faster and enhance user engagement.",
            name: "Alex Johnson",
            position: "CTO, Tech Solutions Inc.",
        },
    ];
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
    const whatWeAre = {
        heading: "We Are",
        title: "Creative Designers, Insightful Strategists, and Exceptional Engineers",
        description: "We are SPINX Digital in Los Angeles and as innovators in creative website design & digital marketing, we build awesome digital masterpieces!",
        years: 18,
        projects: 250,
        awards: 30
    };
    const insightsData = [
        {
            type: "Insight",
            title: "48 Award-Winning Best Website Designs in 2025",
            categories: ["UX", "Web Development", "Website Redesign"],
        },
        {
            type: "Insight",
            title: "25 Web Design Tutorials and Courses for Beginners to Expert Developers in 2024",
            categories: ["Web Development"],
        },
        {
            type: "Guide",
            title: "Top Website Design Companies in 2025",
            categories: ["Website Redesign"],
        },
    ];
    return (
        <main className="bg-[#16171A] text-white">
            <HeroSection />
            <AwardWinningAgency />
            <div className="py-4">
                <h1 className="md:text-end text-2xl md:text-6xl font-bold px-4 md:px-20">
                    {/* Featured Projects */}
                    <SplitText text="Featured Projects" />
                </h1>
                {projects.map((project, index) => (
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
            <WeAreSection data={whatWeAre} />

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

            <BrandsSection />
            <LogoCarousel logos={logos} bgColor="white" direction="right" />
            <LogoCarousel logos={logos} />
            <ExpertiseSection />
            <div>

                <div className="px-4 md:px-20 py-10 md:pt-40">
                    <h2 className="text-4xl md:text-7xl md:pr-60 font-bold bg-gradient-to-r from-lime-400 to-green-500 text-transparent bg-clip-text">
                        We are experts in leading industry standard platforms & technologies.
                    </h2>
                </div>
                <LogoCarousel logos={logos} bgColor="white" direction="right" />
                <LogoCarousel logos={logos} />
            </div>

            <section>
                <AwardsRecognition />
                <AwardsSection awardsData={awardsData} />
                <AwardsSection awardsData={awardsData} />
                <sapn className='w-full px-20 text-4xl mt-20 py-10'>

                    <Link href={'#'} >View More</Link>
                </sapn>
            </section>
            <OurProcessSection
                title="Our Process"
                subtitle="From Design to Launch"
                description="Our expert team handles the entire development process, guiding you from concept to a fully launched website."
                processSteps={processStepsData}
            />
            <StepNavigation />
            <ContactUsSection />
            <Testimonials
                heading="Testimonials"
                description="Take a deep dive into the tales of triumph from our web design agency. Our clients enthusiastically recount their journeys, showcasing how our cutting-edge web design solutions have revolutionized their online platforms."
                testimonials={testimonialData}
            />
            <LearnSection
                title="Learn"
                data={insightsData}
                linkTitle="View More Insights"
                linkHref="/insights"
            />

            <div className="bg-[#181818] text-white px-4 md:px-20 py-16">
                <h2 className="text-3xl md:text-5xl font-bold">
                    Uniquely built for{" "}
                    <span className="text-[#F5C37E]">your brand</span>
                </h2>
                <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl">
                    Our team of web designers and developers at SPINX Digital excel at
                    creating custom design solutions for every single client – no two sites
                    are alike. Here's how we do it:
                </p>
            </div>
            <StepNavigation />
            <DiveIn />
        </main>
    );
}