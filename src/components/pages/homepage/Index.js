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

export default function HomePage() {
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
            logo: '/image-intro1.webp', // Path to SPINX logo
            title: 'SPINX',
            description: 'We embarked on a journey to rethink our own website and better position our web design agency. It was a fun project where we were able to let our creative juices flow unhindered and are extremely proud of the final results.',
            awards: [
                { organization: 'W3 Awards', award: 'Silver Award in Websites for Website Redesign' },
                { organization: 'Awwwards.com', award: 'Honorable Mention' },
            ],
        },
    ];
    return (
        <main className="bg-[#16171A] text-white">
            <HeroSection />
            <AwardWinningAgency />
            <div className="py-4">
                <h1 className="md:text-end text-2xl md:text-6xl font-bold">Featured Projects</h1>
                <FeaturedProject
                    title="Medical Device Website Redesign Rejuvenates & Transforms Online Brand Image"
                    description="StemWave Medical Device Website Redesign & Development"
                    image="/image-intro1.webp" // Your image path
                    bgColor="#10141c" // Example background color
                />
                <FeaturedProject
                    title="Medical Device Website Redesign Rejuvenates & Transforms Online Brand Image"
                    description="StemWave Medical Device Website Redesign & Development"
                    image="/image-intro1.webp" // Your image path
                    bgColor="white" // Example background color
                />
                <FeaturedProject
                    title="Medical Device Website Redesign Rejuvenates & Transforms Online Brand Image"
                    description="StemWave Medical Device Website Redesign & Development"
                    image="/image-intro1.webp" // Your image path
                    bgColor="#10141c" // Example background color
                />
                <div className="flex justify-end ">
                    <Link href={'/work'} className="underline text-lg md:text-2xl text-end px-4 md:px-20">
                        See More Work
                    </Link>
                </div>
            </div>
            <WeAreSection />
            <div className="px-4 md:px-20 py-4">
                <h2 className="text-gray-400 text-lg text-center md:text-left w-full border-b py-4 ">
                    What makes us one of the top rated web design companies?
                </h2>
                <HighlightSection />
                <HighlightSection />
                <HighlightSection />
                <HighlightSection />
                <HighlightSection />
                <HighlightSection />

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
            <div className=" px-4 md:px-20 py-60 ">
                <p className="text-lg md:text-2xl md:w-1/2">
                    We've spent almost 2 decades in web design, and have crafted creative web design solutions using a wide variety of platforms.
                </p>
                <Link href="/your-target-page">
                    <p className="mt-4 text-lg md:text-xl font-semibold underline underline-offset-4 cursor-pointer hover:text-gray-300">
                        Which platform is right for you?
                    </p>
                </Link>
            </div>
            <section>
                <AwardsRecognition />
                <AwardsSection awardsData={awardsData} />
                <AwardsSection awardsData={awardsData} />
                <sapn className='w-full px-20 text-4xl mt-20 py-10'>

                    <Link href={'#'} >View More</Link>
                </sapn>
            </section>
            <OurProcessSection />
            <StepNavigation />
            <ContactUsSection />
            <Testimonials />
            <LearnSection />

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