import getCurrentUser from "@/app/actions/getCurrentUser";
import getProject from "@/app/actions/getProject";
import { NextResponse } from "next/server";
import prismadb from "@/libs/prismadb";

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

        return NextResponse.json(project);
        
    } catch (error) {
        console.log(error);
        return new NextResponse("Something went wrong", {status:400});
    }

}

export async function PATCH(
    request: Request,
    {params}: {params: {projectId:string}}
){

    try {
        
        const body = await request.json();
         const {
             pname,
             description,
             link,
             repositoryLink,
             image,
             techs,
             techId
         } = body;

         if(!techId){
            return new NextResponse("Required TechId", {status:400});
         }

         if(!pname || !description || techs.length === 0 ){
            return new NextResponse("Required all fields", {status:400});
        }

        const currentUser = await getCurrentUser();
        if(!currentUser){
            return new NextResponse("Unauthorized!", {status:400});
        }
        
         if(!params.projectId){
            console.log("projectId is not available.");
            return new NextResponse("projectId not found", {status:404});
         }
         
         
        const project = await prismadb.project.update({
            where:{
                id:params.projectId
            },
            data:{
                pname,
                description,
                link,
                repositoryLink,
                image
            }
        });

        if(!project){
            return new NextResponse("Project not Updated.", {status:400});
        }  
        
        const techstack = await prismadb.techstack.update({
            where:{
                id:techId,
                projectId: params.projectId
            },
            data:{
                techs
            }
        });

        if(!techstack){
            return new NextResponse("techstack not Updated.", {status:400});
        }  

        return NextResponse.json(project);
        
    } catch (error) {
        console.log(error);
        return new NextResponse("PROJECT_PATCH", {status:400});
    }

}