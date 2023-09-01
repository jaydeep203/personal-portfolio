import prismadb from "@/libs/prismadb";

const getProjects = async() => {

    try {

        const projects = await prismadb.project.findMany({
            orderBy:{
                createdAt:"desc"
            }
        });

        if(!projects || projects == null){
            return null;
        }

        return projects;
        
    } catch (error) {
        console.log(error);
        return null;
    }

}


export default getProjects;