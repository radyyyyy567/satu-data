/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `DataPost` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `archive` to the `DataPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `DataPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `DataPost` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DataPost" ADD COLUMN     "archive" TEXT NOT NULL,
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "DataPost_title_key" ON "DataPost"("title");
