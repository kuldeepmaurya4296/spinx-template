import FeaturedProject from "../homepage/FeaturedProject";

export default function Work() {
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
    return (
        <>
         {projects.map((project, index) => (
        <FeaturedProject
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          bgColor={project.bgColor}
        />
      ))}
        </>
    )
}