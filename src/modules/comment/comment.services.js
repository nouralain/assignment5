import { trimString } from "../../common/utils/trimString.js"
import { findPostById } from "../post/post.repo.js"
import { createComment, findCommentById, updateComment,getCommentDetails,getNewestComments,commentBySearch,findComment } from "./comment.repo.js"

export const createCommentService =async (postId,userId,content)=>{
if(!postId || !content)throw new Error("please fill all fields",{cause:{status:400}})
const isExist = await findPostById(postId)
if(!isExist)throw new Error("No post found with this id",{cause:{status:404}})
   const [trimmedContent]= trimString(content)

return await createComment(postId,userId,trimmedContent)
}

export const updateCommentService =async (userId,commentId,content)=>{
if(isNaN(commentId))throw new Error("Invalid comment id format",{cause:{status:400}})
const isExist = await findCommentById(commentId)
if(!isExist)throw new Error("No comment found with this id",{cause:{status:404}})
   const [trimmedContent]= trimString(content)
if(isExist.content===trimmedContent)throw new Error("No changes happened",{cause:{status:400}})

return await updateComment(userId,commentId,trimmedContent)
}

export const getCommentDetailsService=async (id)=>{
    if(isNaN(id))throw new Error("Invalid comment id format",{cause:{status:400}}) 
    const isExisted = await findCommentById(id)
if(!isExisted)throw new Error("No comment found with this id",{cause:{status:404}})
return await getCommentDetails(id)
}

export const getNeswestCommentsService = async(postId)=>{
        if(isNaN(postId))throw new Error("Invalid post id format",{cause:{status:400}}) 
const isExist = await findPostById(postId)
if(!isExist)throw new Error("No post found with this id",{cause:{status:404}})
return await getNewestComments(postId)

}

export const commentBySearchService = async(word)=>{
    if(!word)throw new Error("No comments found",{cause:{status:404}})
    const [trimmedWord] = trimString(word)
const data= await commentBySearch(trimmedWord)
if(data.comment.length===0)throw new Error("No comment found",{cause:{status:404}})
    return data
}

export const findOrCreateCommentService = async (postId , userId , content)=>{
    if(!postId || !userId || !content)throw new Error("Please fill all fields",{cause:{status:400}})
      const isPostExist =   await findPostById(postId)
    if(!isPostExist)throw new Error("No post exist with this id",{cause:{status:404}})
            const [trimmedContent] = trimString(content)

   const isCommentExist = await findComment(postId , userId , trimmedContent)
if(!isCommentExist){
 return  await createComment(postId , userId , trimmedContent)
 
}
return {isCommentExist,"Created":false}
}