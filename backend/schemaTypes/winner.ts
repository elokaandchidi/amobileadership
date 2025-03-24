export default {
  name: 'winner',
  title: 'Winner',
  type: 'document',
  fields: [
    {
      name: 'year',
      title: 'Year',
      type: 'string',
    },
    {
      name: 'prizewinner',
      title: 'Prize Winner',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'winnerEntry',
          fields: [
            {
              name: 'name',
              title: 'Full Name',
              type: 'string'
            },
            {
              name: 'school',
              title: 'School Name',
              type: 'string'
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true
              }
            },
            {
              name: 'position',
              title: 'Position',
              type: 'string',
              options: {
                list: [
                  {title: 'Winner', value: 'Winner'},
                  {title: 'Winner (Boys Category)', value: 'Winner (Boys Category)'},
                  {title: 'Winner (Girls Category)', value: 'Winner (Girls Category)'},
                  {title: 'Runner Up', value: 'Runner Up'}
                ], // <-- predefined values
                layout: 'radio' // <-- defaults to 'dropdown'
              }
            }
          ]
        }
      ]
    },
  ],

  preview: {
    select: {
      title: 'year',
      // author: 'author.name',
      // media: 'mainImageUrl',
    },
  },
}
