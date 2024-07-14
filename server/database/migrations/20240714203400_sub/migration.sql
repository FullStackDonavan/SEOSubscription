-- DropIndex
DROP INDEX `Answer_text_idx` ON `answer`;

-- DropIndex
DROP INDEX `Question_title_description_idx` ON `question`;

-- CreateTable
CREATE TABLE `InsuranceSales` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(191) NULL,
    `lastName` VARCHAR(191) NULL,
    `sellerId` INTEGER NOT NULL,
    `carrier` VARCHAR(191) NOT NULL,
    `product` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `policyYear` INTEGER NOT NULL,
    `price` DECIMAL(65, 30) NOT NULL,
    `paid` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `InsuranceSales` ADD CONSTRAINT `InsuranceSales_sellerId_fkey` FOREIGN KEY (`sellerId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
