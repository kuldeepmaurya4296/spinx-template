'use client';

const awards = [
  { name: 'Awwwards.com', award: 'Honorable Mention', link: 'https://www.awwwards.com/' },
  { name: 'W3 Awards', award: 'Gold Award Winner', link: 'https://www.w3award.com/' },
  { name: 'Web Marketing Association', award: 'Outstanding Website', link: 'https://www.webmarketingassociation.org/' },
  { name: 'Davey Awards', award: 'Gold Award Winner', link: 'https://www.daveyawards.com/' }
];

const BegaWebsiteRedesign = () => {
  return (
    <div className="mx-auto px-4 md:px-20 py-10 grid md:grid-cols-3 gap-12">
      {/* Left Section */}
      <div className="md:col-span-2 space-y-10">
        <h1 className="text-5xl font-bold">BEGA Website Redesign</h1>
        <h2 className="text-lg uppercase text-gray-500 mt-2">Overview</h2>
        <p className="text-gray-700 mt-4 leading-relaxed text-xl">
          BEGA is a third generation family – held company that holds a top spot in fine
          architectural lighting solutions. Founded in 1949, BEGA has grown globally over the years
          while converting a number of European designs to modern day U.S. standards. They abide by
          an “innovate, not follow.” approach to design and remain quality conscious. BEGA is now a
          multi-million dollar corporation and continues to grow as they change the architectural
          world one illumination at a time.
        </p>
      </div>
      
      {/* Right Section - Awards */}
      <div>
        <h2 className="text-sm uppercase text-gray-500">Awards</h2>
        <ul className="mt-4 space-y-10">
          {awards.map((award, index) => (
            <li key={index}>
              <h3 className="font-semibold text-2xl">{award.name}</h3>
              <p className="text-gray-600 text-sm">
                <a href={award.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  {award.award}
                </a>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BegaWebsiteRedesign;