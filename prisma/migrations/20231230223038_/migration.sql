/*
  Warnings:

  - You are about to drop the column `invoiceType` on the `Invoice` table. All the data in the column will be lost.
  - You are about to drop the column `invoicePreview` on the `InvoiceList` table. All the data in the column will be lost.
  - You are about to drop the column `invoiceType` on the `InvoiceList` table. All the data in the column will be lost.
  - Added the required column `name` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Made the column `invoiceFileName` on table `Invoice` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `categoryId` to the `InvoiceList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `InvoiceList` table without a default value. This is not possible if the table is not empty.
  - Made the column `invoiceFileName` on table `InvoiceList` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Invoice` DROP COLUMN `invoiceType`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    MODIFY `invoiceFileName` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `InvoiceList` DROP COLUMN `invoicePreview`,
    DROP COLUMN `invoiceType`,
    ADD COLUMN `categoryId` VARCHAR(191) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    MODIFY `invoiceFileName` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Category` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `deletedAt` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `InvoiceList` ADD CONSTRAINT `InvoiceList_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
