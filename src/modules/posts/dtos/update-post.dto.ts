import { PartialType } from '@nestjs/mapped-types';
import { createPostDto } from './create-post.dto';

export class UpdatePostDto extends PartialType(createPostDto) {}
