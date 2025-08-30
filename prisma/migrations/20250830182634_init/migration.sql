/*
  Warnings:

  - You are about to drop the column `role` on the `PromoUser` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `PromoUser` DROP COLUMN `role`;

-- CreateTable
CREATE TABLE `RefUser` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `referentielId` INTEGER NOT NULL,

    UNIQUE INDEX `RefUser_userId_referentielId_key`(`userId`, `referentielId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `RefUser` ADD CONSTRAINT `RefUser_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RefUser` ADD CONSTRAINT `RefUser_referentielId_fkey` FOREIGN KEY (`referentielId`) REFERENCES `Referentiel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
