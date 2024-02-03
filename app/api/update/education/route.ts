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
            school
        } = body;

        if(!title || !school){
            return new NextResponse("Required all fields", {status:400});
        }


        const educations = await prismadb.education.create({
            data:{
                title,
                school,
                userId:currentUser?.id as string
            }
        });


        
        return NextResponse.json(educations);
        
    } catch (error) {
        console.log(error);
        return new NextResponse("Something went wrong", {status:400});
    }

}