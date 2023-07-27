"use client";
import { DetailUser } from "@/model/user";
import Link from "next/link";
import { PropagateLoader } from "react-spinners";
import useSWR from "swr";
import Avartar from "./Avartar";
import ScrollableBar from "./ui/ScrollableBar";

export default function FollowingBar() {
  // 1. 클라이언트 컴포넌트에서 백엔드에게 apoi/me 사용자의 정보를 얻어옴
  const { data, error, isLoading: loading } = useSWR<DetailUser>("/api/me");
  // const users = data?.following;
  // const users = undefined;
  const users = data?.following && [
    ...data?.following,
    ...data?.following,
    ...data?.following,
    ...data?.following,
    ...data?.following,
  ];
  // 2. 백엔드에서는 현재 로그인된 사용자의 세션 정보를 이용해서
  // 3. 백엔드에서 사용자의 상세 정보를 Sanity에서 가지고 옴 (followings)
  // 4. Sanity에서 가지고 온 followings 정보를 이용해서 클라이언트 컴포넌트에서 UI에 보여줌 (image, username)
  return (
    <section className="w-full flex justify-center items-center p-4 shadow-sm shadow-neutral-300 mb-4 rounded-lg min-h-[90px] overflow-x-auto relative z-0">
      {loading ? (
        <PropagateLoader size={8} color="red" />
      ) : (
        (!users || users.length === 0) && <p>{`팔로잉한 사용자가 없습니다.`}</p>
      )}
      {users && users.length > 0 && (
        <ScrollableBar>
          {users.map(({ username, avatarimg }) => (
            <Link
              key={username}
              className="flex flex-col items-center w-20"
              href={`/user/${username}`}
            >
              <Avartar image={avatarimg} highlight />
              <p className="text-sm w-full text-center text-ellipsis overflow-hidden">
                {username}
              </p>
            </Link>
          ))}
        </ScrollableBar>
      )}
    </section>
  );
}
