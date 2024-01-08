import { Module } from '@nestjs/common';
import { MessageController } from './controller/message.controller';
import { ReceiveQuestionMessage } from '../../domain/use-cases/receive-question-message';
import { DatabaseModule } from '../database/database.module';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    DatabaseModule,
    ClientsModule.register([
      {
        name: 'QUESTIONS_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'questions',
            brokers: ['kafka:29092'],
          },
        },
      },
    ]),
  ],
  controllers: [MessageController],
  providers: [ReceiveQuestionMessage],
})
export class HttpModule {}
