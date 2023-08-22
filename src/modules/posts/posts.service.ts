import { Injectable, NotFoundException } from '@nestjs/common';
import { createPostDTO } from './dtos/create-post.dto';
import { PostsRepository } from './repositories/posts.repository';

@Injectable()
export class PostsService {
  constructor(private postsRepository: PostsRepository) {}

  async create(data: createPostDTO) {
    return await this.postsRepository.create(data);
  }

  async findAll() {
    return await this.postsRepository.findAll();
  }

  async findOne(id: string) {
    const posts = await this.postsRepository.findOne(id);
    if (!posts) {
      throw new NotFoundException('Post not found');
    }

    return posts;
  }
}
