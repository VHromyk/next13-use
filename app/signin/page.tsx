import React from 'react';
import {GoogleButton} from '@/components/GoogleButton';
import {SignInForm} from '@/components/SignInForm';
import {getServerSession} from 'next-auth';
import {authConfig} from '@/configs/auth';
import {redirect} from 'next/navigation';

// Custom page Sign In

export default async function SignIn() {
    const session = await getServerSession(authConfig as any);

    if(session && session?.user?.name) {
        redirect('/profile')
    }

    return (
        <div>
            <h1>SignIn</h1>
            <GoogleButton />
            <div>or</div>
            <SignInForm/>
        </div>
    );
};