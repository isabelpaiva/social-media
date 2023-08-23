import { createPostDTO } from '../dtos/create-post.dto';
import { UpdatePostDto } from '../dtos/update-post.dto';
import { Post } from '../entities/posts.entitie';

export abstract class PostsRepository {
  abstract create(data: createPostDTO, userId: string): Promise<Post>;
  abstract findAll(): Promise<Post[]>;
  abstract findOne(id: string): Promise<Post>;
  abstract delete(id: string): Promise<void>;
  abstract update(id: string, data: UpdatePostDto): Promise<Post>;
}
