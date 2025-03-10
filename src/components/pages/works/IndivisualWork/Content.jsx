"use client";

export default function Content() {
  const contentData = {
    title:
      "While evaluating BEGA’s previous website, it was apparent that the site was not a fair representation of the cutting-edge products BEGA had to offer.",
    subtitle:
      "We found that despite their rapid growth in popularity for being a revolutionist in fine architectural lighting, BEGA’s site design was described as outdated and unengaging.",
    content: [
      "The site was not user-friendly, the navigation was confusing, and the design had previously been built on a small and retired grid structure, making it look outdated.",
      "This content was also difficult to update in the CMS without breaking something on the front end.",
      "To update the visual appeal, we redesigned the site by adding color, moving away from its previous monochromatic scheme, and simplifying site navigation.",
    ],
  };

  return (
    <section className="max-w-3xl mx-auto p-6">
      <p className="text-sm uppercase text-gray-500 font-semibold">Discovery</p>
      <h2 className="text-2xl md:text-3xl font-bold mt-2">{contentData.title}</h2>
      <p className="mt-4 text-gray-700">{contentData.subtitle}</p>
      <div className="mt-4 space-y-4 text-gray-600">
        {contentData.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {/* Links Section */}
      <div className="mt-6 flex gap-6">
        {["View Site", "Download PDF"].map((text, index) => (
          <a
            key={index}
            href="#"
            className="relative overflow-hidden border border-gray-800 text-gray-800 px-6 py-2 font-semibold uppercase tracking-wide inline-block bg-white group transition-all duration-300"
          >
            <span className="absolute inset-0 h-0 bg-green-600 group-hover:h-full transition-all duration-300 ease-in-out"></span>
            <span className="relative group-hover:text-white">{text}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
