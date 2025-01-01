import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
export const {
  auth,
  handlers: { GET, POST },
} = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialProvider({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        await new Promise((resolve) => {
          // Simulate async operation
          setTimeout(() => resolve(true), 1000);
        });
        return { email, password }; // Ensure the returned object matches the User type
      },
    }),
    GoogleProvider({}),
  ],
});
