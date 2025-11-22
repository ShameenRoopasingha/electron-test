import { getPrisma } from "lib/utils";


const prisma = getPrisma()


export const BaseBusinessDetailsInput = {
  name: true,
  registrationNumber: true,
  address: true,
    email: true,
    contactPhone: true,
    taxId: true,
    registrationNumber: true,

}


  name               String
   String?
  address            String
  email              String?
  phone              String?
  logoUrl            String?