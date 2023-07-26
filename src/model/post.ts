export type Comment = {
  comment: string;
  username: string;
  avatarimg: string;
};

export type SimplePost = Omit<FullPost, "comments"> & {
  comments: number;
};

export type FullPost = {
  id: string;
  username: string;
  avatarimg: string;
  image: string;
  text: string;
  createdAt: string;
  likes: string[];
  comments: Comment[];
};
