import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import TwitterProvider from 'next-auth/providers/twitter';
import DiscordProvider from 'next-auth/providers/discord';

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),

    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID || '',
      clientSecret: process.env.DISCORD_CLIENT_SECRET || '',
    }),
  ],
  pages: {
    signIn: '/auth/signin',
    // signOut: '/auth/signout',
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: '/auth/new-user', // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  theme: {
    colorScheme: 'auto', // "auto" | "dark" | "light"
    brandColor: '', // Hex color code
    logo: 'https://www.marabox.com/_next/static/images/darkLogo-6215a2a442393d29a66ff36733a77d6c.svg', // Absolute URL to image
    buttonText: '#00c8b6', // Hex color code
  },
  callbacks: {
    // async signIn({ user, account, profile, email, credentials }) {
    //   return true;
    // },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, user, token }) {
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
  },
};
export default NextAuth(authOptions);
