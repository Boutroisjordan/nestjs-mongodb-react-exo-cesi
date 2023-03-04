import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ArticlesModule } from './articles/articles.module';
// import { MessagesModule } from './message/message.module';
import { ChatsModule } from './chats/chats.module';
import { ChatsGateway } from './chats/chats.gateway';

@Module({
  imports: [PrismaModule, ArticlesModule, ChatsModule],
  controllers: [AppController],
  providers: [AppService, ChatsGateway],
})
export class AppModule {}
