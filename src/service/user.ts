import { client } from "./sanity";

type OAuthUser = {
  id: string;
  name: string;
  email: string;
  username: string;
  image?: string | null;
};

export async function addUser({ id, name, email, username, image }: OAuthUser) {
  return client
    .createIfNotExists({
      _id: id,
      _type: "user",
      username,
      name,
      email,
      avatarimg: image,
      following: [],
      followers: [],
      bookmarks: [],
    })
    .then((res) => {
      console.log(`${username} was created (or was already present)`);
    });
}
