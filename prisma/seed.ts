import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function importData() {
  return [
    {
      where: {
        id: "6edb0eb7-e61e-42e3-aec1-be5c62f530ce"
      },
      update: {},
      create: {
        userId: "a18c80c4-acc4-4b24-a62e-aee7d44d47ef",
        eventId: "e9fbcaf8-0126-4e0e-bb80-7c898c31e3b5",
        companyId: "a42ac85b-220f-4fc4-b3b6-ded00b58f9aa",
        slotId: "",
        id: "6edb0eb7-e61e-42e3-aec1-be5c62f530ce"
      }
    },
    {
      where: {
        id: "3f072831-a2e5-4429-a20b-94663816457b"
      },
      update: {},
      create: {
        userId: "22824b91-cd56-4ddf-9746-0220a0999dea",
        eventId: "e9fbcaf8-0126-4e0e-bb80-7c898c31e3b5",
        companyId: "a42ac85b-220f-4fc4-b3b6-ded00b58f9aa",
        slotId: "",
        id: "3f072831-a2e5-4429-a20b-94663816457b"
      }
    },
    {
      where: {
        id: "187e332e-bdcf-45b7-93d3-8dae8a3bc2d8"
      },
      update: {},
      create: {
        userId: "0772131d-6f48-4ce3-befb-a2e80d5f16c5",
        eventId: "e9fbcaf8-0126-4e0e-bb80-7c898c31e3b5",
        companyId: "a42ac85b-220f-4fc4-b3b6-ded00b58f9aa",
        slotId: "",
        id: "187e332e-bdcf-45b7-93d3-8dae8a3bc2d8"
      }
    },
    {
      where: {
        id: "93c15fbf-5688-4049-b57b-e1d4e6b9ae89"
      },
      update: {},
      create: {
        userId: "234d3af8-d29d-4942-89d7-b2b5a5a9fa1b",
        eventId: "da95735e-b42c-4ec8-8b40-31883ac7ca0d",
        companyId: "a42ac85b-220f-4fc4-b3b6-ded00b58f9aa",
        slotId: "",
        id: "93c15fbf-5688-4049-b57b-e1d4e6b9ae89"
      }
    },
    {
      where: {
        id: "77406096-9e12-4967-b0c4-b2f786069a75"
      },
      update: {},
      create: {
        userId: "2dd01a48-01ba-4e14-a036-1731381bfa5e",
        eventId: "da95735e-b42c-4ec8-8b40-31883ac7ca0d",
        companyId: "a42ac85b-220f-4fc4-b3b6-ded00b58f9aa",
        slotId: "",
        id: "77406096-9e12-4967-b0c4-b2f786069a75"
      }
    },
    {
      where: {
        id: "ade94eee-3afc-452c-acba-12d33e0d47ef"
      },
      update: {},
      create: {
        userId: "c91ec54e-97d1-411c-920c-e99f0ce2bd4f",
        eventId: "57dd39f2-d87d-4964-8316-249ce6ffc678",
        companyId: "278fd5c8-7d41-45be-9d97-4dcf34236eea",
        slotId: "",
        id: "ade94eee-3afc-452c-acba-12d33e0d47ef"
      }
    },
    {
      where: {
        id: "aad3a0c5-8161-4d1b-b11d-0c635993f27b"
      },
      update: {},
      create: {
        userId: "a42ac85b-220f-4fc4-b3b6-ded00b58f9aa",
        eventId: "57dd39f2-d87d-4964-8316-249ce6ffc678",
        companyId: "278fd5c8-7d41-45be-9d97-4dcf34236eea",
        slotId: "",
        id: "aad3a0c5-8161-4d1b-b11d-0c635993f27b"
      }
    },
    {
      where: {
        id: "ca7414c0-5692-4ceb-876e-a584d120f58a"
      },
      update: {},
      create: {
        userId: "cdd7d271-797b-44dd-9a95-b50eabdf4141",
        eventId: "57dd39f2-d87d-4964-8316-249ce6ffc678",
        companyId: "278fd5c8-7d41-45be-9d97-4dcf34236eea",
        slotId: "",
        id: "ca7414c0-5692-4ceb-876e-a584d120f58a"
      }
    }
  ]
}

async function main() {
  const datas = await importData();

  datas.forEach(async ticket => await prisma.ticket.upsert(ticket));
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
