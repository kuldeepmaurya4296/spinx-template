const { defineType, defineField } = require('sanity');

const jobPost = defineType({
  name: 'job',
  title: 'Job Opening',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(5).max(100),
    }),
    defineField({
      name: 'categories',
      title: 'Skills',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: 'jobId',
      title: 'Job ID',
      type: 'slug',
      options: { source: 'title', maxLength: 50 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'locations',
      title: 'Locations',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: 'overview',
      title: 'Job Overview',
      type: 'text',
      validation: (Rule) => Rule.required().max(500),
    }),
    defineField({
      name: 'responsibilities',
      title: 'Responsibilities',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: 'qualifications',
      title: 'Qualifications',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: 'postDate',
      title: 'Post Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'lastDateToApply',
      title: 'Last Date to Apply',
      type: 'datetime',
      validation: (Rule) =>
        Rule.required().min(new Date().toISOString()).error("Last date must be in the future."),
    }),
    defineField({
      name: 'salaryRange',
      title: 'Salary Range (Optional)',
      type: 'string',
    }),
    defineField({
      name: 'jobType',
      title: 'Job Type',
      type: 'string',
      options: {
        list: ['Full-time', 'Part-time', 'Contract', 'Internship', 'Freelance'],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});

module.exports = jobPost;
