export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'publishedBy',
      title: 'Published by',
      type: 'string',
    },
    {
      name: 'publishedDate',
      title: 'Published Date',
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
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Active', value: 'active'},
          {title: 'Inactive', value: 'inactive'}
        ], // <-- predefined values
        layout: 'radio' // <-- defaults to 'dropdown'
      }
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
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
