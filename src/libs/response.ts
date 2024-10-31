import { NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';

export const apiResponse = (status: number, message: string, data?: any) => {
      return NextResponse.json({ status, message, data });
};

export const handleError = (error: any) => {
      console.error(error);
      return apiResponse(StatusCodes.INTERNAL_SERVER_ERROR, 'Internal Server Error', error);
};
