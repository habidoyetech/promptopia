import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
import { connnectToDB } from "@utils/database";
import User from "@models/user";

const handler = NextAuth({
    providers:  [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    callbacks: {
        async session({session }) {
            const sessionUser = await User.findOne({
                email: session.user.email
            })
    
            session.user.id = sessionUser._id.toString()
    
            return session
    
        },
        async signIn({profile}) {
            try {
                await connnectToDB()
    
                // check if a user already exit
                const userExits = await User.findOne({
                    email: profile.email
                })
    
                //if not, create a new user
                if (!userExits) {
                    await User.create({
                        email: profile.email,
                        username: profile.name.replace(" ", "").toLowerCase(),
                        image: profile.picture
                    })
                }
    
                return true
    
            } catch (error) {
                console.log("Checking if user exist", error.message)
                return false
            }
    
        }

    },
    
})

export {handler as GET, handler as POST}