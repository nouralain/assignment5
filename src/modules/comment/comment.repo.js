import prisma from "../../DB/connections.db.js"

export const createComment=async(postId,userId,content)=>{
    return await prisma.comment.create({data:{postId,userId,content},select:{content:true,postId:true,userId:true}})
}

export const findCommentById=async(id)=>{
return await prisma.comment.findUnique({where:{id}})
}

export const updateComment = async(userId,id,content)=>{
    return await prisma.comment.update({where:{id},data:{content:content , userId}})
}

export const getCommentDetails = async(id)=>{
    return await prisma.comment.findUnique({where:{id},select:{id:true,content:true , author:{select:{id:true , name:true , email:true}},post:{select:{id:true , title:true , content:true}}}})
}

export const getNewestComments = async(postId)=>{
    const post= await prisma.post.findUnique({where:{id:postId},select:{comments:{take:3 , orderBy:{createdAt:"desc"},select:{id:true , content:true , createdAt:true}}}})
return post?.comments ?? []
}

export const commentBySearch = async(word)=>{
   const comment =  await prisma.comment.findMany({where:{content:{contains:word}}})
   const count = comment?.length
   return {count,comment}
}
export const findComment=async(postId , userId , content)=>{
return await prisma.comment.findFirst({where:{postId,userId,content}})
}