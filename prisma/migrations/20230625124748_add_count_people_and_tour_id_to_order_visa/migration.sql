/*
  Warnings:

  - Added the required column `countPeople` to the `OrderVisa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tourId` to the `OrderVisa` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OrderVisa" ADD COLUMN     "countPeople" INTEGER NOT NULL,
ADD COLUMN     "tourId" TEXT NOT NULL;
