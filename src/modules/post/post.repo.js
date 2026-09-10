import prisma from "../../DB/connections.db.js"

export const create =async (title,content,id)=>{
return await prisma.post.create({data:{title,content,userId:id}})
}

export const findPostById = async(id)=>{
    return await prisma.post.findUnique({where:{id}})
}

export const deletePost = async(id)=>{
return await prisma.post.update({where:{id},data:{isActive:false}})
}

export const getPosts = async()=>{
    return await prisma.post.findMany({select:{id:true,title:true,author:{select:{id:true,name:true}},comments:{select:{id:true,content:true}}},where:{isActive:true}})
}

export const getPostsWithCount = async()=>{
    return await prisma.post.findMany({select:{id:true,title:true ,_count:{select:{comments:true}}}})
}