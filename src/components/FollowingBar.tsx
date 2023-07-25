"use client";
import { DetailUser } from "@/model/user";
import Link from "next/link";
import { PropagateLoader } from "react-spinners";
import useSWR from "swr";
import Avartar from "./Avartar";

export default function FollowingBar() {
  // 1. 클라이언트 컴포넌트에서 백엔드에게 apoi/me 사용자의 정보를 얻어옴
  const { data, error, isLoading: loading } = useSWR<DetailUser>("/api/me");
  const users = data?.following;
  // 2. 백엔드에서는 현재 로그인된 사용자의 세션 정보를 이용해서
  // 3. 백엔드에서 사용자의 상세 정보를 Sanity에서 가지고 옴 (followings)
  // 4. Sanity에서 가지고 온 followings 정보를 이용해서 클라이언트 컴포넌트에서 UI에 보여줌 (image, username)
  return (
    <section>
      {loading ? (
        <PropagateLoader size={8} color="red" />
      ) : (
        (!users || users.length === 0) && <p>{`팔로잉한 사용자가 없습니다.`}</p>
      )}
      {users && users.length > 0 && (
        <ul>
          {users.map(({ username, avatarimg }) => (
            <li key={username}>
              <Link href={`/user/${username}`}>
                <Avartar image={avatarimg} highlight />
                <p>{username}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
