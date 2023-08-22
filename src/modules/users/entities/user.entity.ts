import { randomUUID } from 'crypto';

export class User {
  readonly id: string;
  name: string;
  email: string;
  password: string;
  bio: string;
  birthDate: string;
  createdAt: Date;

  constructor() {
    this.id = randomUUID();
    this.createdAt = new Date();
  }
}
