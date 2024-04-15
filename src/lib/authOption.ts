import NextAuth, { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import { randomBytes, randomUUID } from "crypto"
 

const prisma = new PrismaClient()
export const authOptions:AuthOptions = NextAuth({
  secret:process.env.NEXT_AUTH_SECRET,
pages:{
  signIn:"/login"
},
session:{
  strategy:"jwt",
  maxAge: 3 * 24 * 60 * 60 * 1000 * 10000,
  generateSessionToken: () => {
    return randomUUID?.() ?? randomBytes(32).toString("hex")
  }
},

  providers:[

    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
       
      if(!credentials?.email || !credentials.password ){
        return null

      }
      const existingUser = await prisma.user.findUnique({
        where: {
          email: credentials?.email,
        },
      })

     
      
      if (!existingUser) {
        return null;
      }
        // Return null if user data could not be retrieved
        return {
          id: `${existingUser.id}`,
          name: existingUser.name,
          email: existingUser.email,
        }
      }
    })
   
  ],
  adapter: PrismaAdapter(prisma),
  callbacks:{
    async jwt({ token, user, account, profile, isNewUser }) {
       if(user) {
        return {
          ...token,
           id: user.id,
           name: user.name,
           email: user.email,
        }
      }
      return token
    },
    async session({ session, user, token }) {
      if (user) {
        return {
          ...session,
          user: {
            ...session.user,
            id: token.id,
            name: token.name,
          },
        }
      }
      return session
    },
  },
 
  
})
