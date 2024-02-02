import { NextResponse } from "next/server";
import prismadb from "@/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";



export async function POST(
    request: Request
){

    try {

        const currentUser = await getCurrentUser();
        if(!currentUser){
            return new NextResponse("Unauthorized!", {status:400});
        }

        const body = await request.json();
        const {
            title,
            description,
            verifyLink,
            icon
        } = body;

        if(!title || !description || !verifyLink){
            return new NextResponse("Required all fields", {status:400});
        }


        const certificate = await prismadb.certificate.create({
            data:{
                title,
                description,
                verifyLink,
                icon,
                userId:currentUser?.id as string
            }
        });


        
        return NextResponse.json(certificate);
        
    } catch (error) {
        console.log(error);
        return new NextResponse("Something went wrong", {status:400});
    }

}