/*
  Warnings:

  - You are about to drop the column `projectId` on the `Transaction` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Transaction` DROP FOREIGN KEY `Transaction_projectId_fkey`;

-- AlterTable
ALTER TABLE `Transaction` DROP COLUMN `projectId`;
