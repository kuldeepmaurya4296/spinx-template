'use client';

import { useState } from 'react';
import ProjectCard from "./ProjectCard";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Import icons

export default function Projects() {
  const projectCard = [
    {
      image: "/image-intro1.webp",
      category: "Quinn Emanuel Website Redesign",
      title: "How to Personify a “Global Force in Business Litigation”",
    },
    {
      image: "/image-intro1.webp",
      category: "Quinn Emanuel Website Redesign",
      title: "How to Personify a “Global Force in Business Litigation”",
    },
    {
      image: "/image-intro1.webp",
      category: "Quinn Emanuel Website Redesign",
      title: "How to Personify a “Global Force in Business Litigation”",
    },
    {
      image: "/image-intro1.webp",
      category: "Quinn Emanuel Website Redesign",
      title: "How to Personify a “Global Force in Business Litigation”",
    },
    {
      image: "/image-intro1.webp",
      category: "Quinn Emanuel Website Redesign",
      title: "How to Personify a “Global Force in Business Litigation”",
    },
    {
      image: "/image-intro1.webp",
      category: "Quinn Emanuel Website Redesign",
      title: "How to Personify a “Global Force in Business Litigation”",
    },
    {
      image: "/image-intro1.webp",
      category: "Quinn Emanuel Website Redesign",
      title: "How to Personify a “Global Force in Business Litigation”",
    },
    {
      image: "/image-intro1.webp",
      category: "Quinn Emanuel Website Redesign",
      title: "How to Personify a “Global Force in Business Litigation”",
    },
    {
      image: "/image-intro1.webp",
      category: "Extra Project",
      title: "Another Project Example",
    },
  ];

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projectCard.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = projectCard.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="px-4 md:px-20 py-10">
      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {currentProjects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            category={project.category}
            title={project.title}
          />
        ))}
      </div>

      {/* Pagination Controls - Left Aligned */}
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
