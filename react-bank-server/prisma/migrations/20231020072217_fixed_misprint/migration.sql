/*
  Warnings:

  - You are about to drop the `trascations` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "trascations" DROP CONSTRAINT "trascations_maker_id_fkey";

-- DropTable
DROP TABLE "trascations";

-- CreateTable
CREATE TABLE "trasactions" (
    "id" SERIAL NOT NULL,
    "from" TEXT NOT NULL,
    "to" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "maker_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "trasactions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "trasactions" ADD CONSTRAINT "trasactions_maker_id_fkey" FOREIGN KEY ("maker_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
