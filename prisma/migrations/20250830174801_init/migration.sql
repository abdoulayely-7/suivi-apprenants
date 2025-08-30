/*
  Warnings:

  - You are about to drop the column `competenceId` on the `Niveau` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Niveau` table. All the data in the column will be lost.
  - You are about to drop the column `level` on the `Niveau` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Promo` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `profileId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PromoToUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `name` to the `Niveau` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profilId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Niveau` DROP FOREIGN KEY `Niveau_competenceId_fkey`;

-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_profileId_fkey`;

-- DropForeignKey
ALTER TABLE `_PromoToUser` DROP FOREIGN KEY `_PromoToUser_A_fkey`;

-- DropForeignKey
ALTER TABLE `_PromoToUser` DROP FOREIGN KEY `_PromoToUser_B_fkey`;

-- DropIndex
DROP INDEX `Niveau_competenceId_fkey` ON `Niveau`;

-- DropIndex
DROP INDEX `User_profileId_fkey` ON `User`;

-- AlterTable
ALTER TABLE `Niveau` DROP COLUMN `competenceId`,
    DROP COLUMN `description`,
    DROP COLUMN `level`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Promo` DROP COLUMN `createdAt`;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `createdAt`,
    DROP COLUMN `profileId`,
    ADD COLUMN `profilId` INTEGER NOT NULL,
    ADD COLUMN `profilSortieId` INTEGER NULL;

-- DropTable
DROP TABLE `Profile`;

-- DropTable
DROP TABLE `_PromoToUser`;

-- CreateTable
CREATE TABLE `Profil` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProfilSortie` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Referentiel` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tag` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Tag_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Brief` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BriefTag` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `briefId` INTEGER NOT NULL,
    `tagId` INTEGER NOT NULL,

    UNIQUE INDEX `BriefTag_briefId_tagId_key`(`briefId`, `tagId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PromoRef` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `promoId` INTEGER NOT NULL,
    `referentielId` INTEGER NOT NULL,

    UNIQUE INDEX `PromoRef_promoId_referentielId_key`(`promoId`, `referentielId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RefCompetence` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `referentielId` INTEGER NOT NULL,
    `competenceId` INTEGER NOT NULL,

    UNIQUE INDEX `RefCompetence_referentielId_competenceId_key`(`referentielId`, `competenceId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserCompetence` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `competenceId` INTEGER NOT NULL,
    `niveauId` INTEGER NOT NULL,

    UNIQUE INDEX `UserCompetence_userId_competenceId_key`(`userId`, `competenceId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PromoUser` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `promoId` INTEGER NOT NULL,
    `role` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `PromoUser_userId_promoId_key`(`userId`, `promoId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_profilId_fkey` FOREIGN KEY (`profilId`) REFERENCES `Profil`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_profilSortieId_fkey` FOREIGN KEY (`profilSortieId`) REFERENCES `ProfilSortie`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BriefTag` ADD CONSTRAINT `BriefTag_briefId_fkey` FOREIGN KEY (`briefId`) REFERENCES `Brief`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BriefTag` ADD CONSTRAINT `BriefTag_tagId_fkey` FOREIGN KEY (`tagId`) REFERENCES `Tag`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PromoRef` ADD CONSTRAINT `PromoRef_promoId_fkey` FOREIGN KEY (`promoId`) REFERENCES `Promo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PromoRef` ADD CONSTRAINT `PromoRef_referentielId_fkey` FOREIGN KEY (`referentielId`) REFERENCES `Referentiel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RefCompetence` ADD CONSTRAINT `RefCompetence_referentielId_fkey` FOREIGN KEY (`referentielId`) REFERENCES `Referentiel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RefCompetence` ADD CONSTRAINT `RefCompetence_competenceId_fkey` FOREIGN KEY (`competenceId`) REFERENCES `Competence`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserCompetence` ADD CONSTRAINT `UserCompetence_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserCompetence` ADD CONSTRAINT `UserCompetence_competenceId_fkey` FOREIGN KEY (`competenceId`) REFERENCES `Competence`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserCompetence` ADD CONSTRAINT `UserCompetence_niveauId_fkey` FOREIGN KEY (`niveauId`) REFERENCES `Niveau`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PromoUser` ADD CONSTRAINT `PromoUser_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PromoUser` ADD CONSTRAINT `PromoUser_promoId_fkey` FOREIGN KEY (`promoId`) REFERENCES `Promo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
