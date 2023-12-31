import { UserSearchResult } from "@/model/user";
import { client } from "./sanity";

type OAuthUser = {
  id: string;
  name: string;
  email: string;
  username: string;
  avatarimg?: string | null;
};

export async function addUser({
  id,
  name,
  email,
  username,
  avatarimg,
}: OAuthUser) {
  return client
    .createIfNotExists({
      _id: id,
      _type: "user",
      username,
      name,
      email,
      avatarimg,
      following: [],
      followers: [],
      bookmarks: [],
    })
    .then((res) => {
      console.log(`${username} was created (or was already present)`);
    });
}

export async function getUserByUsername(username: string) {
  return client.fetch(`*[_type == "user" && username == "${username}"][0]{
    ...,
    "id": _id,
    following[]->{username, avatarimg},
    followers[]->{username, avatarimg},
    "bookmarks":bookmarks[]->_id
  }`);
}

export async function searchUsers(keyword?: string) {
  const query = keyword
    ? `&& (name match "${keyword}") || (username match "${keyword}")`
    : "";

  return client
    .fetch(
      `*[ _type == "user" ${query} ]{
      ...,
      "following": count(following),
      "followers": count(followers),
    }
    `
    )
    .then((users) =>
      users.map((user: UserSearchResult) => ({
        ...user,
        following: user.following ?? 0,
        followers: user.followers ?? 0,
      }))
    );
}
