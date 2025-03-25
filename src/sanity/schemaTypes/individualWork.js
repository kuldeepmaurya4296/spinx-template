import { defineType, defineField } from 'sanity';
import slugify from 'slugify'; // Make sure to install slugify


export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]+/g, '')
            .slice(0, 200), // Limits to 200 chars
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Project Category',
      type: 'string',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true, // Allows for cropping and focusing on the image
      },
    }),
    defineField({
      name: 'thumbnailImage',
      title: 'Thumbnail Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),

    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'text',
    }),
    defineField({
      name: 'awards',
      title: 'Awards',
      type: 'object', 
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'text',
        }),
        defineField({
          name: 'overview',
          title: 'Overview',
          type: 'text',
        }),
      
        defineField({
          name: 'awardList',
          title: 'Award List',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'award',
              title: 'Award',
              fields: [
                defineField({ name: 'name', title: 'Name', type: 'string' }),
                defineField({ name: 'award', title: 'Award', type: 'string' }),
                defineField({ name: 'link', title: 'Link', type: 'url' }),
              ],
            },
          ],
        }),
      ],
    }),    
    defineField({
      name: 'keyAchievements',
      title: 'Key Achievements',
      type: 'array',
      of: [
        defineField({
          name: 'achievement',
          title: 'Achievement',
          type: 'object',
          fields: [
            defineField({ name: 'value', title: 'Value', type: 'string' }),
            defineField({ name: 'label', title: 'Label', type: 'string' }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'background',
      title: 'Background',
      type: 'object',
      fields: [
        defineField({ name: 'text', title: 'Text', type: 'text' }),
      ],
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',  // Changed from 'object' to 'array'
      of: [
        defineField({
          name: 'contentItem',
          title: 'Content Item',
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({
              name: 'content',
              title: 'Content',
              type: 'array',
              of: [{ type: 'text' }],  // Supports multiple text entries
            }),
            defineField({ name: 'viewSite', title: 'View Site', type: 'url' }),
            defineField({ name: 'downloadPDF', title: 'Download PDF', type: 'url' }),
          ],
        }),
      ],
    }),
    
    defineField({
      name: 'beforeUI',
      title: 'Before UI',
      type: 'object',
      fields: [
        defineField({
          name: 'images',
          title: 'Images',
          type: 'array',
          of: [{ type: 'image' }],
        }),
      ],
    }),
    defineField({
      name: 'styleGuide',
      title: 'Style Guide',
      type: 'object',
      fields: [
        defineField({
          name: 'colors',
          title: 'Colors',
          type: 'array',
          of: [
            defineField({
              name: 'color',
              title: 'Color',
              type: 'object',
              fields: [
                defineField({ name: 'hex', title: 'Hex Code', type: 'string' }),
                defineField({ name: 'name', title: 'Name', type: 'string' }),
                defineField({ name: 'textColor', title: 'Text Color', type: 'string' }),
              ],
            }),
          ],
        }),
        defineField({
          name: 'typography',
          title: 'Typography',
          type: 'array',
          of: [
            defineField({
              name: 'font',
              title: 'Font',
              type: 'object',
              fields: [
                defineField({ name: 'name', title: 'Font Name', type: 'string' }),
                defineField({ name: 'weight', title: 'Font Weight', type: 'string' }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'demoImages',
      title: 'Demo Images',
      type: 'array',
      of: [{ type: 'image' }],
    }),
    defineField({
      name: 'marquee',
      title: 'Marquee',
      type: 'object',
      fields: [
        defineField({ name: 'text', title: 'Text', type: 'string' }),
        defineField({ name: 'speed', title: 'Speed', type: 'number' }),
      ],
    }),
  ],
});
