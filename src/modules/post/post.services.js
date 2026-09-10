import { trimString } from "../../common/utils/trimString.js"
import { create, deletePost, findPostById, getPosts, getPostsWithCount } from "./post.repo.js"

export const createPostService =async (title,content,authorId)=>{
    if(!title||!content)throw new Error("Please fill all fields",{cause:{status:400}})
const [trimmedTitle, trimmedContent]=trimString(title,content)
const data =await create(trimmedTitle, trimmedContent,authorId)
if(!data)throw new Error("Couldn't create post , try again",{cause:{status:400}})
    return data
}

export const deletePostService = async(authorId,postId)=>{
    if(isNaN(postId))throw new Error("invalid id format",{cause:{status:400}})
    const postDetails = await findPostById(postId)
if(!postDetails)throw new Error("This post is not found",{cause:{status:404}})
    if(postDetails.userId!==authorId)throw new Error("Not authorized to make this operation",{cause:{status:403}})
    if(postDetails.isActive===false)throw new Error("Post not found or deleted",{cause:{status:404}})

    return await deletePost(postId)
    
}
export const getPostsService=async()=>{
return await getPosts()
}

export const getPostsWithCountService = async()=>{
    const posts= await getPostsWithCount()
    return posts?.map((post)=>({
        id:post.id,
        title:post.title,
        commentCount:post._count.comments
    }))
}