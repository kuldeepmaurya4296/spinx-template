export default {
    name: "awardsRecognition",
    title: "Awards & Recognition",
    type: "document",
    fields: [
      {
        name: "heading",
        title: "Heading",
        type: "string",
      },
      {
        name: "subheading",
        title: "Subheading",
        type: "string",
      },
      {
        name: "description",
        title: "Description",
        type: "text",
      },
      {
        name: "link",
        title: "Link",
        type: "object",
        fields: [
          { name: "text", title: "Link Text", type: "string" },
          { name: "url", title: "URL", type: "url" },
        ],
      },
    ],
  };
  