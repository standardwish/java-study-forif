import connectMongoDB from "@/lib/mongodb";
import users from "@/models/users";
import { type IUser } from "@/types/type";
import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

const options: NextAuthOptions = {
  providers: [
    CredentialProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectMongoDB();
        const user = await users.findOne({
          username: credentials?.username,
        });

        if (!user) {
          throw new Error("No User Credentials");
        }

        const isPasswordCorrect = credentials!.password === user.password;

        if (!isPasswordCorrect) {
          throw new Error("Password InCorrect Credentials");
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/mypage",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user);
      return token;
    },
    session: async ({ session, token }) => {
      const user = token.user as IUser;

      session.user = user;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(options);
export { handler as GET, handler as POST };
