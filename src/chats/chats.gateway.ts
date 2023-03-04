import { WebSocketGateway, SubscribeMessage, MessageBody,   OnGatewayInit,
  WebSocketServer, } from '@nestjs/websockets';
import { ChatsService } from './chats.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { Socket, Server } from 'socket.io';


@WebSocketGateway({
  namespace: '/chat',
  cors: true,
})
export class ChatsGateway {
  constructor(private readonly chatsService: ChatsService) {}
  @WebSocketServer() wss: Server;

  @SubscribeMessage('joinRoom')
  async handleRoomJoin(client: Socket, room: string) {
    client.join(room);
    client.emit('joinedRoom', room);
    client.emit("oldMessage", await this.chatsService.findAll())
  }
  @SubscribeMessage('getRooms')
  async handleRoomGet(client: Socket, room: string) {
    client.emit("getRooms", await this.chatsService.findAll())
  }

  @SubscribeMessage('chatToServer')
  async handleMessage(
    client: Socket,
    message: { sender: string; room: string; message: string },
  ) {
    
    this.wss.to(message.room).emit('chatToClient', message);
  }
  // @SubscribeMessage('createChat')
  // create(@MessageBody() createChatDto: CreateChatDto) {
  //   return this.chatsService.create(createChatDto);
  // }

  // @SubscribeMessage('findAllChats')
  // findAll() {
  //   return this.chatsService.findAll();
  // }

  // @SubscribeMessage('findOneChat')
  // findOne(@MessageBody() id: number) {
  //   return this.chatsService.findOne(id);
  // }

  // @SubscribeMessage('updateChat')
  // update(@MessageBody() updateChatDto: UpdateChatDto) {
   
  // }

  // @SubscribeMessage('removeChat')
  // remove(@MessageBody() id: number) {
  //   return this.chatsService.remove(id);
  // }
}
