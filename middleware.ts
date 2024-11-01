import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
      const token = cookies().get('accessToken')?.value;

      if (!token) {
            return NextResponse.redirect(new URL('/', request.url));
      }

      return NextResponse.next();
}

export const config = {
      matcher: ['blogs-details', '/contact-details', '/faq-details', 'products-details'],
};
