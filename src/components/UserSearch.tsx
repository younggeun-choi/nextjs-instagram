"use client";

import { useState } from "react";
import useSWR from "swr";

export default function UserSearch() {
  // /api/search/${keyword} 호출하여 사용자 검색
  // 검색하는 keyword가 있다면 해당 사용자 정보를 반환
  // 검색하는 keyword가 없다면 /api/search/ 까지만 호출하여 사용자 목록을 반환
  const [keyword, setKeyword] = useState("");
  const { data, isLoading, error } = useSWR(`/api/search/${keyword}`);
  console.log(data);
  return <></>;
}
