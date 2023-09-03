import { NextResponse } from "next/server";
import prismadb from "@/libs/prismadb";

export async function POST(
    request: Request
){
    try {

        const body = await request.json();
        const {
            techs,
            projectId,
            userId
        } = body;

        if(!projectId || !userId || techs.length ===0){
            return new NextResponse("Required all Fields", {status:400});
        }

        const techstack = await prismadb.techstack.create({
            data:{
                techs,
                projectId:projectId as string,
                userId:userId as string
            }
        });

        if(!techstack){
            return new NextResponse("Something went wrong!", {status:400});
        }

        return NextResponse.json(techstack);

        
    } catch (error) {
        console.log(error);
        return new NextResponse("Something went wrong", {status:400});
    }

}