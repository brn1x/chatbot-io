import { Inject, Injectable } from '@nestjs/common';
import { Message } from '../entities/message/message';
import { MessageRepository } from '../repositories/message-repository';
import { lastValueFrom } from 'rxjs';
import { ClientKafka } from '@nestjs/microservices';

interface ReceiveQuestionMessageRequest {
  content: string;
  from: string;
  type: 'QUESTION';
}

interface ReceiveQuestionMessageResponse {
  question: Message;
}

@Injectable()
export class ReceiveQuestionMessage {
  constructor(
    private messageRepository: MessageRepository,
    @Inject('QUESTIONS_SERVICE')
    private kafkaClient: ClientKafka
  ) {}

  async execute(
    request: ReceiveQuestionMessageRequest,
  ): Promise<ReceiveQuestionMessageResponse> {
    const { content, from, type } = request;

    const question = new Message({
      content,
      from,
      type,
    });

    await this.messageRepository.create(question);

    await lastValueFrom(this.kafkaClient.emit('message.receive', JSON.stringify(question)));

    return {
      question,
    };
  }
}
