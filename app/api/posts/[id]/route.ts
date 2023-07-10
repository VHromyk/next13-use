import {NextResponse} from 'next/server';
import {headers, cookies} from 'next/headers';
import {redirect} from 'next/navigation';

export async function DELETE(req: Request, {params}: {params: {id: string}}) {
    const id = params.id;

    //Working with headers
    const headersList = headers()
    const type = headersList.get('Content-Type')

    //Working with cookies
    const cookiesList = cookies()
    const coo2 = cookiesList.get('Cookie_2')?.value

    //Working with redirect
    // redirect('/blog')

    return NextResponse.json({id, type, coo2})
}