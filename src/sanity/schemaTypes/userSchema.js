import { v4 as uuidv4 } from 'uuid';

export default {
  name: "user",
  title: "Users",
  type: "document",
  fields: [
    {
      name: "userId",
      title: "User ID",
      type: "string",
      readOnly: true, // To prevent manual changes
      initialValue: () => uuidv4(), // Generates a unique ID
    },
    {
      name: "name",
      title: "Full Name",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) =>
        Rule.regex(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, {
          name: "email",
          invert: false,
        }).error("Enter a valid email"),
    },
    {
      name: "profilePicture",
      title: "Profile Picture",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "mobileNumber",
      title: "Mobile Number",
      type: "string",
      validation: (Rule) =>
        Rule.regex(/^\d{10}$/, { name: "mobileNumber" }).error(
          "Enter a valid 10-digit mobile number"
        ),
    },
    {
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      readOnly: true,
      initialValue: () => new Date().toISOString(),
    },
    {
      name: "updatedAt",
      title: "Updated At",
      type: "datetime",
      readOnly: true,
      initialValue: () => new Date().toISOString(),
    },
  ],
};
