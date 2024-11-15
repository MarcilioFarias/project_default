/*Copy and Paste code from:
 prisma.io->products->ORM->quickstart->ORM->prismaclient->setup&configuration->
 database connections

 client.ts 
*/
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

export const prisma =
  globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
