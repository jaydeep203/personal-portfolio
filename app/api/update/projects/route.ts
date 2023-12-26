import { NextResponse } from "next/server";
import prismadb from "@/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getProject from "@/app/actions/getProject";





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
            pname,
            description,
            link,
            image,
            techs
        } = body;

        if(!pname || !description || techs.length === 0){
            return new NextResponse("Required all fields", {status:400});
        }


        const project = await prismadb.project.create({
            data:{
                pname,
                description,
                link,
                image,
                userId:currentUser?.id as string
            }
        });

        const projects = await prismadb.techstack.create({
            data:{
                techs:techs,
                userId:currentUser?.id as string,
                projectId:project.id as string
            }
        });

        
        return NextResponse.json(projects);
        
    } catch (error) {
        console.log(error);
        return new NextResponse("Something went wrong", {status:400});
    }

}