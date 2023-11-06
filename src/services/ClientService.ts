import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type ClientType = {
    id?: string,
    name: string,
    corporateReason: string,
    email: string,
    password: string, 
    document: string,
    postcode: string,
    address: string,
    number: string,
    phone: string,
}

export const ClientService = {
    index: async () => {
        return await prisma.client.findMany();
    },
    search: async (document: string) => {
        return await prisma.client.findFirst({ where: { document } });
    },
    store: async (data: ClientType) => {
        return await prisma.client.create({
            data: data
         })
    },
    update: async (id: string, data:ClientType) => {
        return await prisma.client.update({
           data: data,
           where: { id } 
        })
    },
    destroy: async (id: string) => {
        return await prisma.client.delete({ where: { id }});
    }
}