export default {
  name: 'participant',
  title: 'Participant',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'school',
      title: 'School',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'schoolEntry',
          fields: [
            {
              name: 'name',
              title: 'School Name',
              type: 'string'
            },
            {
              name: 'image',
              title: 'School Image',
              type: 'image',
              options: {
                hotspot: true
              }
            }
          ]
        }
      ]
    },
  ],

  preview: {
    select: {
      title: 'title',
      // author: 'author.name',
      // media: 'mainImageUrl',
    },
  },
}
