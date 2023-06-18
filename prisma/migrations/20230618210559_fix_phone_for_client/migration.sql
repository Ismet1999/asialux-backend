/*
  Warnings:

  - You are about to drop the column `phoneNumbers` on the `Client` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Client" DROP COLUMN "phoneNumbers",
ADD COLUMN     "phone" TEXT[];
