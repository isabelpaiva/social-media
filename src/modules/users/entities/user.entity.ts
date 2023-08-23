import { Exclude } from 'class-transformer';
import { randomUUID } from 'crypto';

export class User {
  readonly id: string;
  name: string;
  email: string;

  bio: string;
  birthDate: string;
  createdAt: Date;

  @Exclude()
  password: string;

  constructor() {
    this.id = randomUUID();
    this.createdAt = new Date();
  }
}
