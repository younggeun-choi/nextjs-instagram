"use client";

import { SimplePost } from "@/model/post";
import Image from "next/image";
import { useState } from "react";
import ActionBar from "./ActionBar";
import CommentForm from "./CommentForm";
import PostDetail from "./PostDetail";
import PostModal from "./PostModal";
import PostUserAvartar from "./PostUserAvartar";
import ModalPortal from "./ui/ModalPortal";

type Props = {
  post: SimplePost;
  priority?: boolean;
};

export default function PostListCard({ post, priority = false }: Props) {
  const { avatarimg, username, image, likes, createdAt, text } = post;
  const [openModal, setOpenModal] = useState(false);

  return (
    <article className="rounded-lg shadow-md border border-gray-200">
      <PostUserAvartar avatarimg={avatarimg} username={username} />
      <Image
        className="w-full object-cover aspect-square"
        src={image}
        alt={`photo by ${username}`}
        width={500}
        height={500}
        priority={priority}
        onClick={() => setOpenModal(true)}
      />
      <ActionBar
        likes={likes}
        username={username}
        createdAt={createdAt}
        text={text}
      />
      <CommentForm />
      {openModal && (
        <ModalPortal>
          <PostModal onClose={() => setOpenModal(false)}>
            <PostDetail post={post} />
          </PostModal>
        </ModalPortal>
      )}
    </article>
  );
}
