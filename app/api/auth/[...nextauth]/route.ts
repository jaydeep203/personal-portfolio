import { PrismaAdapter } from "@next-auth/prisma-adapter";
import bcrypt from "bcrypt";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

import prismadb from "@/libs/prismadb";

export const authOption: AuthOptions = {
    adapter: PrismaAdapter(prismadb),
    providers:[
        CredentialProvider({
            name: "credentials",
            credentials: {
                email: { label:"email", type: "text" },
                password: { label:"password", type:"password"}
            },
            async authorize(credentials){
                if(!credentials?.email || !credentials?.password){
                    throw new Error("Please Enter all fields");
                }

                const user = await prismadb.user.findUnique({
                    where:{
                        email: credentials.email
                    }
                });

                if(!user || !user?.password){
                    throw new Error("Invalid credentials.");
                }

                const isCorrectPassword = await bcrypt.compare(
                    credentials.password,
                    user.password
                );

                if(!isCorrectPassword){
                    throw new Error("Invalid credentials");
                }

                return user;
            }
        })
    ],
    debug: process.env.NODE_ENV === "development",
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET
    
}

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };