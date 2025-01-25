import NextAuth, { User as NextAuthUser } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { authConfig } from "./auth.config";
import { db } from "./lib/prisma";
import jwt from "jsonwebtoken";
export interface ExtendedUser extends NextAuthUser {
  accessToken?: string;
  refreshToken?: string;
}

export const {
  auth,
  handlers: { GET, POST },
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  trustHost: true,
  adapter: PrismaAdapter(db),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user, session, trigger }) {
      if (trigger === "signUp") {
        // Generate Refresh Token and Access Token
        const { email, id, name, role } = user as {
          email: string;
          id: string;
          name: string;
          role: string;
        };
        const accessToken = await jwt.sign(
          { email, id, name, role },
          process.env.JWT_SECRET_KEY as string,
          { expiresIn: process.env.JWT_TOKEN_EXPIRED || "7d" }
        );
        const refreshToken = await jwt.sign(
          { email, id, name, role },
          process.env.JWT_SECRET_KEY as string,
          { expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRED || "14d" }
        );
        await db.session.create({
          data: {
            userId: id,
            refreshToken,
            accessToken,
          },
        });
        token.accessToken = accessToken;
        token.refreshToken = refreshToken;
      }
      if (trigger === "signIn") {
        // Generate Refresh Token and Access Token
        const { email, id, name, role } = user as {
          email: string;
          id: string;
          name: string;
          role: string;
        };
        const accessToken = await jwt.sign(
          { email, id, name, role },
          process.env.JWT_SECRET_KEY as string,
          { expiresIn: process.env.JWT_TOKEN_EXPIRED || "7d" }
        );
        const refreshToken = await jwt.sign(
          { email, id, name, role },
          process.env.JWT_SECRET_KEY as string,
          { expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRED || "14d" }
        );
        await db.session.update({
          where: { userId: id },
          data: {
            refreshToken,
            accessToken,
          },
        });
        token.accessToken = accessToken;
        token.refreshToken = refreshToken;
      }
      if (trigger === "update") {
        return { ...token, session };
      }
      if (user) {
        (user as ExtendedUser).accessToken = token.accessToken as
          | string
          | undefined;
        (user as ExtendedUser).refreshToken = token.refreshToken as
          | string
          | undefined;

        return { ...user };
      }

      // Checking Access Token and Refresh Token

      if (token.accessToken && token.refreshToken) {
        try {
          const currentSession = await db.session.findFirst({
            where: {
              userId: token.id as string,
              accessToken: token.accessToken,
              refreshToken: token.refreshToken,
            },
          });
          if (currentSession) {
            try {
              await jwt.verify(
                token.accessToken as string,
                process.env.JWT_SECRET_KEY as string
              );
            } catch {
              const decoded = (await jwt.verify(
                token.refreshToken as string,
                process.env.JWT_SECRET_KEY as string
              )) as jwt.JwtPayload;
              const { email, id, name, role } = decoded;

              // Generating Access Token

              const newAccessToken = await jwt.sign(
                { email, id, name, role },
                process.env.JWT_SECRET_KEY as string,
                { expiresIn: process.env.JWT_TOKEN_EXPIRED || "7d" }
              );
              const newRefreshToken = await jwt.sign(
                { email, id, name, role },
                process.env.JWT_SECRET_KEY as string,
                { expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRED || "7d" }
              );
              await db.session.update({
                where: { userId: token.id as string },
                data: {
                  accessToken: newAccessToken,
                  refreshToken: newRefreshToken,
                },
              });
              token.accessToken = newAccessToken;
              token.refreshToken = newRefreshToken;
            }
          } else {
            return null;
          }
        } catch {
          return null;
        }
      }

      const exportToken = {
        name: token.name,
        email: token.email,
        role: token.role,
        accessToken: token.accessToken,
        refreshToken: token.refreshToken,
        id: token.id,
        image: token.image,
      };
      return exportToken;
    },
    async session({ session, token }) {
      session.user = {
        ...token,
        id: token.id as string,
        email: token.email ?? "",
        emailVerified: null,
      };
      return {
        ...session,
        expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // Set the expiration date
      };
    },
  },
});
