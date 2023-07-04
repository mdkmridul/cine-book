import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

import { MongoError } from 'mongodb';
import { Error } from 'mongoose';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: Record<string, unknown>, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : exception instanceof MongoError
        ? 400
        : exception instanceof Error
        ? 400
        : HttpStatus.INTERNAL_SERVER_ERROR;

    console.log(exception);
    response.status(status).json({
      status: 'Fail',
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: exception?.message ?? 'Something Went Wrong',
    });
  }
}
