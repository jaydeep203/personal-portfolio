import prismadb from "@/libs/prismadb";

const getProject = async(projectId: string) => {
    try {

        if(!projectId) {
            return null;
        }

        const project = await prismadb.project.findUnique({
            where:{
                id: projectId
            }
        });

        if(!project) {
            return null;
        }

        return project;
        
    } catch (error) {
        console.log(error);
        return null;
    }
}

export default getProject;