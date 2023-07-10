import React from "react"
import Link from 'next/link';

type Props = {
    children: React.ReactNode
}

export default function AboutLayout({children}: Props) {
    return <div>
        <h1>About us</h1>
        <ul>
            <li>
                <Link href="/about/contacts">Contacts</Link>
            </li>
            <li>
                <Link href="/about/team">Team</Link>
            </li>
        </ul>
        {children}
    </div>
}