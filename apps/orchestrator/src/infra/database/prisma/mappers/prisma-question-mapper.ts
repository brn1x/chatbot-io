import { Message as RawMessage } from '@prisma/client';
import { Message } from '../../../../domain/entities/message/message';

export class PrismaMessageMapper {
  static toPrisma(message: Message) {
    return {
      id: message.id,
      type: message.type,
      category: message.category,
      content: message.content,
      from: message.from,
      createdAt: message.createdAt,
    };
  }

  static toDomain(raw: RawMessage): Message {
    return new Message(
      {
        content: raw.content,
        from: raw.from,
        type: raw.type,
        createdAt: raw.createdAt,
      },
      raw.id,
    );
  }
}
