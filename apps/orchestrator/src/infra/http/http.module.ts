import { Module } from '@nestjs/common';
import { MessageController } from './controller/message.controller';
import { ReceiveQuestionMessage } from '../../domain/use-cases/receive-question-message';
import { DatabaseModule } from '../database/database.module';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MessagingModule } from '../messaging/messaging.module';

@Module({
  imports: [
    DatabaseModule,
    MessagingModule,
  ],
  controllers: [MessageController],
  providers: [ReceiveQuestionMessage],
})
export class HttpModule {}
