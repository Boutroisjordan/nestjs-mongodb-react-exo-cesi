import { Module } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { ChatsGateway } from './chats.gateway';
import { Prisma } from '@prisma/client';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [ChatsService],
  imports: [PrismaModule],
  exports: [ChatsService]
})
export class ChatsModule {}

