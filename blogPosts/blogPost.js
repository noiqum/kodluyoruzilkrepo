const posts = [
    {
        title: "post1",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
    },
    {
        title: "post2",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
    },
    {
        title: "post3",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
    }
]

const getPosts=()=>{
return console.log(posts)
}

const addPost=(newPost)=>{
    return new Promise((resolve,reject)=>{
        if(newPost){
            posts.push(newPost);
            resolve(true)
        }else{
            reject(false)
        }
    })
}

const publishPost=async(post)=>{
    try {
        await addPost(post);
        getPosts()
    } catch (error) {
        console.log("error:",error)
    }
}

publishPost( {
    title: "post4",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
})