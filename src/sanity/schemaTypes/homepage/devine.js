export default {
    name: "diveIn",
    title: "Dive In",
    type: "document",
    fields: [
      {
        name: "titlePart1",
        title: "Title Part 1",
        type: "string",
      },
      {
        name: "titlePart2",
        title: "Title Part 2",
        type: "string",
      },
      {
        name: "images",
        title: "Images",
        type: "object",
        fields: [
          { name: "default", title: "Default Image", type: "image" },
          { name: "work", title: "Work Image", type: "image" },
          { name: "expertise", title: "Expertise Image", type: "image" },
        ],
      },
      {
        name: "sections",
        title: "Sections",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              { name: "label", title: "Label", type: "string" },
              { name: "imageKey", title: "Image Key", type: "string" },
            ],
          },
        ],
      },
    ],
  };
  