import { NextRequest } from 'next/server';
import connectMongoDB from '@/libs/dbConnect';
import { Product } from '@/model/product.model';
import { apiResponse, handleError } from '@/libs/response';
import mongoose from 'mongoose';
import { StatusCodes } from 'http-status-codes';

const validateObjectId = (id: string) => {
      return mongoose.isValidObjectId(id);
};

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
      try {
            await connectMongoDB();

            const product = await Product.findById(params.id);
            if (!product) {
                  return apiResponse(StatusCodes.NOT_FOUND, 'Product Not Found');
            }

            return apiResponse(StatusCodes.OK, 'Single product retrieved successfully', product);
      } catch (error) {
            return handleError(error);
      }
}

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
      try {
            await connectMongoDB();

            const data = await request.json();
            const product = await Product.findByIdAndUpdate(params.id, data, { new: true });
            if (!product) {
                  return apiResponse(StatusCodes.NOT_FOUND, 'Product not found');
            }

            return apiResponse(StatusCodes.OK, 'Product updated successfully', product);
      } catch (error) {
            return handleError(error);
      }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
      try {
            await connectMongoDB();

            const product = await Product.findByIdAndDelete(params.id);
            if (!product) {
                  return apiResponse(StatusCodes.NOT_FOUND, 'Product not found');
            }

            return apiResponse(StatusCodes.OK, 'Product deleted successfully');
      } catch (error) {
            return handleError(error);
      }
}
