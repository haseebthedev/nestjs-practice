import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ErrorFilter } from './common/filters/Error.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /** Here you can also add middlewares functions. */
  app.useGlobalFilters(new ErrorFilter());
  await app.listen(3000);
}

bootstrap();
