-- AlterTable
ALTER TABLE `CodeOTP` MODIFY `code` VARCHAR(191) NOT NULL,
    MODIFY `isValid` BOOLEAN NOT NULL DEFAULT true,
    MODIFY `createdAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0);
