// import {defineField, defineType} from 'sanity'

// export const user = defineType({
//   name: 'user',
//   title: 'User',
//   type: 'document',
//   fields: [
//     defineField({
//       name: 'username',
//       title: 'Username',
//       type: 'string',
//     }),
//     defineField({
//       name: 'name',
//       title: 'Name',
//       type: 'string',
//     }),
//     defineField({
//       name: 'email',
//       title: 'Email',
//       type: 'string',
//     }),
//     defineField({
//       name: 'avatarimg',
//       title: 'AvatarImg',
//       type: 'string',
//     }),
//     defineField({
//       name: 'following',
//       title: 'Following',
//       type: 'array',
//       of: [
//         defineField({
//           name: 'follow',
//           type: 'reference',
//           to: [{type: 'user'}],
//         }),
//       ],
//       validation: (Rule) => Rule.unique(),
//     }),
//     defineField({
//       name: 'followers',
//       title: 'Followers',
//       type: 'array',
//       of: [
//         defineField({
//           name: 'follower',
//           type: 'reference',
//           to: [{type: 'user'}],
//         }),
//       ],
//       validation: (Rule) => Rule.unique(),
//     }),
//     defineField({
//       name: 'bookmarks',
//       title: 'Bookmarks',
//       type: 'array',
//       of: [
//         defineField({
//           name: 'bookmark',
//           type: 'reference',
//           to: [{type: 'post'}],
//         }),
//       ],
//       validation: (Rule) => Rule.unique(),
//     }),
//   ],
// })

export default {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'username',
      title: 'Username',
      type: 'string',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'avatarimg',
      title: 'AvatarImg',
      type: 'string',
    },
    {
      name: 'following',
      title: 'Following',
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
      name: 'followers',
      title: 'Followers',
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
      name: 'bookmarks',
      title: 'Bookmarks',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'post'}],
        },
      ],
      validation: (Rule: any) => Rule.unique(),
    },
  ],
  preview: {
    select: {
      title: 'username',
      subtitle: 'name',
    },
  },
}
