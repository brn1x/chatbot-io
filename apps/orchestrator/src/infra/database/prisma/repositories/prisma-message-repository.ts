import { Message } from '../../../../domain/entities/message/message';
import { MessageRepository } from '../../../../domain/repositories/message-repository';
import { PrismaService } from '../prisma.service';
import { PrismaMessageMapper } from '../mappers/prisma-question-mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaMessageRepository implements MessageRepository {
  constructor(private prisma: PrismaService) {}

  async create(message: Message): Promise<void> {
    const raw = PrismaMessageMapper.toPrisma(message);

    await this.prisma.message.create({
      data: raw,
    });
  }
}
