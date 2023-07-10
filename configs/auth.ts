import type {AuthOptions} from 'next-auth';
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from 'next-auth/providers/credentials';

export const authConfig: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string
        }),
        CredentialsProvider({
            name: "Email & Password",
            credentials: {
                username: { label: "Name", type: "text" },
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                // Make request to database
                const user = { id: "1", name: credentials?.username, email: credentials?.email }

                if (user) {
                    return user
                } else {
                    return null
                }
            }
        })
    ],
    // Connected custom page which is redirected to.
    pages: {
        signIn: '/signin'
    }
}