"use client";

import { SimplePost } from "@/model/post";
import { log } from "console";
import useSWR from "swr";

export default function PostList() {
  const { data: posts, isLoading: loading } = useSWR("/api/posts");
  console.log(posts);
  return (
    <ul>
      {posts &&
        posts.map((post: SimplePost) => <li key={post.id}>{post.text}</li>)}
    </ul>
  );
}
