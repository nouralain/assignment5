-- AlterTable
ALTER TABLE "posts" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true;

-- CreateIndex
CREATE INDEX "posts_isActive_idx" ON "posts"("isActive");
