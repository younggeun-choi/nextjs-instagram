import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { getUserByUsername } from "@/service/user";
import { data } from "autoprefixer";

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  console.log("get session");

  if (!user) {
    console.log("no user");
    return new Response("Authentication Error", { status: 401 });
  }

  return getUserByUsername(user.username).then((data) =>
    NextResponse.json(data)
  );
}
