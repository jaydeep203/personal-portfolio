import { NextResponse } from "next/server";
import prismadb from "@/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";


export async function POST(
    request: Request
){

    try {

        const currentUser = await getCurrentUser();
        const body = await request.json();
        const {
            pname,
            description,
            link,
            image
        } = body;

        if(!pname || !description){
            return new NextResponse("Required all fields", {status:400});
        }

        const user = await prismadb.project.create({
            data:{
                pname,
                description,
                link,
                image,
                userId:currentUser?.id as string
            }
        });
        
        return NextResponse.json(user);
        
    } catch (error) {
        console.log(error);
        return new NextResponse("Something went wrong", {status:400});
    }

}