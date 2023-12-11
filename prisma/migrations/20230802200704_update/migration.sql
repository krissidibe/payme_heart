-- AlterTable
ALTER TABLE `Enterprise` MODIFY `inTrash` BOOLEAN NULL DEFAULT false;

-- AlterTable
ALTER TABLE `Project` MODIFY `inTrash` BOOLEAN NULL DEFAULT false;

-- AlterTable
ALTER TABLE `User` MODIFY `inTrash` BOOLEAN NULL DEFAULT false;
