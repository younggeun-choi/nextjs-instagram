import Avartar from "./Avartar";

type Props = {
  avatarimg: string;
  username: string;
};

export default function PostUserAvartar({ avatarimg, username }: Props) {
  return (
    <div className="flex items-center p-2">
      <Avartar image={avatarimg} size="md" highlight />
      <span className="text-gray-900 font-bold ml-2">{username}</span>
    </div>
  );
}
