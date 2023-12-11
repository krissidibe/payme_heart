-- AlterTable
ALTER TABLE `Enterprise` ADD COLUMN `codeFinance` VARCHAR(191) NULL,
    ADD COLUMN `lockFinance` BOOLEAN NULL;

-- AlterTable
ALTER TABLE `PlanningItem` ADD COLUMN `isCompleted` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `Transaction` ADD COLUMN `taxe` VARCHAR(191) NULL;
