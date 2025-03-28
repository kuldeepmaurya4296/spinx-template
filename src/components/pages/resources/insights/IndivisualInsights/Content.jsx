"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { getInsightsBySlug } from "@/utills/getInsights";
import { urlFor } from "@/sanity/lib/image";

export default function InsightContent() {
    const param = useParams();
    const slug = param?.insight;
    const [insight, setInsight] = useState(null);
    const [loading, setLoading] = useState(true);

    // console.log("slug:", slug);

    useEffect(() => {
        if (slug) {
            getInsightsBySlug(slug)
                .then((data) => {
                    setInsight(data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching insight:", error);
                    setLoading(false);
                });
        }
    }, [slug]);

    if (loading) {
        return <div className="text-center text-gray-500 text-lg mt-10">Loading...</div>;
    }

    if (!insight) {
        return <div className="text-center text-red-500 text-lg mt-10">Insight not found</div>;
    }

    // console.log("insight:", insight);

    return (
        <div className="max-w-full mx-auto p-4 md:px-20 space-y-8 pt-48">
            <div key={insight?.slug} className="rounded-lg ">
                {/* Title & Meta */}

                <div className="flex flex-col gap-6 md:gap-10 md:px-40">
                    <p className="text-xl">{insight?.type} </p>
                    <h2 className="text-3xl md:text-6xl font-bold text-gray-800">{insight?.title}</h2>

                    <p className="text-sm text-gray-500">
                        Written By <span className="font-semibold">{insight?.author?.name || "Unknown"}</span>
                    </p>
                </div>

                {/* Thumbnail Image */}
                {insight?.thumbnailImage && (
                    <div className="mt-6">
                        <Image
                            src={urlFor(insight?.thumbnailImage).url()}
                            alt={insight?.title}
                            width={800}
                            height={500}
                            className="rounded-lg w-full h-auto shadow-md"
                            priority
                        />
                    </div>
                )}

                {/* Content Rendering */}
                <div className="mt-6 text-lg text-gray-700 space-y-6 leading-relaxed">
                    <PortableText
                        value={insight?.content}
                        components={{
                            block: {
                                normal: ({ children }) => <p className="text-gray-700">{children}</p>,
                                h2: ({ children }) => <h2 className="text-3xl font-bold text-gray-900 mt-6">{children}</h2>,
                                h3: ({ children }) => <h3 className="text-2xl font-semibold text-gray-800 mt-4">{children}</h3>,
                                blockquote: ({ children }) => (
                                    <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600">
                                        {children}
                                    </blockquote>
                                ),
                            },
                            marks: {
                                strong: ({ children }) => <strong className="font-bold text-gray-900">{children}</strong>,
                                em: ({ children }) => <em className="italic text-gray-700">{children}</em>,
                            },
                            types: {
                                image: ({ value }) => (
                                    <div className="my-6 flex justify-center">
                                        <Image
                                            src={urlFor(value).url()}
                                            alt="Content Image"
                                            width={700}
                                            height={450}
                                            className="rounded-lg shadow-md"
                                        />
                                    </div>
                                ),
                            },
                            list: {
                                bullet: ({ children }) => <ul className="list-disc pl-6 space-y-2 text-gray-700">{children}</ul>,
                                number: ({ children }) => <ol className="list-decimal pl-6 space-y-2 text-gray-700">{children}</ol>,
                            },
                            listItem: {
                                bullet: ({ children }) => <li className="ml-2">{children}</li>,
                                number: ({ children }) => <li className="ml-2">{children}</li>,
                            },
                        }}
                    />
                </div>

                {/* Categories */}
                {/* <div className="mt-6 text-sm text-gray-500 flex flex-wrap gap-2">
                    <span className="font-semibold">Categories:</span>
                    {insight?.categories?.length > 0 && (
                        insight.categories.map((category, index) => (
                            <span key={index} className="bg-gray-200 px-2 py-1 rounded-md text-gray-600">
                                {category}
                            </span>
                        ))
                    )}
                </div> */}
            </div>
        </div>
    );
}
