import { Message } from '../entities/message/message';

export abstract class MessageRepository {
  abstract create(message: Message): Promise<void>;
}
