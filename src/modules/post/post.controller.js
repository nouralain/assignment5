import successResponse from "../../common/utils/successResponse.js"
import { createPostService,deletePostService,getPostsService ,getPostsWithCountService} from "./post.services.js"

export const createPostController=async(req,res,next)=>{
    const {title,content} = req.body
    const authorId = req.user.id
    const data = await createPostService(title,content,authorId)
successResponse(res,{message:"Post created successfully" , status:201 ,data})
}

export const deletePostController = async(req,res,next)=>{
    const authorId = req.user.id
    const postId = Number(req.params.postId)
  await deletePostService(authorId,postId)
    successResponse(res,{message:"Post deleted successfully" , status:200})

}

export const getPostsController =async (req,res,next)=>{
const data=await getPostsService()
        successResponse(res,{data})

}

export const getPostsWithCountController = async(req,res)=>{
    const data=await getPostsWithCountService()
            successResponse(res,{data})

}