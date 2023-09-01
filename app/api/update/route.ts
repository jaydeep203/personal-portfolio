import prismadb from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(
    request:Request
) {
    const body = await request.json();
    const {
        name,
        email,
        bio,
        avatar
    } = body;

    try{

        
        
        const updatedUser = await prismadb.user.update({
            where:{
                email: email
            },
            data:{
                name,
                email,
                bio,
                avatar
            }
        });

        return NextResponse.json(updatedUser);
        
    } catch(error){
        console.log(error);
        return new NextResponse("Error from update route", {status: 400});
    } 



}