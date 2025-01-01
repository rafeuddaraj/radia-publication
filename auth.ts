import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
export const {
  auth,
  handlers: { GET, POST },
} = NextAuth({
    session:{
        strategy:"jwt"
    },
  providers: [CredentialProvider({
    credentials:{
        email: { label: "Email", type: "email" },
        password: {  label: "Password", type: "password" }
    },
    async authorize(credentials){
        const {email,password} = credentials
        return await {user: {email,password}}
    }
  }), GoogleProvider({})],
});
