"use client"

import React from 'react';
import {signIn} from 'next-auth/react';
import {useSearchParams} from 'next/navigation';

const GoogleButton = () => {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/'

    return (
        <button onClick={()=> signIn('google', {callbackUrl})}>
            Sign In with Google
        </button>
    );
};

export { GoogleButton };