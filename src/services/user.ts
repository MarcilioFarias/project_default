import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { prisma } from "../lib/prisma";

type CreateUserProps = {
    name: string,
    email: string
}

export const createUser = async ({name, email}: CreateUserProps) => {
    try {
        const newUser = await prisma.user.create({
            data: {
                name, email
            }
        });
        return newUser;
    } catch(error){
        // if(error instanceof PrismaClientKnownRequestError){
        //     if(error.code === 'P2002'){
        //         console.log(error);
        //     }
        // } else {
        //     return false;
        // }
    }
   
}