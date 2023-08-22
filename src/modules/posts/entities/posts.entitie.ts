import { randomUUID } from 'crypto';

export class Post {
  readonly id: string;
  content: string;
  createdAt: Date;
  userId: string;

  constructor() {
    this.id = randomUUID();
    this.createdAt = this.createdAt || new Date();
  }
}
