import { NestFactory } from '@nestjs/core';
import { NextFunction, Request, Response } from 'express';
import { AppModule } from './app.module';

/**
 * This is a global middleware. We can declare global middleware only with functions.
 */
function globalMiddlewareOne(req: Request, res: Response, next: NextFunction) {
  console.log("This is the globalMiddleware number 1.");
  next()
}

function globalMiddlewareTwo(req: Request, res: Response, next: NextFunction) {
  console.log("This is the globalMiddleware number 2.");
  next()
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(globalMiddlewareOne)
  app.use(globalMiddlewareTwo)
  await app.listen(3000);
}

bootstrap();
