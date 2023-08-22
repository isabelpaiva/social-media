import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { PostsRepository } from './repositories/posts.repository';
import { PrismaService } from 'src/database/prisma.service';
import { postsPrismaRepository } from './repositories/prisma/posts.prisma.repository';

@Module({
  controllers: [PostsController],
  providers: [
    PostsService,
    PrismaService,
    {
      provide: PostsRepository,
      useClass: postsPrismaRepository,
    },
  ],
})
export class PostsModule {}
