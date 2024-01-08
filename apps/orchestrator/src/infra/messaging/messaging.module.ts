import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MessagingRepository } from '../../domain/repositories/messaging-repository';
import { KafkaService } from './kafka/kafka.service';

@Module({
  imports: [
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
  providers: [
    {
      provide: MessagingRepository,
      useClass: KafkaService,
    }
  ],
  exports: [MessagingRepository]
})
export class MessagingModule {}
