import { Message } from '../../../domain/entities/message/message';

export class QuestionMessageViewModel {
  static toHttp(question: Message) {
    return {
      id: question.id,
      from: question.from,
      category: question.category,
      content: question.content,
      type: question.type,
      createdAt: question.createdAt,
    };
  }
}
