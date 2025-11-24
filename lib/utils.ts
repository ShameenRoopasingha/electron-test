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
    const adapter = new PrismaBetterSqlite3({ url: 'file:./prisma/dev.db' })
    prisma = new PrismaClient({ adapter })
  }
  return prisma
}
