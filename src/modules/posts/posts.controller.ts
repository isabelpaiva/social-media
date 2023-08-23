import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  Request,
  Delete,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { createPostDTO } from './dtos/create-post.dto';
import { JwtauthGuard } from '../auth/jwt-auth.guard';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @UseGuards(JwtauthGuard)
  @Post()
  async create(@Body() data: createPostDTO, @Request() req) {
    return await this.postsService.create(data, req.user.id);
  }

  @Get()
  async findAll() {
    return await this.postsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.postsService.findOne(id);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsService.remove(id);
  }
}
