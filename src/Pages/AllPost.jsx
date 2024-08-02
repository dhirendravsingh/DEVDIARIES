import authService from "../appwrite/auth";
import { Container, PostCard } from "../components"
import appwriteService from "../appwrite/config.js"
import { useEffect, useState } from "react";


export default function AllPost(){

const [posts, setPosts] = useState([])

useEffect(()=>{

}, [])

appwriteService.getPost([]).then((posts) =>{
    if(posts){
        setPosts(posts.documents)
    }
})

    return(
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post) => (
                        <div key={post.$id} className="p-2 w-1/4"> 
                        <PostCard post={post} />
                        </div>

                    ))}
                </div>
            </Container>

        </div>
    )
}