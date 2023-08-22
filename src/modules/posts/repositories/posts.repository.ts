import { createPostDTO } from '../dtos/create-post.dto';
import { Post } from '../entities/posts.entitie';

export abstract class PostsRepository {
  abstract create(data: createPostDTO): Promise<Post>;
  abstract findAll(): Promise<Post[]>;
  abstract findOne(id: string): Promise<Post>;
}
