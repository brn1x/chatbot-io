import { InMemoryMessagesRepository } from '../../../test/repositories/in-memory-messages-repository';
import { ReceiveQuestionMessage } from './receive-question-message';

describe('Receive Message', () => {
  it('should be able to receive a message', async () => {
    const messagesRepository = new InMemoryMessagesRepository();
    const receiveQuestionMessage = new ReceiveQuestionMessage(
      messagesRepository,
    );

    const { question } = await receiveQuestionMessage.execute({
      content: 'Test message question',
      from: 'user_test',
      type: 'QUESTION',
    });

    expect(messagesRepository.messages).toHaveLength(1);
    expect(messagesRepository.messages[0]).toEqual(question);
  });
});
