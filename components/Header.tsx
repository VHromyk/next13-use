import React from 'react';
import {Navigation} from '@/components/Navigation';

const navLinks = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Blog',
        href: '/blog'
    },
    {
        label: 'About',
        href: '/about'
    },
]

const Header = () => {
    return (
        <header>
            <Navigation navLinks={navLinks} />
        </header>
    );
};

export {Header};