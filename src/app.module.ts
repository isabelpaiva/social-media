import { Module } from '@nestjs/common';
import { PostsModule } from './modules/posts/posts.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [PostsModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
