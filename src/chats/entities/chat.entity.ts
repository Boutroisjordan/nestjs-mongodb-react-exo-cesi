import { Chat } from "@prisma/client";
import { ApiProperty } from '@nestjs/swagger';

export class ChatEntity implements Chat {
    @ApiProperty()
    id: string;

    @ApiProperty()
    sender: string;
    
    @ApiProperty()
    message: string;
    
    @ApiProperty()
    room: string;

    @ApiProperty({default: Date.now() })
    time: Date;

}
