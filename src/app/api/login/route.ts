import connectMongoDB from '@/libs/dbConnect';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Admin } from '@/model/admin.model';
import { NextRequest, NextResponse } from 'next/server';
import { apiResponse, handleError } from '@/libs/response';
import { StatusCodes } from 'http-status-codes';

const createToken = (id: string, name: string) => {
      return jwt.sign({ id, name }, process.env.JWT_SECRET as string, { expiresIn: '30d' });
};

export async function POST(request: NextRequest, response: NextResponse) {
      await connectMongoDB();

      try {
            const { email, password } = await request.json();
            const admin = await Admin.findOne({ email });
            if (!admin) throw new Error('Invalid email');

            const isPasswordValid = await bcrypt.compare(password, admin.password);
            if (!isPasswordValid) throw new Error('Invalid password');

            const token = createToken(admin._id, admin.name);
            return apiResponse(StatusCodes.OK, 'Login in successful', token);
      } catch (error) {
            return handleError(error);
      }
}
