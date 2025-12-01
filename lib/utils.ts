import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { PrismaClient } from '../src/generated/prisma/client'
import { createBetterSQLiteAdapter } from '@prisma/adapter-better-sqlite3'
import Database from 'better-sqlite3'

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

let prisma: PrismaClient

export function getPrisma(): PrismaClient {
  if (!prisma) {
    const dbUrl = process.env.DATABASE_URL || 'file:./prisma/dev.db'
    console.log('Initializing Prisma with URL:', dbUrl)
    prisma = new PrismaClient({} as any)
    console.log('Prisma client initialized successfully')
  }
  return prisma
}
