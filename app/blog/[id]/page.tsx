import React from 'react';
import {Metadata} from 'next';
import {getData} from '@/app/blog/page';

async function getDataById(id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {next: {revalidate: 60}})

    return response.json()
}

type Props = {
    params: {
        id: string;
    }
}

// Make SSG for each post
export async function generateStaticParams() {
    const posts: any[] = await getData();

    return posts.map(post => ({slug: post.id.toString()}))

}

export async function generateMetadata({params: {id}}: Props): Promise<Metadata> {
    const post = await getDataById(id);
    return {
        title: post.title
    }
}

export default async function Post({params: {id}}: Props) {
    const post = await getDataById(id);

    return (
        <>
            <h3>{post.title}</h3>
            <br/>
            <p>{post.body}</p>
        </>
    );
};