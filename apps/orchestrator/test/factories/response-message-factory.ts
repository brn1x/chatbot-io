import {
  Message,
  MessageProps,
} from '../../src/domain/entities/message/message';

type Override = Partial<MessageProps>;

export function makeResponse(override: Override = {}) {
  return new Message({
    content: 'Test message response',
    from: 'bot_test',
    to: 'user_test',
    type: 'RESPONSE',
    ...override,
  });
}
