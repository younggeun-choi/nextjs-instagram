import NextAuth from "next-auth";
import GooleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GooleProvider({
      clientId: process.env.GOOLE_OAUTH_ID || "",
      clientSecret: process.env.GOOLE_OAUTH_SECRET || "",
    }),
    // ...add more providers here
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
