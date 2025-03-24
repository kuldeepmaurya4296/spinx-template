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
          list: ["Insight", "Guide"], // Dropdown selection
        },
      },
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "categories",
        title: "Categories",
        type: "array",
        of: [{ type: "string" }],
      },
    ],
  };
  