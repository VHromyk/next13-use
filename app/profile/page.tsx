import React from 'react';
import {getServerSession} from 'next-auth';
import {authConfig} from '@/configs/auth';

export default async function Profile() {
    const session = await getServerSession(authConfig as any);

    return (
        <div>
            <h1>Profile of {session && session?.user?.name}</h1>
            {session && session?.user?.image && <img src={session.user.image} alt="" />}
        </div>
    );
};
