export default {
  name: 'squire',
  title: 'The Squire',
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
      name: 'course',
      title: 'Course Title',
      type: 'string',
    },
    {
      name: 'currentLevel',
      title: 'Current Level of study',
      type: 'string',
    },
    {
      name: 'courseDuration',
      title: 'Course Duration',
      type: 'string',
    },
    {
      name: 'achievement',
      title: 'Describe in brief, one achievement, project or experience you are proud of and why.',
      type: 'string',
    },
    {
      name: 'careerInterests',
      title: 'In brief, what career field or industry interests you most, and why?',
      type: 'string',
    },
    {
      name: 'participationReason',
      title: 'In brief, why do you want to participate in this competition?',
      type: 'string',
    },
    {
      name: 'availability',
      title: 'Are you available to attend all competition sessions and activities?',
      type: 'string',
      options: {
        list: [
          {title: 'Yes', value: 'Yes'},
          {title: 'No', value: 'No'}
        ], // <-- predefined values
        layout: 'radio' // <-- defaults to 'dropdown'
      }
    },
    {
      name: 'weeklyCommitment',
      title: 'Approximately how many hours per week can you commit?',
      type: 'string',
      options: {
        list: [
          {title: '30min - 1 hour', value: '30min - 1 hour'},
          {title: '1 - 2 hours', value: '1 - 2 hours'},
          {title: '2 - 3 hours', value: '2 - 3 hours'},
        ], // <-- predefined values
        layout: 'radio' // <-- defaults to 'dropdown'
      }
    },
    {
      name: 'additionalInfo',
      title: 'Is there anything else you would like the selection panel to know?',
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
