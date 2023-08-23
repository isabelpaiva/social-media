import { PartialType } from '@nestjs/mapped-types';
import { createPostDTO } from './create-post.dto';

export class UpdatePostDto extends PartialType(createPostDTO) {}
