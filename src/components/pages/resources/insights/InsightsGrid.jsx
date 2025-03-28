"use client";
import { useState } from "react";
import InsightCard from "./InsightCard";
import { Search } from "lucide-react";



export default function InsightsGrid({insightsData}) {
    console.log('insightsData', insightsData);
    const [searchQuery, setSearchQuery] = useState("");
    const [filterType, setFilterType] = useState("All");

    const filteredInsights = insightsData.filter((insight) => {
        return (
            (filterType === "All" || insight.type === filterType) &&
            insight.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
    });

    return (
        <div className="container mx-auto px-4 py-10 border-b border-gray-400 mb-10 md:px-16">
            {/* Search and Filter Section */}
            <div className="flex flex-col justify-between items-center mb-6 gap-4">
                <div className="relative w-full ">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search by title..."
                        className="border p-4 pl-10 rounded w-full md:text-2xl"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="flex gap-2 justify-start items-start text-xl md:text-3xl w-full border-b border-gray-400">
                    {["All", "Guide", "Insight"].map((type) => (
                        <button
                            key={type}
                            className={`px-4 py-6 rounded transition-all ${filterType === type
                                    ? "text-yellow-400 underline"
                                    : "text-white"
                                } hover:text-yellow-400 hover:underline`}
                            onClick={() => setFilterType(type)}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>


            {/* Grid Display */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10 md:py-20">
                {filteredInsights.length > 0 ? (
                    filteredInsights.map((insight, index) => (
                        <InsightCard key={index} {...insight} />
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-400">
                        No results found.
                    </p>
                )}
            </div>
        </div>
    );
}
