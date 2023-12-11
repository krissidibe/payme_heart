-- AlterTable
ALTER TABLE `FolderUser` ADD COLUMN `birthDate` TIMESTAMP(0) NULL,
    ADD COLUMN `contrat` VARCHAR(191) NULL,
    ADD COLUMN `poste` VARCHAR(191) NULL,
    MODIFY `function` VARCHAR(191) NULL;
