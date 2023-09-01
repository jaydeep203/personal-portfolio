import prismadb from "@/libs/prismadb";

const getUser = async() => {

    try {

        const user = await prismadb.user.findFirst();

        if(!user) {
            return null;
        }

        return user;
        
    } catch (error) {
        console.log(error);
        throw new Error("Something went wrong")
    }

    

}

export default getUser;