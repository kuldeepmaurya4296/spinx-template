export default {
    name: "subscriber",
    title: "Subscribers",
    type: "document",
    fields: [
      {
        name: "email",
        title: "Email",
        type: "string",
        validation: (Rule) => Rule.required().email().error("Valid email is required"),
      },
      {
        name: "subscribedAt",
        title: "Subscribed At",
        type: "datetime",
        readOnly: true,
      },
    ],
  };
  