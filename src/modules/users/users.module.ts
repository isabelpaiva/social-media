import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/database/prisma.service';
import { UsersRepository } from './repositories/users.repositories';
import { usersPrismaRepository } from './repositories/prisma/users.prisma.repository';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    PrismaService,
    {
      provide: UsersRepository,
      useClass: usersPrismaRepository,
    },
  ],
  exports: [UsersService],
})
export class UsersModule {}
