import { Module } from '@nestjs/common';
import { MessageController } from './controller/message.controller';
import { ReceiveQuestionMessage } from '../../domain/use-cases/receive-question-message';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [MessageController],
  providers: [ReceiveQuestionMessage],
})
export class HttpModule {}
