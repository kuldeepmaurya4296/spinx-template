import slugify from "slugify";

export default {
  name: "insight",
  title: "Insights",
  type: "document",
  fields: [
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: ["Insight", "Guide"],
      },
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
        slugify: (input) =>
          slugify(input, { lower: true, strict: true, remove: /[*+~.()'"!:@]/g }),
      },
      validation: (Rule) => Rule.required().error("Slug is required"),
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "readTime",
      title: "Read Time (Minutes)",
      type: "number",
    },
    {
      name: "user",
      title: "Author",
      type: "reference",
      to: [{ type: "user" }],
      options: {
        filter: "userId != null",
      },
    },
    {
      name: "thumbnailImage",
      title: "Thumbnail Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    },
  ],
};
