/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Enterprise` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Enterprise_userId_key` ON `Enterprise`(`userId`);
