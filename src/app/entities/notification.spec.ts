import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  test('it should be able to create a notification', () => {
    const notification = new Notification({
      recipientId: '123',
      content: new Content('Nova notificação de teste'),
      category: 'test',
    });

    expect(notification).toBeTruthy();
  });
});
