/*
  Warnings:

  - You are about to drop the column `price` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `b2bPrice` on the `OrderTicket` table. All the data in the column will be lost.
  - You are about to drop the column `b2cPrice` on the `OrderTicket` table. All the data in the column will be lost.
  - You are about to drop the column `b2bPrice` on the `OrderTour` table. All the data in the column will be lost.
  - You are about to drop the column `b2cPrice` on the `OrderTour` table. All the data in the column will be lost.
  - You are about to drop the column `b2cPrice` on the `OrderVisa` table. All the data in the column will be lost.
  - Added the required column `b2bPrice` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `b2cPrice` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "price",
ADD COLUMN     "b2bPrice" INTEGER NOT NULL,
ADD COLUMN     "b2cPrice" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "OrderTicket" DROP COLUMN "b2bPrice",
DROP COLUMN "b2cPrice";

-- AlterTable
ALTER TABLE "OrderTour" DROP COLUMN "b2bPrice",
DROP COLUMN "b2cPrice";

-- AlterTable
ALTER TABLE "OrderVisa" DROP COLUMN "b2cPrice";

-- CreateTable
CREATE TABLE "Ticket" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "orderTourId" TEXT NOT NULL,
    "ticketId" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "orderTicketId" TEXT NOT NULL,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Visa" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "visaId" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "orderVisaId" TEXT NOT NULL,

    CONSTRAINT "Visa_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Ticket_ticketId_key" ON "Ticket"("ticketId");

-- CreateIndex
CREATE UNIQUE INDEX "Visa_visaId_key" ON "Visa"("visaId");

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_orderTourId_fkey" FOREIGN KEY ("orderTourId") REFERENCES "OrderTour"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_orderTicketId_fkey" FOREIGN KEY ("orderTicketId") REFERENCES "OrderTicket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Visa" ADD CONSTRAINT "Visa_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Visa" ADD CONSTRAINT "Visa_orderVisaId_fkey" FOREIGN KEY ("orderVisaId") REFERENCES "OrderVisa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
