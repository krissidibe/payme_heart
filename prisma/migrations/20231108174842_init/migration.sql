/*
  Warnings:

  - You are about to drop the column `indicatif` on the `Enterprise` table. All the data in the column will be lost.
  - You are about to drop the column `numberPrimary` on the `Enterprise` table. All the data in the column will be lost.
  - You are about to drop the column `numberSecondary` on the `Enterprise` table. All the data in the column will be lost.
  - Added the required column `currency` to the `Enterprise` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numbers` to the `Enterprise` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Enterprise` DROP COLUMN `indicatif`,
    DROP COLUMN `numberPrimary`,
    DROP COLUMN `numberSecondary`,
    ADD COLUMN `currency` VARCHAR(191) NOT NULL,
    ADD COLUMN `numbers` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Project` ADD COLUMN `proformaDate` TIMESTAMP(0) NULL,
    MODIFY `remarque` LONGTEXT NULL;
