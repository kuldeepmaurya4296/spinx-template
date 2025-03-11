"use client";

export default function HeroSection({ data }) {
  return (
    <section className="text-white py-16 px-4 md:px-20 relative">
      <div className="mx-auto flex flex-col gap-10">
        {/* Label */}
        {data.label && <label className={"text-lg font-semibold text-gray-600"}>{data.label}</label>}

        {/* Main Heading */}
        <h1 className="text-6xl font-extrabold leading-tight">
          <span className="md:text-8xl bg-gradient-to-r from-[#A78BFA] to-[#EC4899] text-transparent bg-clip-text">
            {data.title.main}
          </span>
          <br />
          <span className="text-gray-100">{data.title.secondary}</span>
        </h1>

        {/* Subheading */}
        {data.subtitle && (
          <h2 className="mt-6 text-3xl font-bold text-white">{data.subtitle}</h2>
        )}

        {/* Description */}
        {data.description && (
          <p className="mt-4 text-lg text-gray-400 leading-relaxed w-full md:w-2/3">
            {data.description}
          </p>
        )}

        {/* Background Text */}
        {data.bgText && (
          <div className="absolute right-10 top-1/2 transform -translate-y-1/2 text-[200px] font-bold text-gray-800 opacity-10 select-none">
            {data.bgText}
          </div>
        )}
      </div>
    </section>
  );
}
