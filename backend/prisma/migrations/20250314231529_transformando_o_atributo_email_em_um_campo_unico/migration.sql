/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Made the column `userId` on table `messages` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "messages" DROP CONSTRAINT "messages_userId_fkey";

-- AlterTable
ALTER TABLE "messages" ALTER COLUMN "userId" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
