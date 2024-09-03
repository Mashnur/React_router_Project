import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const posts=useLoaderData();
    return (
        <div>
            <h3>{posts.length}</h3>
            <div className="bg-pink-400">
                {
                    posts.map(post=><Post key={post.id} post={post}></Post>)
                }
            </div>
            
        </div>
    );
};

export default Posts;