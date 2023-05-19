/*
  Warnings:

  - You are about to alter the column `productId` on the `checkList` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_checkList" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "discordId" TEXT NOT NULL,
    "productId" BIGINT NOT NULL
);
INSERT INTO "new_checkList" ("discordId", "id", "productId") SELECT "discordId", "id", "productId" FROM "checkList";
DROP TABLE "checkList";
ALTER TABLE "new_checkList" RENAME TO "checkList";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
