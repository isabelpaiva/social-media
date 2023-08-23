import { PrismaService } from 'src/database/prisma.service';
import { createPostDto } from '../../dtos/create-post.dto';
import { Post } from '../../entities/posts.entitie';
import { PostsRepository } from '../posts.repository';
import { Injectable } from '@nestjs/common';
import { UpdatePostDto } from '../../dtos/update-post.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class postsPrismaRepository implements PostsRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: createPostDto, userId: string): Promise<Post> {
    const post = new Post();
    Object.assign(post, {
      ...data,
    });
    const newPost = await this.prisma.post.create({
      data: {
        id: post.id,
        content: post.content,
        userId,
        createdAt: post.createdAt,
      },
    });

    return newPost;
  }
  async findAll(): Promise<Post[]> {
    const posts = await this.prisma.post.findMany();
    return posts;
  }
  async findOne(id: string): Promise<Post> {
    const post = await this.prisma.post.findFirst({
      where: { id },
    });

    return post;
  }

  async update(id: string, data: UpdatePostDto): Promise<Post> {
    const post = await this.prisma.post.update({
      where: { id },
      data: { ...data },
    });

    return plainToInstance(Post, post);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.post.delete({
      where: { id },
    });
  }
}
