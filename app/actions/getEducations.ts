import prismadb from "@/libs/prismadb";

const getEducations = async() => {

    try {

        const educations = await prismadb.education.findMany({
            orderBy:{
                createdAt:"desc"
            }
        });

        if(!educations || educations == null){
            return [];
        }

        return educations;
        
    } catch (error) {
        console.log(error);
        return [];
    }

}


export default getEducations;