/*
  Warnings:

  - Added the required column `poste` to the `Customers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Customers` ADD COLUMN `poste` VARCHAR(191) NOT NULL,
    MODIFY `inTrash` BOOLEAN NULL DEFAULT false;
