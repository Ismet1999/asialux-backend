/*
  Warnings:

  - A unique constraint covering the columns `[mainPhone]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "User_mainPhone_key" ON "User"("mainPhone");
