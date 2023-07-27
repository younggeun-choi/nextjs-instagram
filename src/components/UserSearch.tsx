"use client";

import { UserSearchResult } from "@/model/user";
import { FormEvent, useState } from "react";
import useSWR from "swr";
import GridSpinner from "./GridSpinner";
import UserCard from "./UserCard";

export default function UserSearch() {
  // /api/search/${keyword} 호출하여 사용자 검색
  // 검색하는 keyword가 있다면 해당 사용자 정보를 반환
  // 검색하는 keyword가 없다면 /api/search/ 까지만 호출하여 사용자 목록을 반환
  const [keyword, setKeyword] = useState("");
  const {
    data: users,
    isLoading,
    error,
  } = useSWR<UserSearchResult[]>(`/api/search/${keyword}`);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // useSWR 이 자동으로 keyword 를 갱신하여 호출하므로 아래 코드는 필요 없음
  };
  return (
    <section className="w-full max-w-2xl my-4 flex flex-col items-center">
      <form className="w-full mb-4" onSubmit={onSubmit}>
        <input
          className="w-full text-xl p-3 outline-none border border-gray-400"
          type="text"
          autoFocus
          placeholder="Search for a username or name"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </form>
      {error && <div>Failed to load</div>}
      {isLoading && <GridSpinner />}
      {!isLoading && !error && users?.length === 0 && (
        <div>찾는 사용자가 없음</div>
      )}
      <ul className="w-full p-4">
        {users &&
          users.map((user) => (
            <li key={user.username}>
              <UserCard user={user} />
            </li>
          ))}
      </ul>
    </section>
  );
}
