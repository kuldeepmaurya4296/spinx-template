"use client";

import { useEffect, useState } from "react";
import InsightCard from "../InsightCard";
import { getRelatedInsights } from "@/utills/getInsights";
import { getInsights } from "@/utills/homepage";

export default function RelatedInsights() {
    const [relatedInsights, setRelatedInsights] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentSlug, setCurrentSlug] = useState(null);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        let isMounted = true;

        const fetchInsights = async () => {
            try {
                const data = await getInsights();
                console.log("Fetched Insights Data:", data); // ✅ Debugging Output

                if (!data || !data.slug || !data.slug.current) {
                    console.error("Error: Insights data is missing 'slug.current'");
                    setLoading(false);
                    return;
                }

                if (isMounted) {
                    setCurrentSlug(data.slug.current);
                    setCategories(data.categories || []);
                }
            } catch (error) {
                console.error("Error fetching insights:", error);
                if (isMounted) setLoading(false);
            }
        };

        fetchInsights();

        return () => {
            isMounted = false;
        };
    }, []);

    useEffect(() => {
        let isMounted = true;

        if (currentSlug && categories.length > 0) {
            getRelatedInsights(currentSlug)
                .then((data) => {
                    console.log("Fetched Related Insights:", data); // ✅ Debugging Output

                    if (isMounted) setRelatedInsights(data);
                })
                .catch((error) => {
                    console.error("Error fetching related insights:", error);
                })
                .finally(() => {
                    if (isMounted) setLoading(false);
                });
        }

        return () => {
            isMounted = false;
        };
    }, [currentSlug, categories]);

    if (loading) {
        return <p className="text-gray-400">Loading related insights...</p>;
    }



    return (
        <div className="mt-10  bg-[#16171A] px-4 md:px-20">


            {relatedInsights.length > 0 && (
                <>
                    <h3 className="text-2xl md:text-5xl py-10 font-semibold text-white mb-4">
                        Related Insights
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {relatedInsights.map((insight) => (
                            <InsightCard key={insight?.slug?.current || Math.random()} {...insight} />
                        ))}
                    </div>
                </>
            ) }
        </div>

    );
}
