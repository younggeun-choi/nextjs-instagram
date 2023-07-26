import { url } from "inspector";
import { client, urlFor } from "./sanity";
import { SimplePost } from "@/model/post";
const simplePostProjection = `
    ...,
    "username": author->username,
    "avatarimg": author->avatarimg,
    "image": photo,
    "likes": likes[]->username,
    "text": comments[0].comment,
    "comments": count(comments),
    "id": _id,
    "createdAt": _createdAt,
`;

export async function getFollowingPostsOf(username: string) {
  return client
    .fetch(
      `*[_type == "post" && author->username == "${username}" 
        || author._ref in *[_type == "user" && username == "${username}"].following[]._ref]
        | order(_createdAt desc) {${simplePostProjection}}`
    )
    .then((post) =>
      post.map((post: SimplePost) => ({ ...post, image: urlFor(post.image) }))
    );
}
