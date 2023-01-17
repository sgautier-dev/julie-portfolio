import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'julieInfo',
  title: 'JulieInfo',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'string',
    }),
  ],
})
