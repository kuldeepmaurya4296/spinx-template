"use client";

import { Clock } from "lucide-react";
import Link from "next/link";

export default function InsightCard({ type, title, categories, readTime, slug }) {
  // console.log('slug indivisual card', slug);
  return (
    <div className=" text-white p-6 rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:translate-x-0.5 hover:-translate-y-0.5">
      <Link href={`/resources/insights/${slug.current}`}>
        <p className="text-gray-400 text-sm mb-2">{type}</p>
        <h2 className="text-3xl font-semibold">{title}</h2>
        {/* <p className="text-gray-400 text-xs mt-1">{categories.join(", ")}</p> */}
        <p className="text-gray-400 text-sm mt-2 flex items-center gap-2">
          <span className="mr-1"><Clock width={20} /></span> {readTime} min read
        </p>
      </Link>
    </div>
  );
}
