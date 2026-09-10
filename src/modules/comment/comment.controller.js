import successResponse from "../../common/utils/successResponse.js"
import { createCommentService,updateCommentService,getCommentDetailsService ,getNeswestCommentsService, commentBySearchService,findOrCreateCommentService} from "./comment.services.js"

export const createCommentController =async(req,res)=>{
    const userId = req.user.id
const {postId,content} = req.body
const data  = await createCommentService(postId,userId,content)
successResponse(res,{message:"Comment created successfully",status:201,data})
}

export const updateCommentController =async (req,res)=>{
        const userId = req.user.id
const {content} = req.body
const commentId = Number(req.params.commentId)
const data = await updateCommentService(userId,commentId,content)
    successResponse(res,{message:"Comment updated successfully",data})

}

export const getCommentDetailsController = async(req,res)=>{
    const id = Number(req.params.id)
    const data = await getCommentDetailsService(id)
        successResponse(res,{data})

}

export const getNewestCommentsController = async (req,res)=>{
        const postId = Number(req.params.postId)

        const data = await getNeswestCommentsService(postId)

            successResponse(res,{data})

}

export const getCommentBySearchController = async(req,res)=>{
    const {word} = req.query
    const data = await commentBySearchService(word)
                successResponse(res,{data})

}

export const findOrCreateCommentController = async (req,res)=>{
    const {postId , userId , content}= req.body
    const data = await findOrCreateCommentService(postId , userId , content)
                    successResponse(res,{data})

}