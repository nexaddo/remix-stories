/*
  Warnings:

  - You are about to alter the column `count` on the `VisitorCount` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "VisitorCount" ALTER COLUMN "count" SET DATA TYPE INTEGER;
