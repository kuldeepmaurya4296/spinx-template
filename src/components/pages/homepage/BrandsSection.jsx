"use client";

export default function BrandsSection() {
  return (
    <section className="relative flex flex-col md:flex-row items-start md:items-center justify-between px-6 md:px-20 py-20 pt-40 ">
      {/* Left Side - Heading */}
      <div className="w-full md:w-auto">
        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text text-start">
          Helping Brands <br /> Big and Small
        </h2>
      </div>

      {/* Right Side - Paragraph */}
      <div className="w-full md:w-auto max-w-md text-gray-300 mt-4 md:mt-0">
        <p>
          We are proud to have some of the most well-known and respected corporate
          clients – but we love to help start-ups and new brands too.
        </p>
      </div>
    </section>
  );
}
