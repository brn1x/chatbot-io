import { Body, Controller, Post } from '@nestjs/common';
import { ReceiveQuestionMessage } from '../../../domain/use-cases/receive-question-message';
import { ReceiveQuestionMessageBody } from '../dtos/receive-question-message-body';
import { QuestionMessageViewModel } from '../view-models/question-message-view-model';

@Controller('message')
export class MessageController {
  constructor(private receiveQuestionMessage: ReceiveQuestionMessage) {}

  @Post('')
  async create(@Body() body: ReceiveQuestionMessageBody) {
    const { content, from, type } = body;

    const { question } = await this.receiveQuestionMessage.execute({
      content,
      from,
      type,
    });

    return {
      question: QuestionMessageViewModel.toHttp(question),
    };
  }
}
