-- CreateTable
CREATE TABLE "VintedRequest" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "requestName" TEXT NOT NULL,
    "requestObject" TEXT NOT NULL,
    "discordId" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true
);

-- CreateTable
CREATE TABLE "checkList" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "discordId" TEXT NOT NULL,
    "productId" INTEGER NOT NULL
);
