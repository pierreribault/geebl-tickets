/*
  Warnings:

  - You are about to drop the column `data` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `eventSlug` on the `Ticket` table. All the data in the column will be lost.
  - Added the required column `eventId` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "data",
DROP COLUMN "eventSlug",
ADD COLUMN     "eventId" TEXT NOT NULL;
