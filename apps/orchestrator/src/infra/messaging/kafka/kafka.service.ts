import { Inject, Injectable } from "@nestjs/common";
import { ClientKafka } from "@nestjs/microservices";
import { lastValueFrom } from "rxjs";
import { MessagingRepository } from "../../../domain/repositories/messaging-repository";

@Injectable()
export class KafkaService implements MessagingRepository {
  constructor(
    @Inject('QUESTIONS_SERVICE')
    private clientKafka: ClientKafka
  ){}

  async publish<T>(data: T) {
    await lastValueFrom(this.clientKafka.emit('message.receive', JSON.stringify(data)));
  }
}