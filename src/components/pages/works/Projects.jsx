'use client';

import { useState } from 'react';
import ProjectCard from "./ProjectCard";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Import icons
import { urlFor } from '@/sanity/lib/image';

export default function Projects({ projectCard }) {
  // console.log('image---', projectCard);

  // If there are 3 or fewer projects, return null
  if (!projectCard || projectCard.length <= 3) {
    return null;
  }

  // Skip the first 3 projects
  const filteredProjects = projectCard.slice(3);

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="px-4 md:px-20 py-10">
      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {currentProjects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.thumbnailImage ? urlFor(project.thumbnailImage).url() : "/default.webp"} // Fallback Image
            category={project.category}
            title={project.title}
            slug={project?.slug?.current} // Pass the slug safely
          />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center mt-8 gap-4">
        {/* Previous Button */}
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`p-3 rounded-full transition-all 
            ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "bg-gray-700 hover:bg-gray-600"}`}
        >
          <ChevronLeft className="text-white w-6 h-6" />
        </button>

        {/* Page Indicator */}
        <span className="text-white text-lg font-semibold">
          {currentPage} / {totalPages}
        </span>

        {/* Next Button */}
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`p-3 rounded-full transition-all 
            ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "bg-gray-700 hover:bg-gray-600"}`}
        >
          <ChevronRight className="text-white w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
