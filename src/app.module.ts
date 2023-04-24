import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { BookModule } from './modules/book/book.module';
import { UsersModule } from './modules/users/users.module';
import { RequestLoggerMiddleware } from './common/middlewares/logger.middleware';

@Module({
  imports: [BookModule, UsersModule],
  controllers: [],
  providers: [],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestLoggerMiddleware).forRoutes("*")
  }
 }
