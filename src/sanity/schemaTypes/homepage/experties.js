export default {
    name: "expertise",
    title: "Expertise",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "sections",
        title: "Sections",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              { name: "title", title: "Title", type: "string" },
              { name: "content", title: "Content", type: "text" },
              { name: "link", title: "Link", type: "text" },
            ],
          },
        ],
      },
    ],
  };
  