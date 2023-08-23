import { IsString } from 'class-validator';

export class createPostDTO {
  @IsString()
  content: string;
  @IsString()
  userId: string;
}
