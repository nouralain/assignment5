-- CreateIndex
CREATE INDEX "comments_post_id_user_id_idx" ON "comments"("post_id", "user_id");
