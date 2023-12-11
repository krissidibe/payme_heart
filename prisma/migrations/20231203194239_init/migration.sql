/*
  Warnings:

  - Added the required column `userId` to the `PlanningItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `PlanningItem` ADD COLUMN `archive` BOOLEAN NULL DEFAULT false,
    ADD COLUMN `userId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `PlanningItem` ADD CONSTRAINT `PlanningItem_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
