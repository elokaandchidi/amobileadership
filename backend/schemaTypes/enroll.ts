export default {
  name: 'enroll',
  title: 'Enroll',
  type: 'document',
  fields: [
    {
      name: 'fullname',
      title: 'Full Name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
    },
    {
      name: 'referral',
      title: 'How did you hear about us?',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'string',
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
