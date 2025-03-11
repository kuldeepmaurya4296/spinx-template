import Link from "next/link";

const CommonSection = ({ title, items }) => {
  return (
    <section className=" py-10 px-4 md:px-20">
      <h2 className="text-gray-400 text-lg">{title}</h2>
      <div className="mt-4 space-y-6">
        {items.map((item, index) => (
          <Link key={index} href={item.link} className="block border-t border-gray-700 py-6">
            <div className="flex justify-between items-start px-10">
              <h3 className="text-2xl md:text-4xl font-bold hover-underline w-1/3">{item.name}</h3>
              <p className="text-gray-400 text-start text-4xl w-1/2">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CommonSection;
