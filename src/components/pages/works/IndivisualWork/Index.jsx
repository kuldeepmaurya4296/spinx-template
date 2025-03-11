import Hero from "./Hero";
import BegaWebsiteRedesign from "./BegaWebsiteRedesign";
import KeyAchievements from "./KeyAchievements";
import BackgroundSection from "./Background";
import BeforeUI from "./Before";
import Content from "./Content";
import StyleGuide from "./StyleGuide";
import Image from "next/image";
import MarqueeText from "./MarqueeText";
import DemoImage from "./DemoImage";
import RotatedBgComponent from "./Background";

export default function IndivisualWork() {
  const contentData = {
    hero: {
      title: "Lighting Up an Internet Presence for BEGA",
      imageSrc: "/demo-site.webp",
    },
    begaWebsiteRedesign: {
      title: "BEGA Website Redesign",
      overview:
        "BEGA is a third-generation family-held company that holds a top spot in fine architectural lighting solutions. Founded in 1949, BEGA has grown globally over the years while converting a number of European designs to modern-day U.S. standards. They abide by an 'innovate, not follow' approach to design and remain quality-conscious. BEGA is now a multi-million dollar corporation and continues to grow as they change the architectural world one illumination at a time.",
      awards: [
        { name: "Awwwards.com", award: "Honorable Mention", link: "https://www.awwwards.com/" },
        { name: "W3 Awards", award: "Gold Award Winner", link: "https://www.w3award.com/" },
        { name: "Web Marketing Association", award: "Outstanding Website", link: "https://www.webmarketingassociation.org/" },
        { name: "Davey Awards", award: "Gold Award Winner", link: "https://www.daveyawards.com/" },
      ],
    },
    keyAchievements: [
      { value: "+672%", label: "Sessions" },
      { value: "+120%", label: "Pages per session" },
      { value: "+168%", label: "Avg. session duration" },
      { value: "-42%", label: "Bounce rate" },
      { value: "+10,098%", label: "Organic search traffic" },
    ],
    background: {
      text: "BEGA's website lacked the innovation of their products, was outdated and confusing to navigate.",
    },
    content: {
      label: "Discovery",
      title:
        "While evaluating BEGA’s previous website, it was apparent that the site was not a fair representation of the cutting-edge products BEGA had to offer.",
      subtitle:
        "We found that despite their rapid growth in popularity for being a revolutionist in fine architectural lighting, BEGA’s site design was described as outdated and unengaging.",
      content: [
        "The site was not user-friendly, the navigation was confusing, and the design had previously been built on a small and retired grid structure, making it look outdated.",
        "This content was also difficult to update in the CMS without breaking something on the front end.",
        "To update the visual appeal, we redesigned the site by adding color, moving away from its previous monochromatic scheme, and simplifying site navigation.",
      ],
      viewSite: "https://example.com",
      downloadPDF: "https://example.com/sample.pdf",
    },
    beforeUI: {
      images: [
        { src: "/image1.webp", alt: "Before UI 1" },
        { src: "/image2.webp", alt: "Before UI 2" },
        { src: "/image3.webp", alt: "Before UI 3" },
      ],
    },
    styleGuide: {
      colors: [
        { hex: "#000000", name: "Black", textColor: "white" },
        { hex: "#FFFFFF", name: "White", textColor: "black" },
        { hex: "#989898", name: "Dark Grey", textColor: "white" },
        { hex: "#DADADA", name: "Grey", textColor: "black" },
        { hex: "#F0F0F0", name: "Light Grey", textColor: "black" },
      ],
      typography: [
        { name: "Roboto Regular", weight: "font-normal" },
        { name: "Roboto Bold", weight: "font-bold" },
      ],
    },
    demoImages: ["/default.webp", "/default.webp", "/default.webp", "/default.webp", "/default.webp"],
    marquee: {
      text: "After thorough evaluation and testing, BEGA's remodeled website is up-to-date and presents a new and straightforward website that creates new excitement for their company.",
      speed: 15,
    },
  };

  return (
    <>
      <Hero {...contentData.hero} />
      <BegaWebsiteRedesign {...contentData.begaWebsiteRedesign} />
      <KeyAchievements achievements={contentData.keyAchievements} />
      <RotatedBgComponent text={contentData.background.text} />
      <Content data={contentData.content} />
      <BeforeUI images={contentData.beforeUI.images} />
      <Content data={contentData.content} />
      <StyleGuide colors={contentData.styleGuide.colors} typography={contentData.styleGuide.typography} />
      <Content data={contentData.content} />
      <div className="py-10">
        <Image src="/demo-site.webp" alt="Picture of the author" width={500} height={500} className="mx-auto" />
      </div>
      <Content data={contentData.content} />
      <DemoImage images={contentData.demoImages} />
      <MarqueeText text={contentData.marquee.text} speed={contentData.marquee.speed} />
      <Content data={contentData.content} />
    </>
  );
}
