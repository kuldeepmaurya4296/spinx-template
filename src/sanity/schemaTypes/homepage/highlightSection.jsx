export default {
    name: "highlight",
    title: "Highlight",
    type: "document",
    fields: [
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
        name: "imageUrl",
        title: "Image URL",
        type: "string",
      },
      {
        name: "positionOffset",
        title: "Position Offset",
        type: "object",
        fields: [
          { name: "x", title: "X Offset", type: "number" },
          { name: "y", title: "Y Offset", type: "number" },
        ],
      },
    ],
  };
  