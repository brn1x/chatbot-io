import { Injectable } from '@nestjs/common';
import { Message } from '../entities/message/message';
import { MessageRepository } from '../repositories/message-repository';
import { MessagingRepository } from '../repositories/messaging-repository';

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
    private messagingRepository: MessagingRepository
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

    await this.messagingRepository.publish<Message>(question);

    return {
      question,
    };
  }
}
