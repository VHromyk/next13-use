'use client'
import React, {useEffect} from 'react';
import Link from 'next/link';
import {usePosts} from '@/store';
import {shallow} from 'zustand/shallow';

const Posts = () => {
    const [posts, loading, getAllPosts] = usePosts(state => [state.posts, state.loading, state.getAllPosts], shallow);

    useEffect(()=> {
        getAllPosts()
    }, [getAllPosts])

    if(loading) {
        return <h3>Loading...</h3>
    }
    return (
        <ul>
            {posts?.map((post: any) => <li key={post.id}>
                <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </li>)}
        </ul>
    );
};

export {Posts};