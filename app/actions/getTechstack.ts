import prismadb from "@/libs/prismadb";


const getTechstack = async(
    projectId:string | undefined
) => {

    try {
        
        if(!projectId || typeof projectId !== "string"){
            return null;
        }

        const techstack = await prismadb.techstack.findFirst({
            where:{
                projectId:projectId as string
            }
        });

        if(!techstack){
            return null;
        }

        return techstack;

    } catch (error) {
        console.log(error);
        return null;
    }
    

}

export default getTechstack;