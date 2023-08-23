import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  Request,
  Delete,
  Put,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { createPostDto } from './dtos/create-post.dto';
import { JwtauthGuard } from '../auth/jwt-auth.guard';
import { UpdatePostDto } from './dtos/update-post.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Post()
  @UseGuards(JwtauthGuard)
  @ApiBearerAuth()
  async create(@Body() data: createPostDto, @Request() req) {
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

  @UseGuards(JwtauthGuard)
  @Put(':id')
  @ApiBearerAuth()
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(id, updatePostDto);
  }

  @UseGuards(JwtauthGuard)
  @Delete(':id')
  @ApiBearerAuth()
  remove(@Param('id') id: string) {
    return this.postsService.remove(id);
  }
}
