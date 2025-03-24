export default {
    name: "award",
    title: "Award",
    type: "document",
    fields: [
      {
        name: "heading",
        title: "Heading",
        type: "string",
      },
      {
        name: "logos",
        title: "Logos",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              { name: "src", title: "Image Source", type: "string" },
              { name: "alt", title: "Alt Text", type: "string" },
              { name: "title", title: "Title", type: "string" },
              { name: "link", title: "Link", type: "string" },
            ],
          },
        ],
      },
    ],
  };
  