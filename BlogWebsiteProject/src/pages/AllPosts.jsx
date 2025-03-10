import React, { useState, useEffect } from 'react';
import AppwriteService from "../appwrite/config";
import { PostCard, Container } from '../components';

function AllPosts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        AppwriteService.getPost([]).then((posts) => {
            if (posts) setPosts(posts.documents);
        }) 
    }, [])

    return (
        <div className='w-full py-8 my-48'>
            <Container>
                <div className='flex flex-wrap'>
                    {
                        posts.map((post) => (
                            <div key={post.$id} className='p-2 w-1/4'>
                                <PostCard $id={post.$id} title={post.title} featuredImage={post.featuredImage} />
                            </div>
                        ))
                    }
                </div>
            </Container>
        </div>
  )
}

export default AllPosts