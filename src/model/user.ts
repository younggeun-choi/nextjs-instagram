export type User = {
  name: string;
  email: string;
  image?: string;
  username: string;
  avatarimg?: string;
};

export type SimpleUser = Pick<User, "avatarimg" | "username">;

export type DetailUser = User & {
  following: SimpleUser[];
  followers: SimpleUser[];
  bookmarks: string[];
};

export type UserSearchResult = User & {
  following: number;
  followers: number;
};
