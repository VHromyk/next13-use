'use client'
import React, {FormEventHandler, useEffect, useState} from 'react';
import {getPostsBySearch} from '@/services/getPosts';
import {usePosts} from '@/store';



const PostSearch = () => {
    const [getPostsBySearch] = usePosts(state => [state.getPostsBySearch])
    const [search, setSearch] = useState('')

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault()

        await getPostsBySearch(search);

    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="search" placeholder="search" value={search} onChange={event=> setSearch(event.target.value)}/>
            <button type="submit">Search</button>
        </form>
    );
};

export {PostSearch};