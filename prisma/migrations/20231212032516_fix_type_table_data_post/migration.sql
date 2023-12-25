/*
  Warnings:

  - The `archive` column on the `DataPost` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "DataPost" DROP COLUMN "archive",
ADD COLUMN     "archive" BOOLEAN NOT NULL DEFAULT true;
