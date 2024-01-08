export abstract class MessagingRepository {
  abstract publish<T>(message: T): Promise<void>;
}