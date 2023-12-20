-- DropForeignKey
ALTER TABLE `Account` DROP FOREIGN KEY `Account_userId_fkey`;

-- DropForeignKey
ALTER TABLE `Customers` DROP FOREIGN KEY `Customers_userId_fkey`;

-- DropForeignKey
ALTER TABLE `Enterprise` DROP FOREIGN KEY `Enterprise_userId_fkey`;

-- DropForeignKey
ALTER TABLE `Folder` DROP FOREIGN KEY `Folder_userId_fkey`;

-- DropForeignKey
ALTER TABLE `FolderUser` DROP FOREIGN KEY `FolderUser_folderId_fkey`;

-- DropForeignKey
ALTER TABLE `Invoice` DROP FOREIGN KEY `Invoice_userId_fkey`;

-- DropForeignKey
ALTER TABLE `Payment` DROP FOREIGN KEY `Payment_userId_fkey`;

-- DropForeignKey
ALTER TABLE `Planning` DROP FOREIGN KEY `Planning_userId_fkey`;

-- DropForeignKey
ALTER TABLE `PlanningItem` DROP FOREIGN KEY `PlanningItem_planningId_fkey`;

-- DropForeignKey
ALTER TABLE `PlanningItem` DROP FOREIGN KEY `PlanningItem_userId_fkey`;

-- DropForeignKey
ALTER TABLE `Project` DROP FOREIGN KEY `Project_customerId_fkey`;

-- DropForeignKey
ALTER TABLE `Project` DROP FOREIGN KEY `Project_userId_fkey`;

-- DropForeignKey
ALTER TABLE `Session` DROP FOREIGN KEY `Session_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `Subscribe` DROP FOREIGN KEY `Subscribe_paymentId_fkey`;

-- DropForeignKey
ALTER TABLE `Transaction` DROP FOREIGN KEY `Transaction_userId_fkey`;

-- AlterTable
ALTER TABLE `Invoice` ADD COLUMN `invoiceType` VARCHAR(191) NULL DEFAULT '';

-- AlterTable
ALTER TABLE `InvoiceList` ADD COLUMN `invoicePreview` VARCHAR(191) NULL DEFAULT '',
    ADD COLUMN `invoiceType` VARCHAR(191) NULL DEFAULT '';

-- AlterTable
ALTER TABLE `User` ADD COLUMN `codePasswordInit` VARCHAR(191) NULL,
    ADD COLUMN `datePasswordInit` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0);

-- CreateTable
CREATE TABLE `CodeOTP` (
    `id` VARCHAR(191) NOT NULL,
    `code` INTEGER NOT NULL,
    `isValid` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` TIMESTAMP(0) NULL,
    `updatedAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `userId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `CodeOTP_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Account` ADD CONSTRAINT `Account_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Session` ADD CONSTRAINT `Session_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Enterprise` ADD CONSTRAINT `Enterprise_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Customers` ADD CONSTRAINT `Customers_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Project` ADD CONSTRAINT `Project_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customers`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Project` ADD CONSTRAINT `Project_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transaction` ADD CONSTRAINT `Transaction_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Folder` ADD CONSTRAINT `Folder_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FolderUser` ADD CONSTRAINT `FolderUser_folderId_fkey` FOREIGN KEY (`folderId`) REFERENCES `Folder`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Planning` ADD CONSTRAINT `Planning_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PlanningItem` ADD CONSTRAINT `PlanningItem_planningId_fkey` FOREIGN KEY (`planningId`) REFERENCES `Planning`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PlanningItem` ADD CONSTRAINT `PlanningItem_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Payment` ADD CONSTRAINT `Payment_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Subscribe` ADD CONSTRAINT `Subscribe_paymentId_fkey` FOREIGN KEY (`paymentId`) REFERENCES `Payment`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Invoice` ADD CONSTRAINT `Invoice_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CodeOTP` ADD CONSTRAINT `CodeOTP_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
