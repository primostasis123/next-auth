import NextAuth from "next-auth"
import GitHub from "next-auth/providers/GitHub"
import Google from "next-auth/providers/Google"
export const { handlers, auth } = NextAuth({ providers: [ GitHub ] })