export type User = {
  name: string;
  email: string;
  avatarimg?: string;
  username: string;
};

export type SimpleUser = Pick<User, "avatarimg" | "username">;

export type DetailUser = User & {
  following: SimpleUser[];
  followers: SimpleUser[];
  bookmarks: string[];
};
