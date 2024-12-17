import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await fetch(`${process.env.SERVER_URL}/api/auth/verify`, {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });

        if (res.ok) {
          const user = await res.json();
          return user; // Return authenticated user
        }    

        // auth failed, return null
        return null
      },
    }),
  ],
  pages: {
    signIn: "/login", // login page
  },
  session: {
    maxAge: 60,
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, authOptions };
