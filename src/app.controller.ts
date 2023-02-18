import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';

import { randomUUID } from 'node:crypto';
import { CreateNotificationBody } from './create-notification-body';

@Controller()
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { content, category, recipientId } = body;

    return this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content: content,
        category: category,
        recipientId: recipientId,
      },
    });
  }
}