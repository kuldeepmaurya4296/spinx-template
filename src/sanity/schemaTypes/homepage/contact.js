export default {
    name: "contact",
    title: "Contact Section",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "heading",
        title: "Heading",
        type: "string",
      },
      {
        name: "label",
        title: "Label",
        type: "string",
      },
      {
        name: "imageUrl",
        title: "Image URL",
        type: "image",
        options: { hotspot: true },
      },
      {
        name: "description",
        title: "Description",
        type: "text",
      },
      {
        name: "buttonText",
        title: "Button Text",
        type: "string",
      },
    ],
  };
  