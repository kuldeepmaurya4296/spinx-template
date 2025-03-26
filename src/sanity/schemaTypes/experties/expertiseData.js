import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'individualExpertise',
  title: 'Individual Expertise',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name', // Auto-generate slug from name
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]+/g, '')
            .slice(0, 200),
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
        name: 'subtitle',
        title: 'Sub Title',
        type: 'string',
      }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'speciality',
      title: 'Speciality',
      type: 'array',
      of: [
        defineField({
          name: 'specialityItem',
          title: 'Speciality Item',
          type: 'object',
          fields: [
            defineField({ name: 'name', title: 'Name', type: 'string' }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
            }),
            defineField({
                name: "bgImage",
                type: "image",
                title: "Background Image",
                options: { hotspot: true },
              },),
          ],
        }),
      ],
    }),
  ],
});
