// import {defineField, defineType} from 'sanity'

// export const post = defineType({
//   name: 'post',
//   title: 'Post',
//   type: 'document',
//   fields: [
//     defineField({
//       name: 'author',
//       title: 'Author',
//       type: 'reference',
//       to: [{type: 'user'}],
//     }),
//     defineField({
//       name: 'photo',
//       title: 'Photo',
//       type: 'image',
//     }),
//     defineField({
//       name: 'likes',
//       title: 'Likes',
//       type: 'array',
//       of: [
//         defineField({
//           name: 'like',
//           type: 'reference',
//           to: [{type: 'user'}],
//         }),
//       ],
//       validation: (Rule) => Rule.unique(),
//     }),
//     defineField({
//       name: 'comments',
//       title: 'Comments',
//       type: 'array',
//       of: [
//         defineField({
//           title: 'Comment',
//           name: 'comment',
//           type: 'document',
//           fields: [
//             defineField({
//               name: 'author',
//               title: 'Author',
//               type: 'reference',
//               to: [{type: 'user'}],
//             }),
//             defineField({
//               name: 'comment',
//               title: 'Comment',
//               type: 'string',
//             }),
//           ],
//         }),
//       ],
//     }),
//   ],
// })

export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'user'}],
    },
    {
      name: 'photo',
      title: 'Photo',
      type: 'image',
    },
    {
      name: 'likes',
      title: 'Likes',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'user'}],
        },
      ],
      validation: (Rule: any) => Rule.unique(),
    },
    {
      name: 'comments',
      title: 'Comments',
      type: 'array',
      of: [
        {
          name: 'comment',
          title: 'Comment',
          type: 'document',
          fields: [
            {
              name: 'author',
              title: 'Author',
              type: 'reference',
              to: [{type: 'user'}],
            },
            {
              name: 'comment',
              title: 'Comment',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}
