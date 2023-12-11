-- DropForeignKey
ALTER TABLE `Customers` DROP FOREIGN KEY `Customers_userId_fkey`;

-- DropForeignKey
ALTER TABLE `Enterprise` DROP FOREIGN KEY `Enterprise_userId_fkey`;

-- DropForeignKey
ALTER TABLE `Project` DROP FOREIGN KEY `Project_customerId_fkey`;

-- DropForeignKey
ALTER TABLE `Project` DROP FOREIGN KEY `Project_userId_fkey`;

-- AlterTable
ALTER TABLE `Project` ADD COLUMN `discount` VARCHAR(191) NULL DEFAULT '0',
    ADD COLUMN `invoiceType` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `modalite` VARCHAR(191) NULL DEFAULT '0',
    ADD COLUMN `remarque` VARCHAR(191) NULL DEFAULT '0',
    MODIFY `amountTotal` VARCHAR(191) NULL DEFAULT '0',
    MODIFY `tva` VARCHAR(191) NULL DEFAULT '0';

-- AddForeignKey
ALTER TABLE `Enterprise` ADD CONSTRAINT `Enterprise_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Customers` ADD CONSTRAINT `Customers_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Project` ADD CONSTRAINT `Project_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customers`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Project` ADD CONSTRAINT `Project_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
