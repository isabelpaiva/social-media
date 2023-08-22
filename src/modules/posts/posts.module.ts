import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { PostsRepository } from './repositories/posts.repository';
import { PostsInMemoryRepository } from './repositories/posts.in-memory.repository';

@Module({
  controllers: [PostsController],
  providers: [
    PostsService,
    {
      provide: PostsRepository,
      useClass: PostsInMemoryRepository,
    },
  ],
})
export class PostsModule {}
