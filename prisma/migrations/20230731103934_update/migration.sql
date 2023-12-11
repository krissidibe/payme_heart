-- AlterTable
ALTER TABLE `Enterprise` ADD COLUMN `createdAt` TIMESTAMP(0) NULL,
    ADD COLUMN `deletedAt` TIMESTAMP(0) NULL,
    ADD COLUMN `inTrash` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `updatedAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0);

-- AlterTable
ALTER TABLE `User` ADD COLUMN `inTrash` BOOLEAN NOT NULL DEFAULT false,
    ALTER COLUMN `createdAt` DROP DEFAULT;

-- CreateTable
CREATE TABLE `Customers` (
    `id` VARCHAR(191) NOT NULL,
    `externalContact` VARCHAR(191) NOT NULL,
    `externalEmail` VARCHAR(191) NOT NULL,
    `externalName` VARCHAR(191) NOT NULL,
    `activity` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL DEFAULT '',
    `image` VARCHAR(191) NULL DEFAULT '',
    `name` VARCHAR(191) NOT NULL,
    `type` ENUM('Enterprise', 'PERSONAL') NOT NULL,
    `inTrash` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` TIMESTAMP(0) NULL,
    `updatedAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `deletedAt` TIMESTAMP(0) NULL,
    `userId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Project` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `type` ENUM('INPROGRESS', 'ISVALIDATE', 'ISFINISH') NOT NULL,
    `invoiceNumber` INTEGER NOT NULL,
    `invoiceDate` TIMESTAMP(0) NULL,
    `discountItemTable` LONGTEXT NULL,
    `table` LONGTEXT NULL,
    `amountTotal` VARCHAR(191) NULL,
    `tva` INTEGER NULL,
    `inTrash` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` TIMESTAMP(0) NULL,
    `updatedAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `deletedAt` TIMESTAMP(0) NULL,
    `customerId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Customers` ADD CONSTRAINT `Customers_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Project` ADD CONSTRAINT `Project_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
