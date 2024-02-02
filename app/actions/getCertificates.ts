import prismadb from "@/libs/prismadb";

const getCertificates = async() => {

    try {

        const certificates = await prismadb.certificate.findMany({
            orderBy:{
                createdAt:"desc"
            }
        });

        if(!certificates || certificates == null){
            return [];
        }

        return certificates;
        
    } catch (error) {
        console.log(error);
        return [];
    }

}


export default getCertificates;