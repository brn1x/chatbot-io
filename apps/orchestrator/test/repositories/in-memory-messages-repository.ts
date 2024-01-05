import { Message } from '../../src/domain/entities/message/message';
import { MessageRepository } from '../../src/domain/repositories/message-repository';

export class InMemoryMessagesRepository implements MessageRepository {
  public messages: Message[] = [];

  async create(message: Message): Promise<void> {
    this.messages.push(message);
  }
}
