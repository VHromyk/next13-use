'use client'
import React, {FormEventHandler} from 'react';
import {useRouter} from 'next/navigation';
import {signIn} from 'next-auth/react';

const SignInForm = () => {
    const router = useRouter();

    const handleSubmit: FormEventHandler<HTMLFormElement> = async(event) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget);

        const res = await signIn('credentials', {
            username: formData.get('username'),
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false
        })

        if(res && !res.error) {
            router.push('/profile')
        } else {
            console.log(res)
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="User name"/>
            <input type="email" name="email" required={true} placeholder="Email"/>
            <input type="password" name="password" required={true} placeholder="Password"/>
            <button type="submit">Sign In</button>
        </form>
    );
};

export { SignInForm };