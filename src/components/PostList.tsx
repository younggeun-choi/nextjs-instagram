"use client";

import { SimplePost } from "@/model/post";
import { log } from "console";
import { GridLoader } from "react-spinners";
import useSWR from "swr";
import PostListCard from "./PostListCard";

export default function PostList() {
  const { data: posts, isLoading: loading } = useSWR("/api/posts");

  return (
    <section>
      {loading && (
        <div className="text-center mt-32">
          <GridLoader color="red" />
        </div>
      )}
      {posts && (
        <ul>
          {posts &&
            posts.map((post: SimplePost) => (
              <li key={post.id} className="mb-4">
                <PostListCard post={post} />
              </li>
            ))}
        </ul>
      )}
    </section>
  );
}
