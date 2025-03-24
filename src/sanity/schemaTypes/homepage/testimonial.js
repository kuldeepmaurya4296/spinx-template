export default {
    name: "testimonial",
    title: "Testimonials",
    type: "document",
    fields: [
      {
        name: "logo",
        title: "Logo",
        type: "image",
        options: { hotspot: true },
      },
      {
        name: "category",
        title: "Category",
        type: "string",
      },
      {
        name: "quote",
        title: "Quote",
        type: "text",
      },
      {
        name: "name",
        title: "Name",
        type: "string",
      },
      {
        name: "position",
        title: "Position",
        type: "string",
      },
    ],
  };
  