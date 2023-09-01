import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prismadb from "@/libs/prismadb";

export async function POST(
    request: Request
) {

    try {
        
        const body = await request.json();

        const {
            name,
            email,
            password
        } = body;

        if(!email || !password){
            return new NextResponse("Missing email or password", {status:400});
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await prismadb.user.create({
            data:{
                name,
                email,
                password:hashedPassword
            }
        });

        return NextResponse.json(user);

    } catch (error: any) {
            console.log(error);
            return new NextResponse("Internal error from registe.", {status:400});
    }

}