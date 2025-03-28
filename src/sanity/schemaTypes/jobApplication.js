export default {
  name: "jobApplication",
  title: "Job Applications",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    },
    {
      name: "portfolio",
      title: "Portfolio URL",
      type: "url",
    },
    {
      name: "resume",
      title: "Resume",
      type: "file",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "jobTitle",
      title: "Job Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "appliedAt",
      title: "Applied At",
      type: "datetime",
      initialValue: new Date().toISOString(),
    },
  ],
};
