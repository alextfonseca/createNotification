import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a new content', () => {
    const content = new Content('Nova notificação de teste');

    expect(content).toBeTruthy();
  });

  it('should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('Olá')).toThrow();
  });

  it('should not be able to create a notification content with more than 255 characters', () => {
    expect(() => new Content('a'.repeat(260))).toThrow();
  });
});
