import { Injectable, NotFoundException } from '@nestjs/common';
import { createPostDTO } from './dtos/create-post.dto';
import { PostsRepository } from './repositories/posts.repository';

@Injectable()
export class PostsService {
  constructor(private postsRepository: PostsRepository) {}

  async create(data: createPostDTO, userId: string) {
    return await this.postsRepository.create(data, userId);
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

  // async update(id: string, updateUserDto: UpdateUserDto) {
  //   const findUser = await this.postsRepository.findOne(id);

  //   if (!findUser) {
  //     throw new NotFoundException('user not found');
  //   }

  //   return this.postsRepository.update(id, updateUserDto);
  // }

  async remove(id: string) {
    const findPost = await this.postsRepository.findOne(id);

    if (!findPost) {
      throw new NotFoundException('post not found');
    }

    return this.postsRepository.delete(id);
  }
}
