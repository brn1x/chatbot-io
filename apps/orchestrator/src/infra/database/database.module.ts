import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { MessageRepository } from '../../domain/repositories/message-repository';
import { PrismaMessageRepository } from './prisma/repositories/prisma-message-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: MessageRepository,
      useClass: PrismaMessageRepository,
    },
  ],
  exports: [MessageRepository],
})
export class DatabaseModule {}
