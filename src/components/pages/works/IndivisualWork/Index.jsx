'use client'
import Hero from "./Hero";
import BegaWebsiteRedesign from "./BegaWebsiteRedesign";
import KeyAchievements from "./KeyAchievements";
import BeforeUI from "./Before";
import Content from "./Content";
import StyleGuide from "./StyleGuide";
import Image from "next/image";
import MarqueeText from "./MarqueeText";
import DemoImage from "./DemoImage";
import RotatedBgComponent from "./Background";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getProjectBySlug } from "@/utills/individualWork";
import { urlFor } from "@/sanity/lib/image";
export default  function IndivisualWork() {
  const param = useParams()
  const slug = param?.work;
  // console.log("slug:", slug);
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      if (slug) {
        setLoading(true);
        const fetchedProject = await getProjectBySlug(slug);
        // console.log("Fetched Project Data:", fetchedProject);
        if (fetchedProject) {
          setProject(fetchedProject);
        } else {
          setError("Project not found");
        }
        setLoading(false);
      }
    };
  
    fetchProject();
  }, [slug]);
  

  if (loading) return <p className="w-[90%] h-screen flex items-center justify-center">Loading...</p>;
  if (error) return <p className="w-[90%] h-screen flex items-center justify-center">{error}</p>;
  // console.log('project ', project)
  const IndivisualWorkData = project
   

  return (
    <>
      <Hero title={project?.title} heroImage = {urlFor(project.heroImage).url()}  />
      <BegaWebsiteRedesign awards={project?.awards} />
      <KeyAchievements achievements={project?.keyAchievements} />
      <RotatedBgComponent text={IndivisualWorkData.background.text} />
      {IndivisualWorkData.content?.[0] && <Content data={IndivisualWorkData.content[0]} />}
      <BeforeUI images={IndivisualWorkData.beforeUI.images} />
      {IndivisualWorkData.content?.[1] && <Content data={IndivisualWorkData.content[1]} />}
      <StyleGuide colors={IndivisualWorkData.styleGuide.colors} typography={IndivisualWorkData.styleGuide.typography} />
      {IndivisualWorkData.content?.[2] && <Content data={IndivisualWorkData.content[2]} />}
      <div className="py-10">
        <Image src="/demo-site.webp" alt="Picture of the author" width={500} height={500} className="mx-auto" />
      </div>
      {IndivisualWorkData.content?.[3] && <Content data={IndivisualWorkData.content[3]} />}
      <DemoImage images={IndivisualWorkData.demoImages} />
      {IndivisualWorkData.content?.[4] && <Content data={IndivisualWorkData.content[4]} />}
      <MarqueeText text={IndivisualWorkData.marquee.text} speed={IndivisualWorkData.marquee.speed} />
      {IndivisualWorkData.content?.[5] && <Content data={IndivisualWorkData.content[5]} />}

    </>
  );
}
