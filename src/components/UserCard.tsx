import Link from "next/link";
import Avartar from "./Avartar";
import { UserSearchResult } from "@/model/user";

type Props = {
  user: UserSearchResult;
};

export default function UserCard({
  user: { name, username, avatarimg, following, followers },
}: Props) {
  return (
    <Link
      href={`/${username}`}
      className="flex items-center w-full rounded-sm border border-neutral-300 
        mb-2 p-4 bg-white hover:bg-neutral-50"
    >
      <Avartar image={avatarimg} />
      <div className="text-neutral-500">
        <p className="text-black font-bold leading-4">{username}</p>
        <p>{name}</p>
        <p className="text-sm leading-4">{`${followers} followers ${following} following`}</p>
      </div>
    </Link>
  );
}
