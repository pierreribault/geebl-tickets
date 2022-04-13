/*
  Warnings:

  - Made the column `slotId` on table `Ticket` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Ticket" ALTER COLUMN "slotId" SET NOT NULL;
