-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_orderTicketId_fkey";

-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_orderTourId_fkey";

-- AlterTable
ALTER TABLE "Ticket" ALTER COLUMN "orderTourId" DROP NOT NULL,
ALTER COLUMN "orderTicketId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_orderTourId_fkey" FOREIGN KEY ("orderTourId") REFERENCES "OrderTour"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_orderTicketId_fkey" FOREIGN KEY ("orderTicketId") REFERENCES "OrderTicket"("id") ON DELETE SET NULL ON UPDATE CASCADE;
