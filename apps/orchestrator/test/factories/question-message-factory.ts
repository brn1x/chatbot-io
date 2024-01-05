import {
  Message,
  MessageProps,
} from '../../src/domain/entities/message/message';

type Override = Partial<MessageProps>;

export function makeQuestion(override: Override = {}) {
  return new Message({
    content: 'Test message question',
    from: 'user_test',
    type: 'QUESTION',
    ...override,
  });
}
