/*
  Warnings:

  - Made the column `createdAt` on table `Payment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `Subscribe` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Payment` MODIFY `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0);

-- AlterTable
ALTER TABLE `Subscribe` MODIFY `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0);
