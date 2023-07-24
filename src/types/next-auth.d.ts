import { PagesOptions } from "next-auth";
import NextAuth, { DefaultSession } from "next-auth/next";

declare module "next-auth" {
  interface Session {
    user: {
      username: string;
    } & DefaultSession["user"];
  }
  //   interface NextAuthOptions {
  //     app: Partial<PagesOptions> | undefined;
  //   }
}
