import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { PrismaClient } from '../src/generated/prisma/client'
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3'

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

let prisma: PrismaClient

export function getPrisma(): PrismaClient {
  if (!prisma) {
    const dbUrl = process.env.DATABASE_URL || 'file:./prisma/dev.db'
    console.log('Initializing Prisma with URL:', dbUrl)
    const adapter = new PrismaBetterSqlite3({ url: dbUrl })
    prisma = new PrismaClient({ adapter })
    console.log('Prisma client initialized successfully')
  }
  return prisma
}
