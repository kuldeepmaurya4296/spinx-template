export default {
    name: "heroSection",
    type: "document",
    title: "Hero Section",
    fields: [
      {
        name: "mainTitle",
        type: "string",
        title: "Main Title",
      },
      {
        name: "mainTitleImage",
        type: "image",
        title: "Main Title Image",
        options: { hotspot: true },
      },
      {
        name: "subTitle",
        type: "string",
        title: "Sub Title",
      },
      {
        name: "sideImage",
        type: "image",
        title: "Side Image",
        options: { hotspot: true },
      },
      {
        name: "companyTitle",
        type: "string",
        title: "Company Title",
      },
      {
        name: "companyDescription",
        type: "text",
        title: "Company Description",
      },
    ],
  };
  