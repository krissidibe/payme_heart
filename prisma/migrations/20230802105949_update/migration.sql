/*
  Warnings:

  - The values [Enterprise] on the enum `Customers_type` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `Customers` MODIFY `type` ENUM('ENTERPRISE', 'PERSONAL') NOT NULL;
