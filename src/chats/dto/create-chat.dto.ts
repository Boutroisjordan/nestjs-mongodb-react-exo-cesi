import { ApiProperty } from '@nestjs/swagger';

export class CreateChatDto {
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
