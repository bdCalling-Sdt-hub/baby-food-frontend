'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const setAccessToken = (token: string) => {
      cookies().set('accessToken', token);
};

export const removeAccessToken = () => {
      cookies().set('accessToken', '', { maxAge: 0 });
      redirect('/');
};
