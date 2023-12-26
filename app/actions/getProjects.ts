import prismadb from "@/libs/prismadb";

const getProjects = async() => {

    try {

        const projects = await prismadb.project.findMany({
            orderBy:{
                createdAt:"desc"
            }
        });

        if(!projects || projects == null){
            return [];
        }

        return projects;
        
    } catch (error) {
        console.log(error);
        return [];
    }

}


export default getProjects;