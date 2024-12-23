/*
  Warnings:

  - You are about to alter the column `model` on the `Cars` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to alter the column `brand` on the `Cars` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to alter the column `color` on the `Cars_info` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.

*/
-- AlterTable
ALTER TABLE "Cars" ALTER COLUMN "model" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "brand" SET DATA TYPE VARCHAR(50);

-- AlterTable
ALTER TABLE "Cars_info" ALTER COLUMN "color" SET DATA TYPE VARCHAR(50);
