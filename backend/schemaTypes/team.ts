export default {
  name: 'team',
  title: 'Team',
  type: 'document',
  fields: [
    {
      name: 'fullname',
      title: 'Full Name',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
  ],

  preview: {
    select: {
      title: 'fullname',
      // author: 'author.name',
      // media: 'mainImageUrl',
    },
  },
}
