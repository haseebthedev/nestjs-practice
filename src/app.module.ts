import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [BookModule, UsersModule],
  controllers: [],
  providers: [],
  exports: []
})

export class AppModule {
  constructor() {
    console.log("AppModule");
}
}
