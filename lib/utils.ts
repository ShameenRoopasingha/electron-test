import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { PrismaClient } from "../src/generated/prisma/client"

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}


let prisma: PrismaClient

export function getPrisma():PrismaClient {
  if (!prisma) {
    prisma = new PrismaClient()
  }
  return prisma
}
