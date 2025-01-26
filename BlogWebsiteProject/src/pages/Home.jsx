import React, { useState, useEffect } from 'react'
import AppwriteService from "../appwrite/config";
import { Container, PostCard } from '../components';
import { Link } from 'react-router-dom';

function Home() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        AppwriteService.getPost([]).then((posts) => {
            if (posts) setPosts(posts.documents);
        }) 
    }, [])

    if (posts.length === 0) {
        return (
            <div className='w-full py-8 mt-4 text-center'>
                <Container>
                    <div className='flex flex-wrap my-36'>
                        <div className='p-2 w-full'>
                            <Link to="/login">
                                <h1 className='inline-block p-5 text-2xl font-bold border rounded-lg hover:text-white'>
                                    Login to read posts
                                </h1>
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {
                        posts.map((post) => (
                            <div key={post.$id} className='p-2 w-1/4'>
                                {/* <PostCard post={post} /> */}
                                <PostCard $id={post.$id} title={post.title} featuredImage={post.featuredImage} />
                            </div>
                        ))
                    }
                </div>
            </Container>
        </div>
    )
}

export default Home