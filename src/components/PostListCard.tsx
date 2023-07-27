import { SimplePost } from "@/model/post";
import Avartar from "./Avartar";
import Image from "next/image";
import CommentForm from "./CommentForm";
import ActionBar from "./ActionBar";

type Props = {
  post: SimplePost;
  priority?: boolean;
};

export default function PostListCard({ post, priority = false }: Props) {
  const { avatarimg, username, image, likes, createdAt, text } = post;
  return (
    <article className="rounded-lg shadow-md border border-gray-200">
      <div className="flex items-center p-2">
        <Avartar image={avatarimg} size="md" highlight />
        <span className="text-gray-900 font-bold ml-2">{username}</span>
      </div>
      <Image
        className="w-full object-cover aspect-square"
        src={image}
        alt={`photo by ${username}`}
        width={500}
        height={500}
        priority={priority}
      />
      <ActionBar
        likes={likes}
        username={username}
        createdAt={createdAt}
        text={text}
      />
      <CommentForm />
    </article>
  );
}
