export default {
    name: "awards",
    title: "Awards",
    type: "document",
    fields: [
      {
        name: "logo",
        title: "Logo",
        type: "image",
        options: { hotspot: true },
      },
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "description",
        title: "Description",
        type: "text",
      },
      {
        name: "awards",
        title: "Awards",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              { name: "organization", title: "Organization", type: "string" },
              { name: "award", title: "Award", type: "string" },
            ],
          },
        ],
      },
    ],
  };
  