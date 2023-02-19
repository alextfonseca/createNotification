import { InMemoryNotificationsRepository } from 'src/test/repositories/in-memory-notifications-repositories';
import { SendNotification } from './send-notification';

describe('SendNotification', () => {
  it('should send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();

    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      recipientId: '123',
      content: 'Hello World',
      category: 'welcome',
    });

    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
