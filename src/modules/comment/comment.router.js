import { Router } from "express";
import { createCommentController ,updateCommentController,getCommentDetailsController,getNewestCommentsController,getCommentBySearchController,findOrCreateCommentController} from "./comment.controller.js";
import { authenticate } from "../../common/middlewares/auth.middlware.js";
const router = Router()

router.post("/",authenticate,createCommentController)
router.patch("/:commentId",authenticate,updateCommentController)
router.get("/details/:id",getCommentDetailsController)
router.get("/newest/:postId",getNewestCommentsController)
router.get("/search",getCommentBySearchController)
router.get("/find-or-create",findOrCreateCommentController)
export default router