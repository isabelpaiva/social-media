// import { createPostDTO } from '../dtos/create-post.dto';
// import { Post } from '../entities/posts.entitie';
// import { PostsRepository } from './posts.repository';

// export class PostsInMemoryRepository implements PostsRepository {
//   private database: Post[] = [];

//   async create(data: createPostDTO): Promise<Post> {
//     const newPost = new Post();
//     Object.assign(newPost, {
//       ...data,
//     });

//     this.database.push(newPost);

//     return newPost;
//   }

//   async findAll(): Promise<Post[]> {
//     return this.database;
//   }

//   async findOne(id: string): Promise<Post> {
//     const post = this.database.find((post) => post.id == id);

//     return post;
//   }
// }
