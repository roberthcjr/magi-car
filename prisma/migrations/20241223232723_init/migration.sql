-- CreateEnum
CREATE TYPE "Status" AS ENUM ('AVAILABLE', 'NEGOCIATING', 'SOLD');

-- CreateTable
CREATE TABLE "Cars" (
    "id" SERIAL NOT NULL,
    "model" TEXT NOT NULL,
    "brand" TEXT NOT NULL,

    CONSTRAINT "Cars_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cars_info" (
    "id" SERIAL NOT NULL,
    "color" TEXT,
    "release_year" TIMESTAMP(3) NOT NULL,
    "used_meters" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'AVAILABLE',
    "carId" INTEGER NOT NULL,

    CONSTRAINT "Cars_info_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cars_info_carId_key" ON "Cars_info"("carId");

-- AddForeignKey
ALTER TABLE "Cars_info" ADD CONSTRAINT "Cars_info_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Cars"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
