import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class createPostDto {
  @ApiProperty()
  @IsString()
  content: string;
}
