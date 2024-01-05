import { makeResponse } from '../../../../test/factories/response-message-factory';
import { makeQuestion } from '../../../../test/factories/question-message-factory';

describe('Message', () => {
  it('should be able to create a question message', () => {
    const question = makeQuestion();

    expect(question).toBeTruthy();
    expect(question.type).toEqual('QUESTION');
  });

  it('should be able to create a response message', () => {
    const response = makeResponse();

    expect(response).toBeTruthy();
    expect(response.type).toEqual('RESPONSE');
    expect(response).toHaveProperty('props.to');
  });
});
