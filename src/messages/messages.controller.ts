/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { IMessage } from 'src/types/message.type';
import { CreateMessageDtoV2 } from './dtos/create-message.dto';

@Controller()
export class MessagesController {
  @Get('messages')
  listMessage(@Query() query: any): string {
    // Ràng buộc dữ liệu cho Messages như thế nào ? ngoài việc dùng any ?
    console.log('query: ', query);

    return `This will return all the messages`;
  }

  @Post('messages')
  createMessage(@Body() createMessageDto: CreateMessageDtoV2) {
    console.log('createMessageDto: ', createMessageDto);

    return `This will create a message`;
  }

  @Get('messages/:id')
  getMessageById(@Param('id') id: string) {
    console.log('id: ', id);
    return `This will return one message by id: ${id}`;
  }
}
