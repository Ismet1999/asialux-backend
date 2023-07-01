-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "files" TEXT[] DEFAULT ARRAY[]::TEXT[];
