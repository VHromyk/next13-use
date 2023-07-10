import React from 'react';
import {Metadata} from 'next';
import Link from 'next/link';


export async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')

    return response.json()
}

export const metadata: Metadata = {
    title: 'Blog | Next test',
}

export const revalidate = 10;


export default async function Blog() {
    const posts = await getData();

    return (
        <>
            <h1>
                Blog page
            </h1>
            <ul>
                {posts?.map((post: any) => <li key={post.id}>
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </li>)}
            </ul>
        </>

    );
};
