import Hero from "./Hero";
import BegaWebsiteRedesign from "./BegaWebsiteRedesign";
import KeyAchievements from "./KeyAchievements";
import BackgroundSection from "./Background";
import BeforeUI from "./Before";
import Content from "./Content";
import StyleGuide from "./StyleGuide";
import Image from "next/image";
import InfiniteScroll from "./DemoImage";
import MarqueeText from "./MarqueeText";
import DemoImage from "./DemoImage";

export default function IndivisualWork() {
    return (
        <>
        
            <Hero />
            <BegaWebsiteRedesign />
            <KeyAchievements />
            <BackgroundSection />
            <Content />
            <BeforeUI />
            <Content />
            <StyleGuide />
            <Content />
            <div className="py-10">
                <Image
                    src={'/demo-site.webp'}
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    className="mx-auto"
                />
            </div>
            <Content />
            <DemoImage />
            <MarqueeText />
            <Content />

        </>
    )
}