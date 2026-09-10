import { Router } from "express";
import { authenticate } from '../../common/middlewares/auth.middlware.js';
import { createPostController,deletePostController ,getPostsController,getPostsWithCountController} from "./post.controller.js";
const router = Router()

router.post("/",authenticate,createPostController)
router.delete("/:postId",authenticate,deletePostController)
router.get("/details",getPostsController)
router.get("/comment-count",getPostsWithCountController)
export default router