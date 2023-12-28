import getCurrentUser from "@/app/actions/getCurrentUser";
import getProject from "@/app/actions/getProject";
import getTechstack from "@/app/actions/getTechstack";
import { NextResponse } from "next/server";


export async function GET(
    request: Request,
    {params}: {params: {projectId:string}}
){

    try {
        
        const currentUser = await getCurrentUser();
        if(!currentUser){
            return new NextResponse("Unauthorized!", {status:400});
        }
        
         if(!params.projectId){
            console.log("projectId is not available.");
            return new NextResponse("projectId not found", {status:404});
         }
         
         

        const project = await getProject(params.projectId);

        

        if(!project){
            return new NextResponse("Project not found.", {status:404});
        }

        const techstacks = await getTechstack(params.projectId);

        if(!techstacks){
            return new NextResponse("techStack not available", {status: 400});
        }

        return NextResponse.json(techstacks);
        
    } catch (error) {
        console.log(error);
        return new NextResponse("Something went wrong", {status:400});
    }

}