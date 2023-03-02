import { Article } from "@prisma/client";
import { ApiProperty } from '@nestjs/swagger';


export class ArticleEntity implements Article {


    @ApiProperty()
    id: number;

    @ApiProperty()
    title: string;
    
    @ApiProperty({ required: true })
    description: string;
    
    @ApiProperty()
    body: string;
    
    @ApiProperty({ required: true, default: false })
    published: boolean = false;

    @ApiProperty({default: Date.now() })
    createdAt: Date;

    @ApiProperty({default: Date.now() })
    updatedAt: Date;
}
