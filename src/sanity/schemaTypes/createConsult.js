export default {
    name: "consultation",
    title: "Consultations",
    type: "document",
    fields: [
      {
        name: "fullName",
        title: "Full Name",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "email",
        title: "Email Address",
        type: "string",
        validation: (Rule) => Rule.required().email(),
      },
      {
        name: "phone",
        title: "Phone Number",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "website",
        title: "Website URL",
        type: "url",
      },
      {
        name: "message",
        title: "Message",
        type: "text",
      },
      {
        name: "createdAt",
        title: "Created At",
        type: "datetime",
        initialValue: () => new Date().toISOString(),
      },
    ],
  };
  