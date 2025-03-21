const { defineType, defineField, defineArrayMember } = require('sanity');

const navbarSchema = defineType({
  name: 'navbar',
  title: 'Navbar',
  type: 'document',
  fields: [
    defineField({
      name: 'navItems',
      title: 'Navigation Items',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Menu Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'href',
              title: 'Menu Link',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'dropdown',
              title: 'Dropdown Items',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'title',
                      title: 'Submenu Title',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: 'link',
                      title: 'Submenu Link',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: 'description',
                      title: 'Description',
                      type: 'string',
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
});

module.exports = navbarSchema;
