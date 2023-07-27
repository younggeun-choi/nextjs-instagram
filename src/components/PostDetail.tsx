import { Comment, FullPost, SimplePost } from "@/model/post";
import Image from "next/image";
import useSWR from "swr";
import PostUserAvartar from "./PostUserAvartar";
import ActionBar from "./ActionBar";
import { Comme } from "next/font/google";
import CommentForm from "./CommentForm";
import Avartar from "./Avartar";
type Props = {
  post: SimplePost;
};
export default function PostDetail({ post }: Props) {
  const { id, avatarimg, username, image, likes, createdAt, text } = post;
  const { data } = useSWR<FullPost>(`/api/posts/${id}`);
  const comments = data?.comments;

  return (
    <section className="flex w-full h-full">
      <div className="relative basis-3/5">
        <Image
          className="object-cover"
          src={image}
          alt={`photo by ${username}`}
          priority
          fill
          sizes="650px"
        />
      </div>
      <div className="w-full basis-2/5 flex flex-col">
        <PostUserAvartar avatarimg={avatarimg} username={username} />
        <ul className="border-t border-gray-200 h-full overflow-y-auto p-4 mb-1">
          {comments &&
            comments.map(
              (
                {
                  comment,
                  avatarimg: commentAvartarImg,
                  username: commentUsername,
                },
                index
              ) => (
                <li key={index} className="flex items-center mb-1">
                  <Avartar
                    image={commentAvartarImg}
                    size="sm"
                    highlight={commentUsername === username}
                  />
                  <div className="ml-2">
                    <span className="font-bold mr-1">{commentUsername}</span>
                    <span>{comment}</span>
                  </div>
                </li>
              )
            )}
        </ul>
        <ActionBar likes={likes} username={username} createdAt={createdAt} />
        <CommentForm />
      </div>
    </section>
  );
}
