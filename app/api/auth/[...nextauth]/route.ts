import NextAuth from "next-auth"
import GooglePovider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GooglePovider({
      clientId: process.env.GOOGLE_CLIENT_ID !,   
      clientSecret: process.env.GOOGLE_CLIENT_SECRET !,
    }),
    // ...add more providers here
  ],
}

const handler=NextAuth(authOptions);
export {handler as GET,handler as POST};