import { Injectable } from '@nestjs/common';
import { MessagesRespository } from './messages.respository';

@Injectable()
export class MessagesService {
  constructor(public messagesRespository: MessagesRespository) {}

  findAll() {
    return this.messagesRespository.findAll();
  }
  create(content: string) {
    return this.messagesRespository.create(content);
  }
  findOne(id: string) {
    return this.messagesRespository.findOne(id);
  }
}
