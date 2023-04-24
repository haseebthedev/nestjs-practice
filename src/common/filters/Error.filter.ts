import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class ErrorFilter implements ExceptionFilter {
  catch(error: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'INTERNAL_SERVER_ERROR';

    if (error instanceof HttpException) {
      status = error.getStatus();
      message = error.message;
    }

    response.status(status).json({
      error: message,
      path: request.url,
      stack: error.stack,
    });
  }
}
