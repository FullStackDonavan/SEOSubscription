/*
  Warnings:

  - Made the column `startDate` on table `subscription` required. This step will fail if there are existing NULL values in that column.
  - Made the column `lastEventDate` on table `subscription` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `subscription` MODIFY `startDate` INTEGER NOT NULL,
    MODIFY `lastEventDate` INTEGER NOT NULL;
